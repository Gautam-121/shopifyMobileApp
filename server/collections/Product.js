const { CollectionConfig } = require("payload/types");

const Product = {
  slug: "product",
  admin: {
    useAsTitle: "type",
  },
  fields: [
    {
      name: "type",
      type: "select",
      options : ["product_grid", "product_slider", "product_stack"],
      required: true
    },
    {
      name: "visibility",
      type: "checkbox", // Use "checkbox" for boolean fields
      defaultValue: true,
    },
    {
      name: "block_title",
      label : "Block Title",
      type: "text",
      maxLength: 30, // Set to true if you want this field to be unique
      defaultValue: undefined
    },
    {
      name: "collection_id",
      label: "Collection Ids",
      type: "text",
      required : true
    },
    {
      name: "no_of_product",
      type: "number", 
      min : 4,
      max: 8,
      defaultValue : 4,
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
  ],
};

module.exports = Product
