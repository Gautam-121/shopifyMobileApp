const { CollectionConfig } = require('payload/types');

const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

module.exports = Users;

const adat = {
  "count": 1,
  "visibility": false,
  "block_title": "Don't miss our biggest sales event",
  "text_color": "#202223",
  "bg_color": "#F6F7F7",
  "duration": {
      "day": 0,
      "hour": 0,
      "minute": 0
  },
  "start_time": {
      "date": null,
      "time": null,
      "timezone": null
  },
  "id": null,
  "type": "countdown",
  "schedule": {
      "timezone": null,
      "time_to_show": {
          "is_enabled": false,
          "date": null,
          "time": null
      },
      "time_to_hide": {
          "is_enabled": false,
          "date": null,
          "time": null
      }
  }
}