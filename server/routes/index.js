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
router.post("/api/createBanner" , verifyRequest ,  createBannerImage)

//Fetch Banner Data
router.get("/api/getBanner" , getBannerImage);

//Update Banner Data
router.put("/api/updateBanner/:id" , verifyRequest ,  updateBannerImage)

//Delete Banner
router.delete("/api/deleteBanner/:id" , verifyRequest ,  deleteBannerImage)

// Creating Collection-Slider
router.post("/api/createCollection" , verifyRequest ,  createCollectionSlider)

//Fetch Collection-Slider Data
router.get("/api/getCollection"  ,  getCollectionSliderByShop);

//Update Collection Data
router.put("/api/updateCollection/:id" , verifyRequest ,  updateCollectionSlider)

//Delete Collection-Slider 
router.delete("/api/deleteCollection/:id" , verifyRequest ,  deleteCollectionSliderById)

// Creating Product-Grid
router.post("/api/createProductGrid" , verifyRequest ,  createProductGrid)

//Fetch Product-Grid Data
router.get("/api/getProductGridByShop" , getProductGridByShop);

//Update Banner Data
router.put("/api/updateProductGrid/:id" , verifyRequest ,  updateProductGrid)

//Delete Product-Grid
router.delete("/api/deleteProductGridById/:id" , verifyRequest ,  deleteProductGridById)







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
