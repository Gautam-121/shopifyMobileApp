const { CollectionConfig } = require("payload/types");

const Banner = {
  slug: "banner",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: "isVisible",
      label : "Visible",
      type: "checkbox", // Use "checkbox" for boolean fields
      defaultValue: false,
    },
    {
      name : "bannerImg",
      type : "relationship",
      relationTo : "media",
      required : true,
      hasMany:true
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
        layout: 'horizontal',
      },
    },
    {
      name: "title",
      label: "Banner Title",
      type: "text",
    },
    {
      name: 'navigate',
      type: 'radio',
      label: "Navigate To",
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Product',
          value: 'product',
        },
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'External link',
          value: 'external_link',
        },
      ],
      defaultValue: 'none',
      admin: {
        layout: 'vertical',
      },
    },
    {
      name: "product",
      label: "Products",
      type: "array",
      required : true,
      fields:[
        {
          name: 'product_id',
          type: 'text',
        }
      ],
      admin: {
        condition: (_, siblingData) => siblingData.navigate === "product",
      },
    },
    {
      name: "externalLink",
      label: "Url",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData.navigate === "external_link",
      },
      required: true,
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
        }
      ],
      admin: {
        condition: (_, siblingData) => siblingData.navigate === "collection",
      },
    },
    {
      name: "shop",
      type: "text",
      required : true
    },
  ],
};

module.exports = Banner;

