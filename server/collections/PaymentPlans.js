const { CollectionConfig } = require("payload/types");

const activeStoresConfig = {
  slug: "paymentPlans",
  admin: {
    useAsTitle: "shopName",
  },
  fields: [
    {
      name: "shopName",
      type: "text",
      required: true, 
    },
    {
      name: "shopId",
      type: "text",
      unique: true,
      defaultValue: undefined
    },
    {
      name: "themeId",
      type: 'text',
      defaultValue:undefined
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: false,
    }
  ],
};