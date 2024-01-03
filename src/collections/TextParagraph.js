const { CollectionConfig } = require("payload/types");

const TextParagraph = {
  slug: "paragraph",
  access: {
    create: () => true,
  },
  fields: [
    {
      name: "type",
      type: "text",
      defaultValue: "text_paragraph"
    },
    {
      name: "visibility",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name : "content",
      label: "Content",
      type: "text",
      defaultValue:"Welcome to our online store, your one-stop shop for all your needs. We're dedicated to simplifying your online shopping experience, offering a wide range of products that enhance your everyday life. Shop with us today and discover the convenience of online shopping.",
      maxLength: 500,
    },
  ],
};

module.exports = TextParagraph