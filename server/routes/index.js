const { Router } = require('express');
const verifyRequest = require('../middleware/verifyRequest.js');

const {createHomePage , getHomePage , updateHomePage , getHomePageByWeb} = require("../controllers/homePageController.js")
const {getProduct,getCollection,getProductByCollectionId} = require('../controllers/shopifyApiCotroller.js');
const {createBrandingPage , getBrandingPage , updateBrandingPage , getBrandingPagWeb} = require("../controllers/barandingPageController.js")

const router = Router();

/*---------------------------ShopifyRouter-------------------------------------------------- */

//FETCH SHOPIFY STORE PRODUCT
router.get("/api/getProduct", verifyRequest ,  getProduct)

//FETCH SHOPIFY STORE COLLECTION
router.get("/api/getCollection", verifyRequest , getCollection)

//FETCH SHOPIFY STORE PRODUCT BY COLLECTION
router.get("/api/getProductByCollectionId" , verifyRequest,  getProductByCollectionId)

/*----------------------------HomePageRouter-------------------------------------------------- */

router.post("/api/createHomePage" , verifyRequest ,  createHomePage)

router.get("/api/getHomePage/:shop_id" , getHomePage)

router.get("/api/getHomePageByShop" , verifyRequest ,  getHomePageByWeb)

router.put("/api/updateHomePage/:home_id" , verifyRequest ,  updateHomePage)

/*--------------------------BrandingPageRouter--------------------------------------------------*/

router.post("/api/createBrandingPage", verifyRequest ,  createBrandingPage)

router.get("/api/getBrandingPage/:shop_id", getBrandingPage)

router.get("/api/getBrandingPageByShop" , verifyRequest  getBrandingPagWeb)

router.put("/api/updateBrandingPage/:branding_id", verifyRequest , updateBrandingPage)

/*------------------------------------------------------------------------------------------------*/

router.get("/api/getData", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  return res.status(200).json(sendData);
});



module.exports = router;
