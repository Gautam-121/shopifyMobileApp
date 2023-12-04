const axios = require("axios");
const dotenv = require("dotenv");
const Cryptr = require("cryptr");
const SessionModel = require("../models/SessionModels.js");
const {shopifyApiData} = require("../utils/generalFunctions.js")

dotenv.config();

const cryption = new Cryptr(process.env.ENCRYPTION_STRING);

const getAllSegment = async (req, res) => {

  try {

    const shop = req.query.shop;
    const accessTokens = req.body?.accessToken

    return res.status(200).json({
      success : false,
      message : "Send Before fetch Data",
      accessTokens
    })
    
    const [ , sessionDetail] = await SessionModel.findAll({where : {shop : shop}})
     
    if (sessionDetail === null) {
      return undefined;
    }
    if (sessionDetail.content.length == 0) {
      return undefined;
    }

    const { accessToken } = JSON.parse(cryption.decrypt(sessionDetail.content));

    const shopifyGraphQLEndpoint = `https://${sessionDetail.shop}/admin/api/2023-04/graphql.json`;

    const graphqlQuery = `
      {
        segments(first: 100) {
          edges {
            node {
              creationDate
              id
              lastEditDate
              name
              query
            }
          }
        }
      }
    `;

    const axiosShopifyConfig = {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
    };

    const fetchSegment = await axios.post(
      shopifyGraphQLEndpoint,
      { query: graphqlQuery },
      axiosShopifyConfig
    );

    const segments = fetchSegment?.data?.data?.segments?.edges?.map((edge) => edge.node);

    return res.status(200).json({
      success: true,
      segments
    });

  } catch (error) {
    res.status(500).json({ success: false, message : error.message });
  }
};

const getProduct = async (req, res) => {

  try {

    const shop = req.query.shop;
    const { accessToken } = req.body

    const shopifyGraphQLEndpoint = `https://${shop || "renergii.myshopify.com"}/admin/api/2023-04/graphql.json`;

    const graphqlQuery = `
    {
      products(first: 100) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

    const axiosShopifyConfig = {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken || "shpua_1ec6decc7de873d682a709ff821ddf6f",
      },
    };

    const fetchProducts = await shopifyApiData(shopifyGraphQLEndpoint , graphqlQuery , axiosShopifyConfig)

    const products = fetchProducts?.data?.data?.products?.edges?.map((edge) => edge.node);

    return res.status(200).json({
      success: true,
      products
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCollection = async (req, res) => {

  try {

    const shop = req.query.shop;
    const { accessToken } = req.body

    const shopifyGraphQLEndpoint = `https://${shop || "renergii.myshopify.com"}/admin/api/2023-04/graphql.json`;

    const graphqlQuery = `
    {
      collections(first: 100) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

    const axiosShopifyConfig = {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken || "shpua_1ec6decc7de873d682a709ff821ddf6f",
      },
    };

    const fetchCollections = await shopifyApiData(shopifyGraphQLEndpoint , graphqlQuery , axiosShopifyConfig)

    const collections = fetchCollections?.data?.data?.collections?.edges?.map((edge) => edge.node);

    return res.status(200).json({
      success: true,
      collections
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {getAllSegment , getProduct , getCollection}

