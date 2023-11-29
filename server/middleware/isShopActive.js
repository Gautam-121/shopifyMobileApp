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
    where: {shop:shop}, // pass a `where` query here
    limit : 1
  })

  if (isShopAvaialble.length === 0 || !isShopAvaialble[0].isActive) {

    if (isShopAvaialble.length === 0) {

      // await StoreModel.create({
      //   shop :  shop ,
      //   isActive : false
      // })

      await payload.create({
        collection: 'activeStores', // required
        data: {
          shop : shop,
          isActive: false
        },
      })

    } else if (!isShopAvaialble[0].isActive) {

      // await StoreModel.update(
      //   {
      //     isActive : false
      //   },
      //   {
      //     where : {shop : shop},
      //     limit : 1
      //   }
      // )

      await payload.update({
        collection: 'activeStores',
        where: {
          shop: { equals: shop},
          limit : 1
        },
        data: {
          isActive: false
        }
      })
      // await StoreModel.findOneAndUpdate({ shop }, { isActive: false });
    }
    
    res.redirect(`/auth?shop=${shop}&host=${host}`);
  } else {
    next();
  }
};

module.exports = isShopActive;
