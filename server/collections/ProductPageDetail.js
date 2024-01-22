const { CollectionConfig } = require("payload/types");

const productPageDetailConfig = {
  slug: "productPageDetail",
  fields: [
    {
      name: "image",
      type: "group",
      fields:[
        {
            name:"adjustment",
            type:"select",
            options:["fill" , "fit" , "stretch"],
            defaultValue:"fill"
        },
        {
            name:"ratio",
            type:"select",
            options:["oneToOne", "twoToThree", "threeToFour"],
            defaultValue:"threeToFour"
        }
      ]
    },
    {
      name: "actions",
      type: "group",
      fields:[
        {
            name:"basic",
            type:"group",
            fields:[
                {
                    name:"wishlist",
                    type:"checkbox",
                    defaultValue:true
                },
                {
                    name:"share",
                    type:"checkbox",
                    defaultValue:true
                },
                {
                    name:"cart",
                    type:"checkbox",
                    defaultValue:true
                }
            ]
        },
        {
            name:"advanced",
            type:"group",
            fields:[
                {
                    name: "rating_and_reviews",
                    type:"group",
                    fields:[
                        {
                            name: "isVisible",
                            type: "checkbox",
                            defaultValue: true
                        }
                    ]
                },
                {
                    name: "recommendation",
                    type:"group",
                    fields:[
                        {
                            name: "isVisible",
                            type: "checkbox",
                            defaultValue: true
                        },
                        {
                            name: "content",
                            type: "text",
                            defaultValue: "You may also like"
                        }
                    ]
                },
                {
                    name: "recent_viewed_products",
                    type:"group",
                    fields:[
                        {
                            name: "isVisible",
                            type: "checkbox",
                            defaultValue: false
                        },
                        {
                            name: "content",
                            type: "text",
                            defaultValue: "Recently viewed"
                        }
                    ]
                }
            ]
        }
      ]
    },
    {
        name: "faster_checkout",
        type: "group",
        fields:[
            {
                name:"buy_now",
                type: "checkbox",
                defaultValue: false
            }
        ]
    }
  ],
};

module.exports = productPageDetailConfig;
