const { CollectionConfig } = require("payload/types");

const Video = {
    slug: "video",
    admin: {
      useAsTitle: "id",
    },
    fields: [
      {
        name: "type",
        type: "text",
        defaultValue: "video"
      },
      {
        name: "visibility",
        type: "checkbox",
        defaultValue:false
      },
      {
        name: "block_title",
        type: "text",
        label: "Block Title",
        defaultValue: undefined
      },
      {
        name: "video_url",
        type: "text",
        label: "Url",
        defaultValue: undefined
      },
      {
        name: "mute",
        type: "checkbox",
        defaultValue: false
      },
      {
        name: "auto_play",
        type: "checkbox",
        defaultValue: false
      },
      {
        name: "full_width",
        type: "checkbox",
        defaultValue: true
      },
      {
        name: "loop",
        type: "checkbox",
        defaultValue:"false"
      },
      {
        name:"show_playback",
        type: "checkbox",
        defaultValue: true
      },
    ]
  };

module.exports = Video
  