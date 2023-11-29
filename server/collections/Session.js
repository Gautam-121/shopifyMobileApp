const { CollectionConfig } = require("payload/types");

const Session = {
  slug: "session",
  admin: {
    useAsTitle: "id",
  },
  fields: [
    {
      name: "id",
      type: "text",
      required : true
    },
    {
      name: "content",
      type: "text",
      required : true
    },
    {
      name: "shop",
      type: "text",
      required : true
    },
    {
      name: "serverKey",
      type: "text",
    }
  ],
};

module.exports = Session;


