const { CollectionConfig } = require("payload/types");

const SocialChannel = {
  slug: "social",
  admin: {
    useAsTitle: "type",
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: "type",
      type: "text",
      defaultValue: "social_channel"
    },
    {
      name: "visibility",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name : "block_title",
      label: "Block Title",
      type: "text",
      maxLength: 30,
      defaultValue:"Contact With Us"
    },
    {
        name: "items",
        type: "array",
        fields: [
          {
            name: "socialName",
            type: "text",
          },
          {
            name: "url",
            type: "text",
            required: true
          },
          {
            name: "itemVisibility",
            type: "checkbox",
            defaultValue:true
          }
        ]
    }
  ],
};

module.exports = SocialChannel