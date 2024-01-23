const { CollectionConfig } = require("payload/types");

const emptyCartPageDetailConfig = {
  slug: "emptyCartPageDetail",
  fields: [
    {
      name: "shopId",
      type: "text",
      defaultValue: undefined
    },
    {
      name: "empty_state_illustration",
      type: "group",
      fields:[
        {
            name:"image_url",
            type:"text",
            defaultValue:"https:\/\/static-mobile.onecommerce.io\/images\/icon\/1701773380_icon-cart.png"
        }
      ]
    },
    {
        name: "empty_state_texts",
        type: "group",
        fields:[
          {
              name:"title",
              type:"text",
              defaultValue: "Nothing added to cart yet"
          },
          {
            name:"subtitle",
            type:"text",
            defaultValue: "It's quite lonely here, isn't it? Why don't we continue shopping?"
        }
        ]
    },
    {
        name: "empty_state_button",
        type: "group",
        fields:[
          {
              name:"call_to_action_text",
              type:"text",
              defaultValue: "Continue shopping"
          },
          {
            name:"redirect_to",
            type:"text",
            defaultValue: "home"
        }
        ]
    }
  ],
};

module.exports = emptyCartPageDetailConfig;
