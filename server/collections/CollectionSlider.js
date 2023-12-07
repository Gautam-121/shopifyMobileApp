const { CollectionConfig } = require("payload/types");

const CollectionSlider = {
  slug: "collection",
  admin: {
    useAsTitle: "collection",
  },
  fields: [
    {
      name : "collectionFormat",
      type : "text",
      required : true
    },
    {
      name: "isVisible",
      label : "Visible",
      type: "checkbox", // Use "checkbox" for boolean fields
      defaultValue: false,
    },
    {
      name: "collection",
      label: "Collection",
      type: "array",
      fields:[
        {
          name: 'collection_id',
          type: 'text',
          required : true
        },
        {
          name : "src",
          type : "text",
          defaultValue : undefined
        },
        {
          name : "title",
          type : "text",
          defaultValue : undefined
        }
      ]
    },
    {
      name: "shop",
      type: "text",
      required : true
    }
  ],
};

module.exports = CollectionSlider;
