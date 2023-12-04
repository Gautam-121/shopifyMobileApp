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

const mediaCreate = async (files) => {
  let dataCollect = [];
  for (let file of files) {
    const fileReturn = await Payload.create({
      collection: "media", // require
      file: {
        data: file.buffer,
        mimetype: file.mimetype,
        name: file.originalname,
        size: file.size,
      },
    });
    dataCollect.push(fileReturn.id);
  }
  return dataCollect
};

const mediaDelete = async (files) => {
  for (let file of files) {
    console.log(files.id)
    const data = await Payload.delete({
      collection: "media", // require
      id : file.id
    })
    console.log(data)
  }
  
}


module.exports = { shopifyApiData , mediaCreate , mediaDelete};
