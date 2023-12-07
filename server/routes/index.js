const { Router } = require('express');
const verifyRequest = require('../middleware/verifyRequest.js');


const {
  sendNotification,
  updateServerKey,
  getServerKey,
  createProduct,
  getPayloadProduct,
  updatePayloadProduct,
  createMedia,
  getMedia,
  
} = require('../controllers/firebaseController.js');

const {
  getAllSegment,
  getProduct,
  getCollection,
  getProductByCollectionId
} = require('../controllers/shopifyApiCotroller.js');

const {
  createBannerImage,
  getBannerImage, 
  updateBannerImage, 
  deleteBannerImage
} = require("../controllers/bannerImageController.js")

const {
  createCollectionSlider,
  getCollectionSliderByShop,
  updateCollectionSlider,
  deleteCollectionSliderById
} = require("../controllers/collectionSliderController.js")

const {
  createProductGrid,
  getProductGridByShop,
  updateProductGrid,
  deleteProductGridById
} = require("../controllers/productGridController.js")

const router = Router();

// Creating Banner
router.post("/api/createBanner"  ,  createBannerImage)

//Fetch Banner Data
router.get("/api/getBanner" , getBannerImage);

//Update Banner Data
router.put("/api/updateBanner/:id"  ,  updateBannerImage)

//Delete Banner
router.delete("/api/deleteBanner/:id"  ,  deleteBannerImage)

// Creating Collection-Slider
router.post("/api/createCollection"  ,  createCollectionSlider)

//Fetch Collection-Slider Data
router.get("/api/getCollection"  ,  getCollectionSliderByShop);

//Update Collection Data
router.put("/api/updateCollection/:id"  ,  updateCollectionSlider)

//Delete Collection-Slider 
router.delete("/api/deleteCollection/:id"  ,  deleteCollectionSliderById)

// Creating Product-Grid
router.post("/api/createProductGrid"  ,  createProductGrid)

//Fetch Product-Grid Data
router.get("/api/getProductGridByShop" , getProductGridByShop);

//Update Banner Data
router.put("/api/updateProductGrid/:id"  ,  updateProductGrid)

//Delete Product-Grid
router.delete("/api/deleteProductGridById/:id"  ,  deleteProductGridById)







router.get("/api/getProduct" , verifyRequest ,  getProduct)

router.get("/api/getCollection" , getCollection)

router.get("/api/getProductByCollectionId" , getProductByCollectionId)

router.post("/api/createMedia" , createMedia)

router.get("/api/getMedia" , getMedia)


router.get("/api/getPayloadProduct" , getPayloadProduct)

router.put("/api/updatePayloadProduct" , updatePayloadProduct)

router.get("/api/getSegment", getAllSegment)

router.get("/api/getServerkey", verifyRequest , getServerKey)

router.post("/api/sendNotificatication", verifyRequest ,  sendNotification)

router.post("/api/updateServerKey", verifyRequest , updateServerKey)

router.get("/api", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  return res.status(200).json(sendData);
});


module.exports = router;
