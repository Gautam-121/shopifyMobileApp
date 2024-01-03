const payload = require('payload');


const isShopActive = async (req, res, next) => {

  const { shop, host } = req.query;

  if (!shop) {
    next();
    return;
  }

  const isShopAvaialble = await payload.find({
    collection: 'activeStores', // required
    where: {
      shop: { equals: shop},
    }
  })

  if (isShopAvaialble.docs?.length === 0 || !isShopAvaialble.docs[0].isActive) {

    if (isShopAvaialble.docs?.length === 0) {
      await payload.create({
        collection: 'activeStores', // required
        data: {
          shop : shop,
          isActive: false
        },
      })
    } else if (!isShopAvaialble.docs[0].isActive) {
        await payload.update({
        collection: 'activeStores',
        where: {
          shop: { equals: shop},
        },
        data: {
          isActive: false
        }
      })
    }
    
    res.redirect(`/auth?shop=${shop}&host=${host}`);
  } else {
    next();
  }
};

module.exports = isShopActive;
