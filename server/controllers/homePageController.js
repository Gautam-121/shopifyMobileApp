const Payload = require("payload");


const createHomePage = async (req, res, next) => {
  try {

    const {datas} = req.body;
    let saveData = [];

    const isHomeDataPresent = await Payload.find({
      collection: 'homePage',
      where: {shop_id: { equals: req.shop_id || "gid://shopify/Shop/81447387454",}},
    })

    if(isHomeDataPresent.docs.length!=0){
      return res.status(400).json({
        success: false,
        message: "Shop_id Already Exist"
      })
    }

    for (let index in datas) {

      if (datas[index].type === "banner_image") {

        const banner = await Payload.create({
          collection: "banner",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "banner",
            value: banner.id,
          },
        });

        console.log("BannerImage Created Succefully" , index)

      } 
      else if (datas[index].type === "announcement_bar") {

        const announcementBar = await Payload.create({
          collection: "announcementBar",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "announcementBar",
            value: announcementBar.id,
          },
        });

        console.log("AnnounceMentBar Created Succefully", index)

      } 
      else if (
        datas[index].type === "product_grid" ||
        datas[index].type === "product_slider" ||
        datas[index].type === "product_stack"
      ) {

        const product = await Payload.create({
          collection: "product",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "product",
            value: product.id,
          },
        });

        console.log("Product Created Succefully", index)


      } 
      else if (
        datas[index].type === "collection_card_stack" ||
        datas[index].type === "collection_card_grid" ||
        datas[index].type === "collection_card_slider"
      ) {

        const collection = await Payload.create({
          collection: "collection",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "collection",
            value: collection.id,
          },
        });

        console.log("collection Created Succefully", index)

      } 
      else if (datas[index].type === "social_channel") {

        const social = await Payload.create({
          collection: "social",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "social",
            value: social.id,
          },
        });

        console.log("social Channel Created Succefully", index)

      } 
      else if (datas[index].type === "text_paragraph") {

        const paragraph = await Payload.create({
          collection: "paragraph",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "paragraph",
            value: paragraph.id,
          },
        });

        console.log("text Paragraph Created Successfully", index)
      } 
      else if (datas[index].type === "countdown") {

        const eventTimer = await Payload.create({
          collection: "eventTimer",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "eventTimer",
            value: eventTimer.id,
          },
        });

        console.log("EventTimer Created Successfully", index)

      } 
      else if (datas[index].type === "video") {

        const video = await Payload.create({
          collection: "video",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "video",
            value: video.id,
          },
        });

        console.log("Video Created Successfully", index)
      }
      else if (
        datas[index].type === "banner_image_slider" ||
        datas[index].type === "advanced_image_slider" ||
        datas[index].type === "circle_image_slider" || 
        datas[index].type === "square_image_grid" ||
        datas[index].type === "square_image_slider" 
      ) {

        const otherCommon = await Payload.create({
          collection: "othersCommon",
          data: datas[index],
        });

        saveData.push({
          data: {
            relationTo: "othersCommon",
            value: otherCommon.id,
          },
        });

        console.log("OthersCommon Created Successfully", index)
      }
    }

    const homeData = await Payload.create({
      collection: "homePage",
      data: {
        shop_id: req.shop_id || "gid://shopify/Shop/81447387454",
        items: saveData
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

const getHomePage = async (req , res , next)=>{

  try {

    if(!req.params.shop_id){
      return res.status(400).json({
        success: false,
        message: "Shop_id is Missing"
      })
    }
  
    const homeData = await Payload.find({
      collection: 'homePage',
      where: {shop_id: { equals: `gid://shopify/Shop/${req.params.shop_id}`},},
    })

    if(homeData.docs.length === 0){
      return res.status(400).json({
        success: false,
        message: "Shop_id is Wrong"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Send Successfully",
      data: homeData
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
      where: {shop_id: { equals: req.shop_id},},
    })

    if(homeData.docs.length === 0){
      return res.status(400).json({
        success: false,
        message: "No Document Found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Send Successfully",
      data: homeData
    })
  
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const updateHomePage = async (req , res , next)=>{
  try {

    const { datas } = req.body;
    let saveData = [];

    if(!req.params.home_id){
      return res.status(400).json({
        success: false,
        message: "home_id is missing"
      })
    }

    for (let index in datas) {

      if (datas[index].type === "banner_image" ) {

        if(datas[index].id){

          const banner = await Payload.update({
            collection: "banner",
            id: datas[index].id,
            data:datas[index]
          });

          saveData.push({
            data: {
              relationTo: "banner",
              value: banner.id,
            },
          });
        }
        else{

          const banner = await Payload.create({
            collection: "banner",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "banner",
              value: banner.id,
            },
          });
        }
      } 
      else if (datas[index].type === "announcement_bar") {
        
        if(datas[index].id){
          const announcementBar = await Payload.update({
            collection: "announcementBar",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "announcementBar",
              value: announcementBar.id,
            },
          });
        }
        else{

          const announcementBar = await Payload.create({
            collection: "announcementBar",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "announcementBar",
              value: announcementBar.id,
            },
          });
        }
      } 
      else if (
        datas[index].type === "product_grid" ||
        datas[index].type === "product_slider" ||
        datas[index].type === "product_stack"
      ) {

        if(datas[index].id){
          const product = await Payload.update({
            collection: "product",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "product",
              value: product.id,
            },
          });
        }
        else{

          const product = await Payload.create({
            collection: "product",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "product",
              value: product.id,
            },
          });
        }
      } 
      else if (
        datas[index].type === "collection_card_stack" ||
        datas[index].type === "collection_card_grid" ||
        datas[index].type === "collection_card_slider"
      ) {

        if(datas[index].id){
          const collection = await Payload.update({
            collection: "collection",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "collection",
              value: collection.id,
            },
          });
        }
        else{

          const collection = await Payload.create({
            collection: "collection",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "collection",
              value: collection.id,
            },
          });
        }
      } 
      else if (datas[index].type === "social_channel") {

        if(datas[index].id){
          const social = await Payload.update({
            collection: "social",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "social",
              value: social.id,
            },
          });
        }
        else{

          const social = await Payload.create({
            collection: "social",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "social",
              value: social.id,
            },
          });
        }
      } 
      else if (datas[index].type === "text_paragraph") {

        if(datas[index].id){

          const paragraph = await Payload.update({
            collection: "paragraph",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "paragraph",
              value: paragraph.id,
            },
          });
        }
        else{

          const paragraph = await Payload.create({
            collection: "paragraph",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "paragraph",
              value: paragraph.id,
            },
          });
        }
      } 
      else if (datas[index].type === "countdown") {

        if(datas[index].id){

          const eventTimer = await Payload.update({
            collection: "eventTimer",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "eventTimer",
              value: eventTimer.id,
            },
          });
        }
        else{

          const eventTimer = await Payload.create({
            collection: "eventTimer",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "eventTimer",
              value: eventTimer.id,
            },
          });
        }
      } 
      else if (datas[index].type === "video") {

        if(datas[index].id){

          const video = await Payload.update({
            collection: "video",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "video",
              value: video.id,
            },
          });
        }
        else{

          const video = await Payload.create({
            collection: "video",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "video",
              value: video.id,
            },
          });
        }
      }
      else if (
        datas[index].type === "banner_image_slider" ||
        datas[index].type === "advanced_image_slider" ||
        datas[index].type === "circle_image_slider" || 
        datas[index].type === "square_image_grid" ||
        datas[index].type === "square_image_slider" 
      ) {
        if(datas[index].id){

          const otherCommon = await Payload.update({
            collection: "othersCommon",
            id: datas[index].id,
            data:datas[index]
          });
  
          saveData.push({
            data: {
              relationTo: "othersCommon",
              value: otherCommon.id,
            },
          });

        }
        else{

          const otherCommon = await Payload.create({
            collection: "othersCommon",
            data: datas[index],
          });
  
          saveData.push({
            data: {
              relationTo: "othersCommon",
              value: otherCommon.id,
            },
          });
        }
      }
    }

    const homeData = await Payload.update({
      collection: "homePage",
      id: req.params.home_id,
      data: {
        items: saveData,
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
}

module.exports = {createHomePage , getHomePage , updateHomePage , getHomePageByWeb}