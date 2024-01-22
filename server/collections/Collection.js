const { CollectionConfig } = require("payload/types");

const featuredCollectionConfig = {
  slug: "collection",
  admin: {
    useAsTitle: "type",
  },
  fields: [
    {
      name: "data",
      type: "array",
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          defaultValue: undefined,
        },
        {
          name: "imageUrl",
          type: "text",
          defaultValue: undefined,
        },
        {
          name: "collection_id",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

module.exports = featuredCollectionConfig;
