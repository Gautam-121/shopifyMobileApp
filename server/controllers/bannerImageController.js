const Payload = require("payload");
const { mediaCreate, mediaDelete } = require("../utils/generalFunctions.js");

//CREATING BANNER DETAILS
const createBannerImage = async (req, res, next) => {
  try {
    const data = JSON.parse(JSON.stringify(req.body));
    const files = req.files;

    console.log(data)

    if (!files && files.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide bannerImage",
      });
    }

    const dataCollect = await mediaCreate(files);


    if (
      data.navigate === "product" &&
      (!data.product || data?.product?.length === 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please Select At least One Product",
      });
    }

    if (
      data.navigate === "collection" &&
      (!data.collection || data?.collection?.length === 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please Select At least One Collection",
      });
    }

    if (
      data.navigate === "external_link" &&
      (!data.externalLink || data?.externalLink?.length === 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please Provide a External Link",
      });
    }

    data.bannerImg = dataCollect;
    data.shop = req.query.shop_id || "gid://shopify/Shop/81447387454";

    const post = await Payload.create({
      collection: "banner", // require
      data: data,
    });

    return res.status(200).json({
      success: true,
      message: "Data Created Successfully",
      post: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//FETCHING BANNER DETAILS
const getBannerImage = async (req, res, next) => {
  try {
    const { shop_id } = req.query;

    if (!shop_id) {
      return res.status(400).json({
        success: false,
        message: "Shop id is Missing",
      });
    }

    const keyWord = req.query.bannerFormat ? { "bannerFomat" : { equals: req.query.bannerFormat }  } : {}

    const getBanner = await Payload.find({
      collection: "banner",
      where: {...keyWord , shop: { equals: shop_id },},
    });

    if (getBanner.docs.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Banner Exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: getBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//UPDATING BANNER DETAILS
const updateBannerImage = async (req, res, next) => {
  try {
    if (!req.params?.id) {
      return res.status(400).json({
        success: false,
        message: "Banner id  is Missing",
      });
    }

    const data = JSON.parse(JSON.stringify(req.body));
    const files = req.files;

    if (data.length === 0 && (!files || files.length == 0)) {
      return res.status(400).json({
        success: false,
        message: "No field selected for Updation",
      });
    }

    if (files && files.length != 0) {
      const result = await Payload.find({
        collection: "banner", // required
        where: {
          // required
          id: { equals: req.params.id },
          // shop: { equals: req.query.shop_id },
        },
      });

      if (result.docs.length === 0) {
        return res.status(404).json({
          success: false,
          message: `No banner Exist with id : ${req.params.id}`,
        });
      }
      //Delete Existing bannerImage
      await mediaDelete(result.docs[0].bannerImg);

      //Update New bannerImage
      const mediaUpdatedData = await mediaCreate(files);
      data.bannerImg = mediaUpdatedData;
    }

    // Result will be the updated Banner document.
    const updateBannerData = await Payload.update({
      collection: "banner", // required
      where: {
        // required
        id: { equals: req.params.id },
        // shop: { equals: req.query.shop_id },
      },
      data: data,
    });

    if (updateBannerData.docs.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No banner Exist with id : ${req.params.id}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Banner Updated Successfully",
      data: updateBannerData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//DELETING BANNER
const deleteBannerImage = async (req, res, next) => {
  try {
    if (!req.params?.id) {
      return res.status(400).json({
        success: false,
        message: "Bannener Id is missing",
      });
    }
    const data = await Payload.delete({
      collection: "banner",
      where: {
        id: { equals: req.params.id },
        // shop: { equals: req.query.shop_id },
      },
    });

    if (data.docs.length == 0) {
      return res.status(400).json({
        success: false,
        message: `Banner Not Exist with id:${req.params.id}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Banner Deleted Successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createBannerImage, getBannerImage, updateBannerImage, deleteBannerImage };
