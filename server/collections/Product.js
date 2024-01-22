const { CollectionConfig } = require("payload/types");

const featuredProductConfig = {
  slug: "product",
  fields: [
    {
      name: "title",
      type: "text",
      maxLength: 30,
      defaultValue: undefined,
    },
    {
      name: "productGroupId",
      type: "text",
      required: true,
    },
  ],
};

module.exports = featuredProductConfig;
