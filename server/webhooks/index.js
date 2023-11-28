//Combine all your webhooks here
const { DeliveryMethod } = require('@shopify/shopify-api');
const shopify = require('../utils/shopifyConfig.js');
const appUninstallHandler = require('./app_uninstalled.js');

/*
  Template for adding new topics:
  ```
  TOPIC: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/webhooks/topic",
      callback: topicHandler,
    },
  ```

    - Webhook topic and callbackUrl topic should be exactly the same because it's using catch-all
    - Don't change the delivery method unless you know what you're doing
      - the method is `DeliveryMethod.Http` and not `DeliveryMethod.http`, mind the caps on `H` in `http`
*/

const webhookRegistrar = async () => {
  shopify.webhooks.addHandlers({
    APP_UNINSTALLED: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/webhooks/app_uninstalled",
      callback: appUninstallHandler,
    },
  });
};

module.exports =  webhookRegistrar;
