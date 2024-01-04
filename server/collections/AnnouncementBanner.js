const { CollectionConfig } = require('payload/types');

const AnnouncementBanner = {
  slug: 'announcementBar',
  admin: {
    useAsTitle: 'type',
  },
  fields: [
    {
        name: "type",
        type: "text",
        defaultValue: "announcement_bar"
    },
    {
        name: "visibility",
        type: "checkbox",
        defaultValue: true
    },
    {
        name: "text",
        type: "text",
        defaultValue: "Up to 50% off New Arrivals"
    },
    {
        name: "text_color",
        type: "text",
        defaultValue: "#FFFFFF"
    },
    {
        name: "bg_color",
        type: "text",
        defaultValue: "#FE6100"
    },
    {
        name: "animation",
        type: "select",
        options:["None", "Left To Right" , "Right To Left"],
        defaultValue: "None"
    }
  ],
};

module.exports = AnnouncementBanner