const { CollectionConfig  } = require("payload/types");

const Collection = {
  slug: "eventTimer",
  admin: {
    useAsTitle: "block_title",
  },
  fields: [
    {
      name: "type",
      type: "text",
      defaultValue: "countdown"
    },
    {
        name: "visibility",
        type: "checkbox", // Use "checkbox" for boolean fields
        defaultValue: true,
    },
    {
        name: "block_title",
        label: "Block Title",
        type: "text",
        defaultValue: "Don't miss our biggest sales event"
    },
    {
        name: "text_colour",
        label: "Text Colour",
        type: "text",
        defaultValue: "#202223"
    },
    {
        name: "bg_colour",
        label: "Background Colour",
        type: "text",
        defaultValue: "#F6F7F7"
    },
    {
      name: "duration",
      type: "group",
      fields:[
        {
            name: "day",
            type: "number",
            label: "Day",
            min: 0,
            max: 99,
            defaultValue: 0
        },
        {
            name: "hour",
            type: "number",
            label: "Hour",
            min: 0,
            max: 23,
            defaultValue: 0
        },
        {
            name: "minute",
            type: "number",
            label: "Minute",
            min: 0,
            max: 59,
            defaultValue: 0
        }
     ]
    },
    {
      name: "start_time",
      type: "group",
      fields:[
        {
          name: 'date',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
            },
          },
          validate: async (val, { operation }) => {
            const today = new Date()
            if(val < today) return 'The customer number provided does not match any customers within our records.'
          }
        },
        {
          name: 'time',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'timeOnly',
              displayFormat: 'h:mm:ss a',
            },
          },
        },
        {
          name: "timeZone",
          type: "text",
        }
     ]
    }
  ],
};

module.exports = Collection;
