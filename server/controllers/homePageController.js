const Payload = require("payload");


const createHomePage = async (req, res, next) => {
  try {

    const { datas } = req.body;

    const isHomeDataPresent = await Payload.find({
      collection: 'homePage',
      where: { shopId: { equals: "gid://shopify/Shop/814473874890"} }
    })

    if (isHomeDataPresent.docs.length != 0) {
      return res.status(400).json({
        success: false,
        message: "Shop_id Already Exist"
      })
    }

    for (let index in datas) {

      if (datas[index].featureType === "banner") {

        const isVisible = datas[index]?.data?.data.some(val => val.isVisible === true)
        const banner = await Payload.create({
          collection: "banner",
          data: {
            data: datas[index].data?.data
          }
        });

        datas[index].data = {
          relationTo: "banner",
          value: banner.id,
        }
        datas[index].isVisible = isVisible
        datas[index].dispalyOrder = Number(index) + 1
      }
      else if (datas[index].featureType === "announcement") {

        const announcementBar = await Payload.create({
          collection: "announcementBanner",
          data:  datas[index].data?.data
        });

        datas[index].data = {
          relationTo: "announcementBanner",
          value: announcementBar.id,
        }
        datas[index].dispalyOrder = Number(index) + 1

      }
      else if (datas[index].featureType === "ProductGroup") {

        const product = await Payload.create({
          collection: "product",
          data:  datas[index].data?.data,
        });

        datas[index].data = {
          relationTo: "product",
          value: product.id,
        }
        datas[index].dispalyOrder = Number(index) + 1
      }
      else if (datas[index].featureType === "Categories") {

        const collection = await Payload.create({
          collection: "collection",
          data: {
            data:  datas[index].data?.data,
          }
        });

        datas[index].data = {
          relationTo: "collection",
          value: collection.id,
        }
        datas[index].dispalyOrder = Number(index) + 1
      }
    }

    const homeData = await Payload.create({
      collection: "homePage",
      data: {
        shopId: req.shop_id || "gid://shopify/Shop/814473874890",
        homeData: datas
      },
    });

    return res.status(201).json({
      success: true,
      data: homeData,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getHomePage = async (req, res, next) => {

  try {

    if (!req.params.shopId) {
      return res.status(400).json({
        success: false,
        message: "Shop_id is Missing"
      })
    }

    const homeData = await Payload.find({
      collection: 'homePage',
      where: { shopId: { equals: `gid://shopify/Shop/${req.params.shopId}` }, },
    })

    if (homeData.docs.length === 0) {
      return res.status(400).json({
        success: false,
        message: "shopId is Wrong"
      })
    }
    // Update the homeData.docs[0].homeData array
    homeData.docs[0].homeData = homeData.docs[0].homeData.map((value) => {
      if (value.featureType === "banner" || value.featureType === "Categories") {
        return { ...value, data: value.data.value.data };
      } 
      else if (value.featureType === "announcement" ||value.featureType === "ProductGroup") {
        return { ...value, data: value.data.value };
      }
    });

    return res.status(200).json({
      success: true,
      message: "Send Successfully",
      data: homeData.docs[0]
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const getHomePageByWeb = async (req , res , next)=>{

  try {

    const homeData = await Payload.find({
      collection: 'homePage',
      where: {shopId: { equals: "gid://shopify/Shop/814473874893" || req.shop_id},},
    })

    if(homeData.docs.length === 0){
      return res.status(400).json({
        success: false,
        message: "No Document Found"
      })
    }

    homeData.docs[0].homeData = homeData.docs[0].homeData.map((value) => {
      if (value.featureType === "banner" || value.featureType === "Categories") {
        return { ...value, data: value.data.value };
      } 
      else if (value.featureType === "announcement" ||value.featureType === "ProductGroup") {
        return { ...value, data: value.data.value };
      }
    });

    return res.status(200).json({
      success: true,
      message: "Send Successfully",
      data: homeData.docs[0]
    })
  
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const updateHomePage = async (req, res, next) => {
  try {
    const { datas } = req.body;

    if (!req.params.homePageId) {
      return res.status(400).json({
        success: false,
        message: "homePageId is missing",
      });
    }

    const isExistHomeData = await Payload.find({
      collection: "homePage",
      where: {
        shopId: { equals: req.shop_id || "gid://shopify/Shop/814473874890"},
        id: { equals: req.params.homePageId },
      },
    });

    if (isExistHomeData.docs.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Document Found",
      });
    }

    for (let index in datas) {

      if (datas[index].featureType === "banner") {

        const isVisible = datas[index]?.data?.data.some(
          (val) => val.isVisible === true
        );

        if (datas[index]?.data?.id) {

          const banner = await Payload.update({
            collection: "banner",
            id: datas[index].data.id,
            data: {
              data: datas[index]?.data?.data,
            },
          });

          datas[index].data = {
            relationTo: "banner",
            value: banner.id,
          };

          datas[index].isVisible = isVisible;
          datas[index].dispalyOrder = Number(index) + 1;
        } 
        else {
          
          const banner = await Payload.create({
            collection: "banner",
            data: {
              data: datas[index].data.data,
            },
          });

          datas[index].data = {
            relationTo: "banner",
            value: banner.id,
          };

          datas[index].isVisible = isVisible;
          datas[index].dispalyOrder = Number(index) + 1;
        }
      } 
      else if (datas[index].featureType === "announcement") {

        if (datas[index]?.data?.id) {

          const announcementBar = await Payload.update({
            collection: "announcementBanner",
            id: datas[index]?.data?.id,
            data: {
              data: datas[index]?.data?.data,
            },
          });

          datas[index].data = {
            relationTo: "announcementBanner",
            value: announcementBar.id,
          };

          datas[index].dispalyOrder = Number(index) + 1;

        } 
        else {

          const announcementBar = await Payload.create({
            collection: "announcementBanner",
            data: datas[index]?.data?.data,
          });

          datas[index].data = {
            relationTo: "announcementBanner",
            value: announcementBar.id,
          };

          datas[index].dispalyOrder = Number(index) + 1;
        }
      } 
      else if (datas[index].featureType === "ProductGroup") {

        if (datas[index]?.data?.id) {

          const product = await Payload.update({
            collection: "product",
            id: datas[index]?.data?.id,
            data: {
              data: datas[index]?.data?.data,
            },
          });

          datas[index].data = {
            relationTo: "product",
            value: product.id,
          };

          datas[index].dispalyOrder = Number(index) + 1;
        } 
        else {

          const product = await Payload.create({
            collection: "product",
            data: datas[index]?.data?.data,
          });

          datas[index].data = {
            relationTo: "product",
            value: product.id,
          };

          datas[index].dispalyOrder = Number(index) + 1;
        }
      } 
      else if (datas[index].featureType === "Categories") {

        if (datas[index]?.data?.id) {

          const collection = await Payload.update({
            collection: "collection",
            id: datas[index].data.id,
            data: {
              data: datas[index]?.data?.data,
            },
          });

          datas[index].data = {
            relationTo: "collection",
            value: collection.id,
          };

          datas[index].dispalyOrder = Number(index) + 1;

        } 
        else {

          const collection = await Payload.create({
            collection: "collection",
            data: {
              data: datas[index]?.data?.data,
            },
          });

          datas[index].data = {
            relationTo: "collection",
            value: collection.id,
          };

          datas[index].dispalyOrder = Number(index) + 1;

        }
      }
    }

    const homeData = await Payload.update({
      collection: "homePage",
      id: req.params.homePageId,
      data: {
        homeData: datas,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Data Updated Successfully",
      data: homeData,
    });
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {createHomePage , getHomePage , updateHomePage , getHomePageByWeb}













