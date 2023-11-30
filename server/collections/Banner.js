// import { CollectionConfig } from "payload/types";

// const Banner: CollectionConfig = {
//   slug: "banner",
//   admin: {
//     useAsTitle: "title",
//   },
//   access :{
//     create : ()=>true
//   },
//   fields: [
//     {
//         name: 'image-adjustment', // required
//         label : "Image Adjustment",
//         type: 'radio', // required
//         options: [
//           // required
//           {
//             label: 'Fill',
//             value: 'fill',
//           },
//           {
//             label: 'Fit',
//             value: 'fit',
//           },
//           {
//             label: 'Stretch',
//             value: 'stretch',
//           },
//         ],
//         defaultValue: 'Fill', // The first value in options.
//         admin: {
//           layout: 'horizontal',
//         },
//     },
//     {
//       name: "title",
//       label: "Banner Title",
//       type: "text",
//     },
//     {
//         name: 'navigate_to', // required
//         type: 'radio', // required
//         label : "Navigate To",
//         options: [
//           // required
//           {
//             label: 'None',
//             value: 'none',
//           },
//           {
//             label: 'Product',
//             value: 'product',
//           },
//           {
//             label: 'Collection',
//             value: 'collection',
//           },
//           {
//             label: 'External link',
//             value: 'external_link',
//           },
//         ],
//         defaultValue: 'none', // The first value in options.
//         admin: {
//           layout: 'vertical',
//         },
//     },
//     {
//         name: "product",
//         label: "Product",
//         type: "relationship",
//         relationTo : "product",
//         admin: {
//           condition: (_, siblingData) => siblingData.action === "product",
//         },
//         required: true,
//         hasMany: true,
//     },
//     {
//       name: "external_link",
//       label: "Url",
//       type: "text",
//       admin: {
//         condition: (_, siblingData) => siblingData.action === "external_link",
//       },
//       required: true,
//     },
//     {
//       name: "collection",
//       label: "Collection",
//       type: "relationship",
//       relationTo: "collection",
//       admin: {
//         condition: (_, siblingData) => siblingData.action === "products",
//       },
//       required: true,
//       hasMany: true,
//     },
//   ],
// };

// export default Banner;


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
      defaultValue: 'Fill',
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
      fields:[
        {
          name: 'product_id',
          type: 'text',
          required : true
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
  ],
};

module.exports = Banner;

