const { CollectionConfig } = require("payload/types");

const Collection = {
  slug: "collection",
  admin: {
    useAsTitle: "type",
  },
  fields: [
    {
      name: "visbillity",
      type: "checkbox", // Use "checkbox" for boolean fields
      defaultValue: true,
    },
    {
      name: "type",
      type: "select",
      options : ["collection_card_slider", "collection_card_stack" , "collection_slider" , "collection_grid"],
      required: true
    },
    {
      name: "collection_ids",
      label: "Collection Ids",
      type: "array",
      required: true,
      fields:[
        {
          name: 'collection_id',
          type: 'text',
          required : true
        },
        {
          name : "image_src",
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
  ],
};

module.exports = Collection;
