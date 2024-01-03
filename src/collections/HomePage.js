const { CollectionConfig  } = require("payload/types");

const Home = {
  slug: "homePage",
  fields: [
    {
        name: "shop_id",
        type: "text",
        required: true
    },
    {
        name: 'items',
        type: 'array',
        fields: [
          {
            name: 'data',
            type: 'relationship',
            hasMany: false,
            relationTo: ["announcementBar" ,"banner" , "collection" ,"eventTimer" , "othersCommon" , "product" , "social" , "paragraph" ]
          }
        ],
    }
  ],
};

module.exports = Home;
