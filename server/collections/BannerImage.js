const { CollectionConfig } = require("payload/types");

const BannerImage = {
  slug: "banner",
  access: {
    create: () => true,
  },
  admin: {
    useAsTitle: 'type',
  },
  fields: [
    {
      name: "type",
      type: "text",
      defaultValue: "banner_image"
    },
    {
      name:"view",
      type: "select",
      options:["horizontal" , "vertical"],
      defaultValue: "horizontal"
    },
    {
      name: "visibility",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "items",
      type: "group",
      fields:[
        {
          name: "image_url",
          type: "text",
          required: true
        },
        {
         name: "navigate",
         type: "select",
         options: ["none", "product" ,"collection" , "external_link"]
        },
        {
        name: "redirect_id",
        type: "text",
        }
      ]
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
//     {
//       name: 'navigate',
//       type: 'radio',
//       label: "Navigate To",
//       options: [
//         {
//           label: 'None',
//           value: 'none',
//         },
//         {
//           label: 'Product',
//           value: 'product',
//         },
//         {
//           label: 'Collection',
//           value: 'collection',
//         },
//         {
//           label: 'External link',
//           value: 'external_link',
//         },
//       ],
//       defaultValue: 'none',
//       admin: {
//         layout: 'vertical',
//       },
//     },
//     {
//       name: "product_id",
//       label: "Products",
//       type: "text",
//       required : true,
//       admin: {
//         condition: (_, siblingData) => siblingData.navigate === "product",
//       },
//     },
//     {
//       name: "externalLink",
//       label: "Url",
//       type: "text",
//       admin: {
//         condition: (_, siblingData) => siblingData.navigate === "external_link",
//       },
//       required: true,
//     },
//     {
//       name: "collection_id",
//       label: "Collection",
//       type: "text",
//       required: true,
//       admin: {
//         condition: (_, siblingData) => siblingData.navigate === "collection",
//       },
//     },
  ],
};

module.exports = BannerImage;

