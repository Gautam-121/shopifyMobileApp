const axios = require("axios");
const dotenv = require("dotenv");
const Cryptr = require("cryptr");
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
        "X-Shopify-Access-Token": accessToken || "shpua_22476a2bf64e7f1cc14d4971b9e8725b",
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
    query MyQuery {
      collections(first: 10) {
        nodes {
          id
          title
          image {
            height
            src
            url
          }
        }
      }
    }
  `;

    const axiosShopifyConfig = {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken || "shpua_22476a2bf64e7f1cc14d4971b9e8725b",
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

const getProductByCollectionId = async( req , res , next)=>{
  try {

  if(!req.query.collectionId){
    return res.status(400).json({
      success : false,
      message : "Collection_Id is Missing"
    })
  }

    const shop = req.query.shop;
    const { accessToken } = req.body

    const shopifyGraphQLEndpoint = `https://${shop || "renergii.myshopify.com"}/admin/api/2023-04/graphql.json`;

    const graphqlQuery = `
    query MyQuery {
      collection(id: "gid://shopify/Collection/456867971390") {
        products(first: ${req.query.count || 1}) {
          edges {
            node {
              id
              productType
              title
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 10) {
                edges {
                  node {
                    src
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

    const axiosShopifyConfig = {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken || "shpua_22476a2bf64e7f1cc14d4971b9e8725b",
      },
    };

    const fetchCollectionsProducts = await shopifyApiData(shopifyGraphQLEndpoint , graphqlQuery , axiosShopifyConfig)

    const collectionsProducts = fetchCollectionsProducts?.data?.data?.collection?.products?.edges?.map((edge) => edge.node);

    return res.status(200).json({
      success: true,
      data : collectionsProducts
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {getAllSegment , getProduct , getCollection , getProductByCollectionId}

