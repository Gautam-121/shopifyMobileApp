require('@shopify/shopify-api/adapters/node');
const dotenv = require('dotenv');
const express = require('express');
const payload = require('payload');
const { resolve } = require('path');
const shopify = require('./utils/shopifyConfig.js');
const cors = require('cors');
const sessionHandler = require('./utils/sessionHandler.js');
const csp = require('./middleware/csp.js');
const setupCheck = require('./utils/setupCheck.js');
const {
  customerDataRequest,
  customerRedact,
  shopRedact,
} = require('./controllers/gdpr.js');
const applyAuthMiddleware = require('./middleware/auth.js');
const isShopActive = require('./middleware/isShopActive.js');
const verifyHmac = require('./middleware/verifyHmac.js');
const verifyProxy = require('./middleware/verifyProxy.js');
const verifyRequest = require('./middleware/verifyRequest.js');
const proxyRouter = require('./routes/app_proxy/index.js');
const router = require('./routes/index.js');
const webhookRegistrar = require('./webhooks/index.js');
const fileUpload = require('express-fileupload');

dotenv.config();
setupCheck();

const PORT = parseInt(process.env.PORT, 10) || 8081;
const isDev = process.env.NODE_ENV === 'dev';

const app = express();
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

// Increase the event listeners limit
require('events').EventEmitter.prototype._maxListeners = 70;

const startPayload = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });
};

const initializeWebhooks = () => {
  // Register all webhook handlers
  webhookRegistrar();
};

const configureExpressApp = async() => {
  app.disable('x-powered-by');

  // Apply middlewares
  await startPayload();
  applyAuthMiddleware(app);
  initializeWebhooks();

  // Incoming webhook requests
  app.post('/webhooks/:topic', express.text({ type: '*/*' }), async (req, res) => {
    const { topic } = req.params || '';
    const shop = req.headers['x-shopify-shop-domain'] || '';

    try {
      await shopify.webhooks.process({
        rawBody: req.body,
        rawRequest: req,
        rawResponse: res,
      });
      console.log(`--> Processed ${topic} webhook for ${shop}`);
    } catch (e) {
      console.error(`---> Error while registering ${topic} webhook for ${shop}`, e);
      if (!res.headersSent) {
        res.status(500).send(e.message);
      }
    }
  });

  app.use(express.json());

  app.post('/graphql', verifyRequest, async (req, res) => {
    try {
      const sessionId = await shopify.session.getCurrentId({
        isOnline: true,
        rawRequest: req,
        rawResponse: res,
      });
      const session = await sessionHandler.loadSession(sessionId);
      const response = await shopify.clients.graphqlProxy({
        session,
        rawBody: req.body,
      });
      res.status(200).send(response.body);
    } catch (e) {
      console.error('---> An error occurred at GraphQL Proxy', e);
      res.status(403).send(e);
    }
  });

  app.use(csp);
  app.use(isShopActive);

  // If you're making changes to any of the routes, please make sure to add them in `./client/vite.config.cjs` or it'll not work.
  app.use('/apps', router); // Verify user route requests
  app.use('/proxy_route', verifyProxy, proxyRouter); // MARK:- App Proxy routes

  app.post('/gdpr/:topic', verifyHmac, async (req, res) => {
    const { body } = req;
    const { topic } = req.params;
    const shop = req.body.shop_domain;

    console.warn(`--> GDPR request for ${shop} / ${topic} received.`);

    let response;
    switch (topic) {
      case 'customers_data_request':
        response = await customerDataRequest(topic, shop, body);
        break;
      case 'customers_redact':
        response = await customerRedact(topic, shop, body);
        break;
      case 'shop_redact':
        response = await shopRedact(topic, shop, body);
        break;
      default:
        console.error(
          "--> Congratulations on breaking the GDPR route! Here's the topic that broke it: ",
          topic
        );
        response = 'broken';
        break;
    }

    if (response.success) {
      res.status(200).send();
    } else {
      res.status(403).send('An error occurred');
    }
  });

  if (!isDev) {
    configureProductionEnvironment();
  }

  return { app }; // Ensure to return the app here
};

const configureProductionEnvironment = () => {

  const root = process.cwd();

  const compression = require('compression');
  const serveStatic = require('serve-static');
  const fs = require('fs');

  app.use(compression());
  app.use(serveStatic(resolve('dist/client')));
  app.use('/*', (req, res, next) => {
    res
      .status(200)
      .set('Content-Type', 'text/html')
      .send(fs.readFileSync(`${root}/dist/client/index.html`));
  });
};

const startServer = async () => {
  const { app } = await configureExpressApp();

  app.listen(PORT, () => {
    console.log(`--> Running on ${PORT}`);
  });
};

startServer().catch((err) => {
  console.error(err);
});
