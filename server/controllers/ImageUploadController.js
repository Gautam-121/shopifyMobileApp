const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDANARY_NAME,
  api_key: process.env.CLOUDANARY_API_KEY,
  api_secret: process.env.CLOUDANARY_API_SECRET,
});

const uploadImages = async (req, res, next) => {
  try {
    const file = JSON.parse(JSON.stringify(req.files));

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "file is missing",
      });
    }

    const result = await cloudinary.uploader.upload(file.photos.tempFilePath, {
      folder: "banner",
    });

    return res.status(200).json({
      success: true,
      message: "Upload Images SuccessFully",
      data: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { uploadImages };
