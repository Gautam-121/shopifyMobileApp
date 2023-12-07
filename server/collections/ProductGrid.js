const { CollectionConfig } = require("payload/types");

const ProductGrid = {
  slug: "product",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name : "productFormat",
      type : "text",
      defaultValue : "Product grid"
    },
    {
      name: "isVisible",
      label : "Visible",
      type: "checkbox", // Use "checkbox" for boolean fields
      defaultValue: false,
    },
    {
      name: "title",
      label : "Block Title",
      type: "text",
      maxLength: 30, // Set to true if you want this field to be unique
      required : true
    },
    {
      name: "collection_id",
      label: "Select Collection",
      type: "text",
      required : true
    },
    {
      name: "countDisplay",
      type: "number", // Use "checkbox" for boolean fields
      min : 1,
      defaultValue : 1,
    },
    {
      name: 'imageAdjustment',
      label: "Image Adjustment",
      type: 'radio',
      options: [
        {
          label: 'Fill',
          value: 'fill',
        },
        {
          label: 'Fit',
          value: 'fit',
        },
        {
          label: 'Stretch',
          value: 'stretch',
        },
      ],
      defaultValue: 'fill',
      admin: {
        layout: 'vertical',
      },
    },
    {
      name: "shop",
      type: "text",
      required : true
    }
  ],
};

module.exports = ProductGrid
