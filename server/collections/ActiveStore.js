const { CollectionConfig } = require("payload/types");

const Session = {
  slug: "activeStores",
  admin: {
    useAsTitle: "shop",
  },
  fields: [
    {
      name: "shop",
      type: "text",
      required: true, // Set to true if you want this field to be required
      unique: true, // Set to true if you want this field to be unique
    },
    {
      name: "isActive",
      type: "checkbox", // Use "checkbox" for boolean fields
      defaultValue: false,
    },
  ],
};

module.exports = Session;
