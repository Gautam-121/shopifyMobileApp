const { Router } = require('express');
const verifyRequest = require('../middleware/verifyRequest.js');

const {createHomePage , getHomePage , updateHomePage , getHomePageByWeb} = require("../controllers/homePageController.js")
const {getProduct,getCollection,getProductByCollectionId} = require('../controllers/shopifyApiCotroller.js');
const {createBrandingPage , getBrandingPage , updateBrandingPage , getBrandingPagWeb} = require("../controllers/barandingPageController.js")
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

router.get("/api/getHomePage/:shop_id" , getHomePage)

router.get("/api/getHomePageByShop" ,  getHomePageByWeb)

router.put("/api/updateHomePage/:home_id"  ,  updateHomePage)

/*--------------------------BrandingPageRouter--------------------------------------------------*/

router.post("/api/createBrandingPage" ,  createBrandingPage)

router.get("/api/getBrandingPage/:shop_id", getBrandingPage)

router.get("/api/getBrandingPageByShop"  ,  getBrandingPagWeb)

router.put("/api/updateBrandingPage/:branding_id" , updateBrandingPage)

/*----------------------------------------------------------------------------------------*/

router.post("/api/upload/images", uploadImages)

router.get("/api/getData", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  return res.status(200).json(sendData);
});



module.exports = router;
