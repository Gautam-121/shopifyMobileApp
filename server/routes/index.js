// import { Router } from "express";
// import {sendNotification , updateServerKey , getServerKey } from "../controllers/firebaseController.js"
// import {getAllSegment , getProduct} from "../controllers/shopifyApiCotroller.js"

const { Router } = require('express');
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
  getCollection
} = require('../controllers/shopifyApiCotroller.js');

const {
  createBanner , 
  getBanner , 
  deleteBanner ,
  updateBanner
} = require("../controllers/bannerController.js")

const router = Router();

router.get("/api", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  return res.status(200).json(sendData);
});

// Creating Banner
router.post("/api/createBanner" , createBanner)

//Fetch banner Data
router.get("/api/getBanner" , getBanner);

//Update banner Data
router.put("/api/updateBanner/:id" , updateBanner)

//Delete Banner
router.delete("/api/deleteBanner/:id" , deleteBanner)


router.get("/api/getProduct" , getProduct)

router.get("/api/getCollection" , getCollection)



router.post("/api/createMedia" , createMedia)

router.get("/api/getMedia" , getMedia)


router.get("/api/getPayloadProduct" , getPayloadProduct)

router.put("/api/updatePayloadProduct" , updatePayloadProduct)

router.get("/api/getSegment", getAllSegment)

router.get("/api/getServerkey",getServerKey)

router.post("/api/sendNotificatication", sendNotification)

router.post("/api/updateServerKey",updateServerKey)


module.exports = router;
