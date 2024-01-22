const Payload = require("payload");

const createBrandingApp = async (req, res, next) => {
  try {

    const data = req.body;

    const isBrandingDataExist = await Payload.find({
        collection: 'brandingTheme',
        where: {shopId: { equals: req.shop_id || "gid://shopify/Shop/81447387454",}},
      })
  
    if(isBrandingDataExist.docs.length!=0){
        return res.status(400).json({
          success: false,
          message: "Shop_id Already Exist"
        })
      }

    const brandingData = await Payload.create({
      collection: "brandingTheme",
      data: {
        ...data,
        shopId: req.shop_id || "gid://shopify/Shop/81447387454"
      },
    });

    return res.status(200).json({
        success: true,
        message: "Data Created Successfully",
        brandingData
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBrandingApp = async (req, res, next) => {
    try {
        if(!req.params.shop_id){
            return res.status(400).json({
                success: false,
                message: "Shop_id is missing"
            })
        }
    
        const brandingData = await Payload.find({
            collection: 'brandingTheme',
            where: {shopId: { equals: `gid://shopify/Shop/${req.params.shop_id}`},},
        })

        if(brandingData.docs.length === 0){
            return res.status(400).json({
              success: false,
              message: "Shop_id is Wrong"
            })
          }
    
        return res.status(200).json({
            success: true,
            message: "Data Send Successfully",
            data: brandingData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const getBrandingAppWeb = async (req, res, next) => {
    try {
        
        const brandingData = await Payload.find({
            collection: 'brandingTheme',
            where: {shopId: { equals: req.shop_id },},
        })

        if(brandingData.docs.length === 0){
            return res.status(400).json({
              success: false,
              message: "No Dcoument found"
            })
          }
    
        return res.status(200).json({
            success: true,
            message: "Data Send Successfully",
            data: brandingData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const updateBrandingApp = async (req, res, next) => {
    try {
        if(!req.params.branding_id){
            return res.status(400).json({
                success: false,
                message: "Branding_id is missing"
            })
        }

        const isExistbrandingData = await Payload.find({
          collection: 'brandingTheme',
          where: {
            shopId: { equals: req.shop_id || "gid://shopify/Shop/81447387454"},
            id: { equals: req.params.branding_id}
          },
      })

      if(isExistbrandingData.docs.length === 0){
          return res.status(400).json({
            success: false,
            message: "No Dcoument found"
          })
        }
    
        const brandingData = await Payload.update({
            collection: "brandingTheme",
            id: req.params.branding_id,
            data: req.body,
        });
    
        return res.status(200).json({
            success: true,
            message: "BrandingData Update Successully",
            data: brandingData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = { createBrandingApp, getBrandingApp, updateBrandingApp , getBrandingAppWeb };
