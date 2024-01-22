const { CollectionConfig } = require("payload/types");

const activeStoresConfig = {
  slug: "activeStores",
  fields: [
    {
      name: "shop",
      type: "text",
      required: true, 
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: false,
    }
  ],
};

module.exports = activeStoresConfig;
