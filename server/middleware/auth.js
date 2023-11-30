// import {
//   CookieNotFound,
//   InvalidOAuthError,
//   InvalidSession,
// } from "@shopify/shopify-api";
// import authRedirect from "../utils/authRedirect.js";
// import StoreModel from "../models/StoreModels.js";
// import sessionHandler from "../utils/sessionHandler.js";
// import shopify from "../utils/shopifyConfig.js";

const {
  CookieNotFound,
  InvalidOAuthError,
  InvalidSession,
} = require("@shopify/shopify-api");
const authRedirect = require("../utils/authRedirect.js");
const StoreModel = require("../models/StoreModels.js");
const sessionHandler = require("../utils/sessionHandler.js");
const shopify = require("../utils/shopifyConfig.js");
const payload = require('payload');


const authMiddleware = (app) => {
  
  app.get("/auth", async (req, res) => {
    try {
      await authRedirect(req, res);
    } catch (e) {
      console.error(`---> Error at /auth`, e);
      const { shop } = req.query;
      switch (true) {
        case e instanceof CookieNotFound:
          return res.redirect(`/exitframe/${shop}`);
          break;
        case e instanceof InvalidOAuthError:
        case e instanceof InvalidSession:
          res.redirect(`/auth?shop=${shop}`);
          break;
        default:
          res.status(500).send(e.message);
          break;
      }
    }
  });

  app.get("/auth/tokens", async (req, res) => {

    try {
      const callbackResponse = await shopify.auth.callback({
        rawRequest: req,
        rawResponse: res,
      });

      const { session } = callbackResponse;

      console.log("Session from Auth/tokens" , session)

      await sessionHandler.storeSession(session);

      const webhookRegisterResponse = await shopify.webhooks.register({
        session,
      }); //Register all webhooks with offline token

      console.dir(webhookRegisterResponse, { depth: null }); //This is an array that includes all registry responses.

      return await shopify.auth.begin({
        shop: session.shop,
        callbackPath: "/auth/callback",
        isOnline: true,
        rawRequest: req,
        rawResponse: res,
      });

    } catch (e) {
      console.error(`---> Error at /auth/tokens`, e);
      const { shop } = req.query;
      switch (true) {
        case e instanceof CookieNotFound:
          return res.redirect(`/exitframe/${shop}`);
          break;
        case e instanceof InvalidOAuthError:
        case e instanceof InvalidSession:
          res.redirect(`/auth?shop=${shop}`);
          break;
        default:
          res.status(500).send(e.message);
          break;
      }
    }
  });

  app.get("/auth/callback", async (req, res) => {

    try {
      const callbackResponse = await shopify.auth.callback({
        rawRequest: req,
        rawResponse: res,
      });

      const { session } = callbackResponse;
      console.log("Session from Auth/callback" , session)
      await sessionHandler.storeSession(session);

      const host = req.query.host;
      const { shop } = session;

      const result = await payload.find({
        collection: 'activeStores', // required
        where: {
          shop: { equals: shop},
        }
      })

      console.log("auth/callback data find activeStores" , result)

      if(result.docs?.length!=0){
        // Update Document
        const data = await payload.update({
          collection: 'activeStores',
          where: {
            shop: { equals: shop},
          },
          data: {
            shop : shop,
            isActive: true
          }
        })

        console.log("After auth/token inside auth/callback update" , data )
      }
      else{
        // Create The document
        const data = await payload.create({
          collection: 'activeStores', // required
          data: {
            shop : shop,
            isActive: true
          },
        })
        console.log("After auth/token inside auth/callback " , data )
      }

      // const [result, created] = await StoreModel.findOrCreate({
      //   where: { shop: shop},
      //   defaults: {
      //     shop : shop,
      //     isActive: true
      //   }
      // });

      // if(!created){

      //   await StoreModel.update(//Update store to true after auth has happened, or it'll cause reinstall issues.
      //     {
      //       isActive : true,
      //       limit : 1
      //     },
      //     {
      //       where : {shop : shop}
      //     }
      //   )
      // }

      // Redirect to app with shop parameter upon auth
      res.redirect(`/?shop=${shop}&host=${host}`);

    } catch (e) {
      console.error(`---> Error at /auth/callback`, e);
      const { shop } = req.query;
      switch (true) {
        case e instanceof CookieNotFound:
          return res.redirect(`/exitframe/${shop}`);
          break;
        case e instanceof InvalidOAuthError:
        case e instanceof InvalidSession:
          res.redirect(`/auth?shop=${shop}`);
          break;
        default:
          res.status(500).send(e.message);
          break;
      }
    }
  });
};

module.exports =  authMiddleware;
