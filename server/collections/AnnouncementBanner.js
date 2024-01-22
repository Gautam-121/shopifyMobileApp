const { CollectionConfig } = require("payload/types");

const announcementBannerConfig = {
  slug: "announcementBanner",
  fields: [
    {
      name: "message",
      type: "text",
      defaultValue: "Up to 50% off New Arrivals",
    },
    {
      name: "textColor",
      type: "text",
      defaultValue: "#FFFFFF",
    },
    {
      name: "backgroundColor",
      type: "text",
      defaultValue: "#FE6100",
    },
    {
      name: "animationType",
      type: "select",
      options: ["None", "Left To Right", "Right To Left"],
      defaultValue: "None",
    },
  ],
};

module.exports = announcementBannerConfig;
