const { CollectionConfig } = require("payload/types");

const accountPageDetailConfig = {
  slug: "accountPageDetail",
  fields: [
    {
      name: "header_bar",
      type: "group",
      fields:[
        {
            name:"cart",
            type:"checkbox",
            defaultValue:true
        },
        {
            name:"settings",
            type:"checkbox",
            defaultValue:true
        }
      ]
    },
    {
        name: "main_section",
        type: "array",
        fields:[
          {
              name:"type",
              type:"select",
              options:["orders" , "personal_information", "shipping_address"],
              unique: true
          },
          {
              name:"isVisible",
              type:"checkbox",
              defaultValue:true
          }
        ]
      }
  ],
};

module.exports = accountPageDetailConfig;
