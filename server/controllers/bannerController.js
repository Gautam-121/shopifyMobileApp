const Payload = require("payload");
const {
  mediaCreate,
  mediaDelete,
} = require("../utils/generalFunctions.js");

//CREATING BANNER DETAILS
const createBanner = async (req, res, next) => {
  try {
    const data = JSON.parse(JSON.stringify(req.body));
    const files = req.files;

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
    data.shop = req.query.shop || "styleatrribute.myshopify.com"

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
      error: error,
    });
  }
};

//FETCHING BANNER DETAILS
const getBanner = async (req, res, next) => {
  try {

    const {shop} = req.query

    if(!shop){
        return res.status(400).json({
            success : false,
            message : "Shop name is Missing"
        })
    }

    const getBanner = await Payload.find({
      collection: "banner",
      where : {
        shop : {equals : shop}
      }
    });

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
const updateBanner = async (req, res, next) => {
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
      const result = await Payload.findByID({
        collection: "banner", // required
        id: req.params.id, // required
      });

      console.log(result.bannerImg);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: `No banner Exist with id : ${req.params.id}`,
        });
      }
      //Delete Existing bannerImage
      await mediaDelete(result.bannerImg);
      //Update New bannerImage
      const mediaUpdatedData = await mediaCreate(files);
      console.log(mediaUpdatedData);
      data.bannerImg = mediaUpdatedData;
    }

    // Result will be the updated Banner document.
    const updateBannerData = await Payload.update({
      collection: "banner", // required
      id: req.params.id, // required
      data: data,
    });

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
const deleteBanner = async (req, res, next) => {
  try {
    if (!req.params?.id) {
      return res.status(400).json({
        success: false,
        message: "Bannener Id is missing",
      });
    }
    await Payload.delete({
      collection: "banner",
      where: {
        id: { equals: req.params.id },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Banner Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createBanner, getBanner, deleteBanner, updateBanner };
