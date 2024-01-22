const { CollectionConfig } = require("payload/types");

const homePage = {
  slug: "homePage",
  fields: [
    {
      name: "shopId",
      type: "text",
      required: true,
    },
    {
      name: 'homeData',
      type: 'array',
      fields: [
        {
          name: "isVisible",
          type: "checkbox",
          defaultValue: true,
        },
        {
          name: "dispalyOrder",
          type: "number",
          required: true,
          unique: true
        },
        {
          name: "featureType",
          type: "select",
          options: ["banner", "announcement" , "productGroup" , "categories" , "countdown" , "social_channel" , "text_paragraph" , "video"],
          required: true
        },
        {
          name: "layoutType",
          type: "select",
          options: ["horizontal", "vertical" , "horizontal_grid" , "vertical_grid"],
          required: true
        },
        {
          name: 'data',
          type: 'relationship',
          hasMany: false,
          relationTo: ["announcementBanner" ,"banner" , "collection" ,"product" , "eventTimer", "social" ,"paragraph" , "video"]
        },
      ],
    }
  ],
};

module.exports = homePage;
