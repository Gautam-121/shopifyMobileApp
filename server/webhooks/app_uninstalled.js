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

  // await SessionModel.destroy({where : {shop : shop}})
  await payload.delete({
    collection: 'session',
    where: {
      fieldName: { equals: shop },
    },
  })

  // await SessionModel.deleteMany({ shop });
};

module.exports =  appUninstallHandler;
