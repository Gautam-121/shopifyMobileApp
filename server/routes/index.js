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
  createBanner,
  getBanner,
  deleteBanner
} = require('../controllers/firebaseController.js');
const {
  getAllSegment,
} = require('../controllers/shopifyApiCotroller.js');

const router = Router();

router.get("/api", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  return res.status(200).json(sendData);
});

router.post("/api/createProduct" , createProduct)

router.post("/api/createBanner" , createBanner)

router.get("/api/getBanner" , getBanner)

router.delete("/api/deleteBanner/:id" , deleteBanner)

router.get("/api/getPayloadProduct" , getPayloadProduct)

router.put("/api/updatePayloadProduct" , updatePayloadProduct)

router.get("/api/getSegment", getAllSegment)

router.get("/api/getServerkey",getServerKey)

router.post("/api/sendNotificatication", sendNotification)

router.post("/api/updateServerKey",updateServerKey)


module.exports = router;
