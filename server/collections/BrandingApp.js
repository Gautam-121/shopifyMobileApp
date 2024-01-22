const { CollectionConfig } = require("payload/types");

const brandingThemeConfig = {
  slug: "brandingTheme",
  fields: [
   {
      name: "shopId",
      label: "Shop ID",
      type: "text",
      required: true,
      unique  : true,
    },
    {
      name: "app_name",
      type: "text",
    },
    {
      name: "app_name_text_colour",
      type: "text",
      defaultValue: "#ffffff"
    },
    {
      name: "launchScreenImageUrl",
      type: "text",
      defaultValue: undefined,
    },
    {
      name: "launchScreenBgColor",
      type: "text",
      defaultValue: "#FFFFFF",
    },
    {
      name: "headerFooterBgColor",
      type: "text",
      defaultValue: "#FFFFFF",
    },
    {
      name: "headerFooterIconColor",
      type: "text",
      defaultValue: "#202223",
    },
    {
      name: "primaryBgColor",
      type: "text",
      defaultValue: "#323470",
    },
    {
      name: "primaryTextColor",
      type: "text",
      defaultValue: "#FFFFFF",
    },
  ],
};

module.exports = brandingThemeConfig;
