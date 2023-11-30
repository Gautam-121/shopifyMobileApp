const SessionModel = require('../models/SessionModels.js');
const StoreModel = require('../models/StoreModels.js');
const payload = require('payload');


/**
 * @typedef { import("../../_developer/types/2023-07/webhooks.js").APP_UNINSTALLED } webhookTopic
 */

const appUninstallHandler = async (
  topic,
  shop,
  webhookRequestBody,
  webhookId,
  apiVersion
) => {
  /** @type {webhookTopic} */
  const webhookBody = JSON.parse(webhookRequestBody);

  // await StoreModel.update(
  //   {
  //     isActive : false
  //   },
  //   {
  //     where : {shop :  shop},
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

  console.log("WebHook update shop active false" , data)
  // await StoreModel.findOneAndUpdate({ shop }, { isActive: false });

  // await SessionModel.destroy({where : {shop : shop}})
  const datas = await payload.delete({
    collection: 'session',
    where: {
      shop: { equals: shop },
    },
  })
  console.log("WebHook delete session of that shop" , datas)

  // await SessionModel.deleteMany({ shop });
};

module.exports =  appUninstallHandler;
