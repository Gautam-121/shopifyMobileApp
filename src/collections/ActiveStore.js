const { CollectionConfig } = require("payload/types");

const ActiveStores = {
  slug: "activeStores",
  fields: [
    {
      name: "shop",
      type: "text",
      required: true, 
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: false,
    }
  ],
};

module.exports = ActiveStores;
// advancedImageSlider --> Visibility , items["imageUrl" , "redirectedUrl"] , type
// circleImageSlider ---> visibility , items["imageUrl" , "redirectedUrl"]  , type
// squareIamgeGrid ---> visibility , items , type
// squareImageSlider ---> visibility items , type
// circleImageSliderWithText --> visibility , itesm["imageUrl" , "text" , "redirectedUrl"]
const advanced_image_slider = {
  "count": 1,
  "visibility": true,
  "items": [
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/advance-image-slider\/1683537784349.jpg",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/advance-image-slider\/1683537784449.jpg",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/advance-image-slider\/1683537784549.jpg",
          "redirect_to": "None"
      }
  ],
  "id": null,
  "type": "advanced_image_slider",
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

const circle_image_slider = {
  "count": 1,
  "visibility": true,
  "items": [
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/garnet\/circle-image-slider\/1677554919874.jpg",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/garnet\/circle-image-slider\/1677554919875.jpg",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/garnet\/circle-image-slider\/1677554919876.jpg",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/garnet\/circle-image-slider\/1677554919877.jpg",
          "redirect_to": "None"
      }
  ],
  "id": null,
  "type": "circle_image_slider",
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

const circle_image_slider_with_text = {
  "count": 1,
  "visibility": true,
  "items": [
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/circle-image-slider-with-text\/1683537784349.jpg",
          "text": "Electronic",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/circle-image-slider-with-text\/1683537784449.jpg",
          "text": "Furniture",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/circle-image-slider-with-text\/1683537784549.jpg",
          "text": "Books",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/circle-image-slider-with-text\/1683537784649.jpg",
          "text": "Shoes",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/doorbuster\/circle-image-slider-with-text\/1683537784749.jpg",
          "text": "Jewelry",
          "redirect_to": "None"
      }
  ],
  "id": null,
  "type": "circle_image_slider_with_text",
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

const square_image_grid = {
  "count": 1,
  "visibility": true,
  "block_title": "",
  "items": [
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/ascend\/square-image-grid\/1687513959129.png",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/ascend\/square-image-grid\/1687513959229.png",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/ascend\/square-image-grid\/1687513959329.png",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/ascend\/square-image-grid\/1687513959429.png",
          "redirect_to": "None"
      }
  ],
  "id": null,
  "type": "square_image_grid",
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

