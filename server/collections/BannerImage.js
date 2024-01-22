const { CollectionConfig } = require("payload/types");

const bannerImageConfig = {
  slug: "banner",
  access: {
    create: () => true,
  },
  fields: [
    {
      name: "data",
      type: "array",
      required: true,
      fields: [
        {
          name: "isVisible",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "imageUrl",
          type: "text",
          defaultValue: undefined,
        },
        {
          name: "bannerType",
          type: "select",
          options: ["product", "category", "marketing"],
          required: true,
        },
        {
          name: "actionUrl",
          type: "text",
        },
      ],
    },
  ],
};

module.exports = bannerImageConfig;
