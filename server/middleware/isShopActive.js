const StoreModel = require("../models/StoreModels.js");
const payload = require('payload');


const isShopActive = async (req, res, next) => {

  const { shop, host } = req.query;

  if (!shop) {
    next();
    return;
  }

  // const isShopAvaialble = await StoreModel.findOne({where : {shop : shop}})
  const isShopAvaialble = await payload.find({
    collection: 'activeStores', // required
    where: {
      shop: { equals: shop},
    }
  })

  console.log("Check Perticular Shop is Available or not" , isShopAvaialble)

  if (isShopAvaialble.docs?.length === 0 || !isShopAvaialble.docs[0].isActive) {

    if (isShopAvaialble.docs?.length === 0) {

      // await StoreModel.create({
      //   shop :  shop ,
      //   isActive : false
      // })

      const data = await payload.create({
        collection: 'activeStores', // required
        data: {
          shop : shop,
          isActive: false
        },
      })

      console.log("inside The Shop availabe and craete" , data)

    } else if (!isShopAvaialble.docs[0].isActive) {

      // await StoreModel.update(
      //   {
      //     isActive : false
      //   },
      //   {
      //     where : {shop : shop},
      //     limit : 1
      //   }
      // )

      const data = await payload.update({
        collection: 'activeStores',
        where: {
          shop: { equals: shop},
        },
        data: {
          isActive: false
        }
      })
      console.log("inside The Shop availabe and Update" , data)
      // await StoreModel.findOneAndUpdate({ shop }, { isActive: false });
    }
    
    res.redirect(`/auth?shop=${shop}&host=${host}`);
  } else {
    next();
  }
};

module.exports = isShopActive;
