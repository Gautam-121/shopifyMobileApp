const Payload = require("payload");

const createCollectionSlider = async (req, res, next) => {
  try {
    const data = req.body;

    if (Object.keys(data).length == 0 || data.collection.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Select At least 1 Collection",
      });
    }
  
    if(!data.collectionFormat){
      return res.status(400).json({
        success : false,
        message : "Collection Format is required"
      })
    }

    data.shop = req.query.shop_id || "gid://shopify/Shop/81447387454";

    const collection = await Payload.create({
      collection: "collection", // require
      data: data,
    });

    return res.status(201).json({
      success: true,
      message: "CollectionSider Created SuccessFully",
      collection,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCollectionSliderByShop = async (req, res, next) => {
  try {

    const { shop_id } = req.query;

    if (!shop_id) {
      return res.status(400).json({
        success: false,
        message: "Shop name is Missing",
      });
    }

    const keyWord = req.query.collectionFormat ? { "collectionFormat" : { equals: req.query.collectionFormat }  } : {}

    const collection = await Payload.find({
      collection: "collection",
      where: {...keyWord , shop: { equals: shop_id },},
    });

    if (collection.docs.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No CollectionsSlider found",
      });
    }

    return res.status(200).json({
      success: true,
      data: collection,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCollectionSlider = async (req, res, next) => {
  try {

    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        message: "collectionSlider id is missing",
      });
    }

    const data = req.body;

    if (Object.keys(data).length == 0 || data.collection.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Select At least 1 Collection",
      });
    }
    // Result will be the updated Banner document.
    const collection = await Payload.update({
      collection: "collection", // required
      where: {
        id: { equals: req.params.id },
        // shop: { equals: req.query.shop_id },
      },
      data: data,
    });

    if (collection.docs.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No CollectionSlider Exist with id : ${req.params.id}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "CollectionSlider Updated Successfully",
      data: collection,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCollectionSliderById = async (req, res) => {
  try {
    if (!req.params?.id) {
      return res.status(400).json({
        success: false,
        message: "Collection Id is missing",
      });
    }
    const data = await Payload.delete({
      collection: "collection",
      where: {
        id: { equals: req.params.id },
        // shop : {equals : req.query.shop_id}
      },
    });

    if (data.docs.length == 0) {
      return res.status(400).json({
        success: false,
        message: `Collection Not Exist with id:${req.params.id}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Collection Deleted Successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCollectionSlider,
  getCollectionSliderByShop,
  updateCollectionSlider,
  deleteCollectionSliderById
};
