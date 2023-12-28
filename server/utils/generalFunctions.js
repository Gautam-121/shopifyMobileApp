const axios = require("axios");
const Payload = require("payload")

const shopifyApiData = async (
  shopifyGraphQLEndpoint,
  graphqlQuery,
  axiosShopifyConfig
) => {
  const shopifyResult = await axios.post(
    shopifyGraphQLEndpoint,
    { query: graphqlQuery },
    axiosShopifyConfig
  );
  return shopifyResult;
};


module.exports = { shopifyApiData };
