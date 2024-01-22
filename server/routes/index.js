const { Router } = require('express');
const verifyRequest = require('../middleware/verifyRequest.js');

const {createHomePage , getHomePage , updateHomePage , getHomePageByWeb} = require("../controllers/homePageController.js")
const {getProduct,getCollection,getProductByCollectionId} = require('../controllers/shopifyApiCotroller.js');
const {createBrandingApp,getBrandingApp,getBrandingAppWeb,updateBrandingApp} = require("../controllers/barandingAppController.js")
const {uploadImages} = require("../controllers/ImageUploadController.js")

const router = Router();

/*---------------------------ShopifyRouter-------------------------------------------------- */

//FETCH SHOPIFY STORE PRODUCT
router.get("/api/getProduct" ,  getProduct)

//FETCH SHOPIFY STORE COLLECTION
router.get("/api/getCollection" , getCollection)

//FETCH SHOPIFY STORE PRODUCT BY COLLECTION
router.get("/api/getProductByCollectionId",  getProductByCollectionId)

/*----------------------------HomePageRouter-------------------------------------------------- */

router.post("/api/createHomePage" ,  createHomePage)

router.get("/api/getHomePage/:shopId" , getHomePage)

router.get("/api/getHomePageByShop" ,  getHomePageByWeb)

router.put("/api/updateHomePage/:homePageId"  ,  updateHomePage)

/*--------------------------BrandingPageRouter--------------------------------------------------*/

router.post("/api/createBrandingPage" ,  createBrandingApp)

router.get("/api/getBrandingPage/:shop_id", getBrandingApp)

router.get("/api/getBrandingPageByShop"  ,  getBrandingAppWeb)

router.put("/api/updateBrandingPage/:branding_id" , updateBrandingApp)

/*----------------------------------------------------------------------------------------*/

router.post("/api/upload/images", uploadImages)

router.get("/api/getData", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  return res.status(200).json(sendData);
});



module.exports = router;