const square_image_slider = {
  "count": 1,
  "visibility": true,
  "items": [
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/oak\/square-image-slider\/1676519746707.jpg",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/oak\/square-image-slider\/1676519755579.jpg",
          "redirect_to": "None"
      },
      {
          "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/oak\/square-image-slider\/1676519766267.jpg",
          "redirect_to": "None"
      }
  ],
  "id": null,
  "type": "square_image_slider",
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


 // {
    //   name: "selectedTheme_id",
    //   type : "relationship",
    //   relationTo : "theme",
    // },
    // {
    //   name: "custimisedViewOption",
    //   type: "group",
    //   fields: [
    //     {
    //       name: "appName", // required
    //       type: "radio", // required
    //       options: [
    //         // required
    //         {
    //           label: "Use As a Title",
    //           value: "title_logo",
    //         },
    //         {
    //           label: "upload Logo",
    //           value: "image_logo",
    //         },
    //       ],
    //       defaultValue: "title_logo", // The first value in options.
    //       admin: {
    //         layout: "vertical",
    //       },
    //     },
    //     {
    //       name: "titleLogoSelect",
    //       label: "Text Title",
    //       type: "group",
    //       fields: [
    //         {
    //           name: "titlrBarLogo",
    //           type: "text",
    //         },
    //         {
    //           name: "textColour",
    //           type: "text",
    //           defaultValue: "#202223",
    //         },
    //       ],
    //       required: true,
    //       admin: {
    //         condition: (_, siblingData) =>
    //           siblingData.appName === "title_logo",
    //       },
    //     },
    //     {
    //       name: "imageLogoSelect",
    //       type: "relationship",
    //       relationTo: "media",
    //       required: true,
    //       admin: {
    //         condition: (_, siblingData) =>
    //           siblingData.appName === "image_logo",
    //       },
    //     },
    //     {
    //       name: "headerFooterBackColour",
    //       type: "text",
    //       defaultValue: "#b73636",
    //     },
    //     {
    //       name: "iconColour",
    //       type: "text",
    //       defaultValue: "#190b0b",
    //     },
    //     {
    //       name: "primaryButton",
    //       type: "group",
    //       fields: [
    //         {
    //           name: "primaryBackgroundColor",
    //           type: "text",
    //           defaultValue: "#561d1d",
    //         },
    //         {
    //           name: "primaryTextColour",
    //           type: "text",
    //           defaultValue: "#9e6e6e",
    //         },
    //       ],
    //     },
    //     {
    //       name: "splashScreen", // required
    //       type: "radio", // required
    //       options: [
    //         // required
    //         {
    //           label: "logo",
    //           value: "appLogo",
    //         },
    //         {
    //           label: "upload Logo",
    //           value: "fullScreenImage",
    //         },
    //       ],
    //       defaultValue: "title_logo", // The first value in options.
    //       admin: {
    //         layout: "vertical",
    //       },
    //     },
    //     {
    //       name: "flashAppLogo",
    //       type: "relationship",
    //       relationTo: "media",
    //       admin: {
    //         condition: (_, siblingData) => siblingData.splashScreen === "appLogo",
    //       },
    //     },
    //     {
    //       name: "flashFullImage",
    //       type: "relationship",
    //       relationTo: "media",
    //       admin: {
    //         condition: (_, siblingData) =>
    //           siblingData.splashScreen === "fullScreenImage",
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: "custimisedComponent",
    //   type: "array", // Use "checkbox" for boolean fields
    //   fields:[
    //     {
    //       name: "type",
    //       type: "select",
    //       options: [
    //         "Banner",
    //         "Social",
    //         "TextParagraph",
    //         "EventTimer",
    //         "BannerSlider",
    //         "CollectionSlider",
    //         "CollectionGrid",
    //         "ProductSlider",
    //         "ProductGrid",
    //         "AnnouncementBar",
    //         "CircleImageSlider",
    //         "SquareImageSlider",
    //         "SquareImageGrid",
    //       ],
    //       required: true,
    //     },
    //     {
    //       name: "bannerImageSetting",
    //       label: "BannerIamge Settings",
    //       type: "relationship",
    //       relationTo: "banner",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) =>
    //           siblingData.type === "Banner",
    //       },
    //       required: true
    //     },
    //     {
    //       name: "announcementbarSetting",
    //       label: "AnnouncementBar Settings",
    //       type: "relationship",
    //       relationTo: "announcementBar",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) =>
    //           siblingData.type === "AnnouncementBar",
    //       },
    //       required: true
    //     },
    //     {
    //       name: "collectionSetting",
    //       label: "Collection Settings",
    //       type: "relationship",
    //       relationTo: "collection",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) => ["CollectionGrid", "CollectionSlider"].includes(siblingData.type)
    //       },
    //       required: true
    //     },
    //     {
    //       name: "productSetting",
    //       label: "Product Settings",
    //       type: "relationship",
    //       relationTo: "product",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) => ["ProductGrid", "ProductSlider"].includes(siblingData.type)
    //       },
    //       required: true
    //     },
    //     {
    //       name: "socialChannelSettings",
    //       label: "Social Settings",
    //       type: "relationship",
    //       relationTo: "social",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) => siblingData.type === "Social",
    //       },
    //       required: true
    //     },
    //     {
    //       name: "textParagraphSettings",
    //       label: "Text Paragraph",
    //       type: "relationship",
    //       relationTo: "paragraph",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) => siblingData.type === "TextParagraph",
    //       },
    //       required: true
    //     },
    //     {
    //       name: "eventTimerSettings",
    //       label: "Event Timer",
    //       type: "relationship",
    //       relationTo: "eventTimer",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) => siblingData.type === "EventTimer",
    //       },
    //       required: true
    //     },
    //     {
    //       name: "otherComponent",
    //       type: "relationship",
    //       relationTo: "imageFormat",
    //       hasMany: false,
    //       admin: {
    //         condition: (_, siblingData) => ["BannerSlider", "CircleImageSlider" , "SquareImageSlider" , "SquareImageGrid" ].includes(siblingData.type)
    //       },
    //       required: true
    //     },
    //     {
    //       name: "position",
    //       type: "number",
    //       label: "Order",
    //       unique: true,
    //       required: true,
    //     },
    //   ],
    // }