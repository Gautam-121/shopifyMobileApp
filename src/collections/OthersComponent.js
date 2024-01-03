const { CollectionConfig } = require("payload/types");

const OthersComponent = {
  slug: "othersCommon",
  fields: [
    {
        name: "type",
        type: "select",
        options: ["banner_image_slider" ,  "advanced_image_slider" , "circle_image_slider" , "circle_image_slider_with_text" , "square_image_grid" , "square_image_slider"],
        required: true
    },
    {
        name: "visibility",
        type: "checkbox",
        defaultValue: true
    },
    {
      name: "auto_slide",
      type: "group",
      admin: {
        condition: (_, siblingData) => siblingData.type  === "banner_image_slider",
      },
      fields: [
        {
          name: "enable",
          type: "checkbox",
          defaultValue: true
        },
        {
          name: "time",
          type: "number",
          min: 1,
          max: 15,
          defaultValue: 4
        }
      ],
      defaultValue: undefined
    },
    {
      name: "items",
      type: "array",
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
        defaultValue: undefined
       },
      ]
    }
  ],
};

module.exports = OthersComponent;
