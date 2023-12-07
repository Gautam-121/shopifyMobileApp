const Payload = require("payload");

const createProductGrid = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data.collection_id) {
      return res.status(400).json({
        success: false,
        message: "Select Collection Category",
      });
    }

    if(!data.productFormat){
      return res.status(400).json({
        success : false,
        message : "Product Format is required"
      })
    }

    data.shop = req.query.shop_id || "gid://shopify/Shop/81447387454";

    const productGrid = await Payload.create({
      collection: "product", // require
      data: data,
    });

    return res.status(201).json({
      success: true,
      message: "Product Grid Created Successfully",
      productGrid,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductGridByShop = async (req, res, next) => {
  try {
    const { shop_id } = req.query;

    if (!shop_id) {
      return res.status(400).json({
        success: false,
        message: "Shop name is Missing",
      });
    }

    const keyWord = req.query.productFormat ? { "productFormat" : { equals: req.query.productFormat }  } : {}

    const productGrid = await Payload.find({
      collection: "product",
      where: {...keyWord , shop: { equals: shop_id },},
    });

    if (productGrid.docs.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No ProductGrid found",
      });
    }

    return res.status(200).json({
      success: true,
      data: productGrid,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProductGrid = async (req, res, next) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        message: "ProductGrid id is missing",
      });
    }

    const data = req.body;

    if (data.collection_id && data.collection_id.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Select Collection Category",
      });
    }

    // Result will be the updated Banner document.
    const productGrid = await Payload.update({
      collection: "product", // required
      where: {
        id: { equals: req.params.id },
        // shop: { equals: req.query.shop_id },
      },
      data: data,
    });

    if (productGrid.docs.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No ProdutGrid Exist with id : ${req.params.id}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "ProductGrid Updated Successfully",
      data: productGrid,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProductGridById = async (req, res) => {
  try {
    if (!req.params?.id) {
      return res.status(400).json({
        success: false,
        message: "ProductGrid Id is missing",
      });
    }
    const data = await Payload.delete({
      collection: "product",
      where: {
        id: { equals: req.params.id },
        // shop : {equals : req.query.shop_id}
      },
    });

    if (data.docs.length == 0) {
      return res.status(400).json({
        success: false,
        message: `ProductGrid Not Exist with id:${req.params.id}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "ProductGrid Deleted Successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProductGrid,
  getProductGridByShop,
  updateProductGrid,
  deleteProductGridById,
};
