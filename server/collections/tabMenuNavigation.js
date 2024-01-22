const { CollectionConfig } = require("payload/types");

const tabMenuConfig = {
  slug: "tabMenuNav",
  fields: [
    {
      name: "shopId",
      type: "text",
      required: true,
    },
    {
      name: "setting",
      type: "array",
      fields: [
        {
            name: "redirect_page",
            type: "select",
            options: ["home", "search" , "cart" , "account" , "order"]
        },
        {
          name: "order",
          type: "number",
          unique: true
        }
      ],
    }
  ],
};

module.exports = tabMenuConfig