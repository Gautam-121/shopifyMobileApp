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


const componentRearreangeAndSend = [
  {
    id: 59446,
    image_adjustment: "contain",
    image_url:
      "https://static-mobile.onecommerce.io/images/banner/1702447429_logo",
    redirect_to: "collection_id=456868004158",
    type: "banner_image",
    visibility: true,
  },
  {
    auto_slide: {
      enable: true,
      time: 5,
    },
    id: 59647,
    items: [
      {
        image_url:
          "https://static-mobile.onecommerce.io/images/pulse/banner-image-slider/1686111806455.jpg",
        redirect_to: "None",
      },
      {
        image_url:
          "https://static-mobile.onecommerce.io/images/pulse/banner-image-slider/1686111806555.jpg",
        redirect_to: "None",
      },
    ],
    type: "banner_image_slider",
    visibility: true,
  },
  {
    animation: "None",
    bg_color: "#FE6100",
    id: null,
    text: "Up to 50% off New Arrivals!",
    text_color: "#FFFFFF",
    type: "announcement_bar",
    visibility: true,
  },
  {
    bg_color: "#256868",
    block_title: "Don't miss our biggest sales event",
    duration: {
      day: 0,
      hour: 0,
      minute: 0,
    },
    id: 59648,
    start_time: {
      date: "2023-12-13",
      time: "04:50",
      timezone: "(GMT-05:00) Eastern Time (US & Canada)",
    },
    text_color: "#1c92ce",
    type: "countdown",
    visibility: true,
  },
  {
    block_title: "New arrivals",
    collection_id: "456867971390",
    id: 59412,
    image_adjustment: "cover",
    no_of_product: 6,
    type: "product_slider",
    visibility: false,
  },
  {
    content:
      '<p style="text-align: center"><u>Welcome to our online store, your one-stop shop for all your needs. We\'re dedicated to simplifying your online shopping experience, offering a wide range of products that enhance your everyday life. Shop with us today and discover the convenience of online shopping.</u></p>',
    id: 59649,
    type: "text_paragraph",
    visibility: true,
  },
  {
    collections_ids: [456868004158, 456868036926],
    id: 59650,
    type: "collection_card_slider",
    visibility: true,
  },
  {
    collections_ids: [456868004158, 456868036926],
    id: 59650,
    type: "collection_grid",
    visibility: true,
  },
  {
    collections_ids: [456868004158, 456868036926],
    id: 59650,
    type: "collection_card_stack",
    visibility: true,
  },
  {
    block_title: "",
    id: 59654,
    items: [
      { url: null, title: "Facebook", visibility: true },
      { url: null, title: "X", visibility: true },
      { url: null, title: "Instagram", visibility: true },
      { url: null, title: "YouTube", visibility: true },
      { url: null, title: "TikTok", visibility: true },
    ],
    type: "social_channel",
    visibility: false,
  },
  {
    auto_play: false,
    block_title: null,
    full_width: true,
    id: 59655,
    loop: false,
    mute: false,
    show_playback: true,
    type: "video",
    video_id: null,
    video_url: null,
    visibility: true,
  },
  {
    block_type: "inventory",
    count: 1,
    id: null,
    items: [
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
      redirect_to: "None"
      },
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784449.jpg",
      redirect_to: "None"
      },
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784549.jpg",
      redirect_to: "None"
      }
    ],
    type: "advanced_image_slider",
    visibility: true
  },
  {
    block_type: "inventory",
    count: 1,
    id: null,
    items: [
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
      redirect_to: "None",
      text: "Electronic"
      },
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784449.jpg",
      redirect_to: "None",
      text: "Furniture"
      },
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784549.jpg",
      redirect_to: "None",
      text: "Books"
      }
    ],
    type: "circle_image_slider_with_text",
    visibility: true
  },
  {
    block_type: "inventory",
    count: 1,
    id: null,
    items: [
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
      redirect_to: "None",
      text: "Electronic"
      },
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784449.jpg",
      redirect_to: "None",
      text: "Furniture"
      },
      {
      image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784549.jpg",
      redirect_to: "None",
      text: "Books"
      }
    ],
    type: "square_image_grid",
    visibility: true
  },
  {
      block_type: "inventory",
      count: 1,
      id: null,
      items: [
        {
        image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
        redirect_to: "None",
        },
        {
        image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784449.jpg",
        redirect_to: "None",
        },
        {
        image_url: "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784549.jpg",
        redirect_to: "None",
        }
      ],
      type: "square_image_slider",
      visibility: true
  }
  
];

const Themedata = {
  id: "",
  names : "",
  type: "free",
  price: null,
  industry: "clothing",
  slug: "chic",
  image: [
    {
         theme_id: "eb",
         url: "https:\/\/static-mobile.onecommerce.io\/images\/chic\/1675755625.png",
         name: "1675755625",
         type: "image"
    },
    {
         theme_id: "eb",
         url: "https:\/\/static-mobile.onecommerce.io\/images\/chic\/1675755627.png",
         name: "1675755627",
         type: "image"
    },
    {
         theme_id: "eb",
         url: "https:\/\/static-mobile.onecommerce.io\/images\/chic\/1675755700.png",
         name: "1675755700",
         type: "image"
    }
],
    app_design_updated_at: null,
    lock: false,
    plan: null,
    active: false,

}

const listOfAllThemes = [
  {
    id: "eb",
    name: "Chic",
    default: 0,
    status: 1,
    created_at: "2023-04-03T07:02:11.000000Z",
    updated_at: "2023-05-26T02:55:28.000000Z",
    description: "Bring your refined style brand appeal to life with special attention to artists and collections.",
    product_grid_column: 2,
    type: "free",
    price: null,
    industry: "clothing",
    slug: "chic",
    des_highlight: null,
    image: [
       {
            theme_id: "eb",
            url: "https:\/\/static-mobile.onecommerce.io\/images\/chic\/1675755625.png",
            name: "1675755625",
            type: "image"
       },
       {
            theme_id: "eb",
            url: "https:\/\/static-mobile.onecommerce.io\/images\/chic\/1675755627.png",
            name: "1675755627",
            type: "image"
       },
       {
            theme_id: "eb",
            url: "https:\/\/static-mobile.onecommerce.io\/images\/chic\/1675755700.png",
            name: "1675755700",
            type: "image"
       }
   ],
    lock: false,
    plan: null,
    active: false,
   app_design_updated_at: null
  },
  {
    id: "Pe",
    name: "Mighty",
    default: 0,
    status: 1,
    created_at: "2023-04-03T07:02:30.000000Z",
    updated_at: "2023-05-26T02:55:28.000000Z",
    description: "Bold, witty, and dynamic. A feature-packed theme that elevates your energetic brands.",
    product_grid_colum: 2,
    type: "free",
    price: null,
    industry: "electronics",
    slug: "mighty",
    des_highlight: null,
    images: [
        {
            theme_id: "Pe",
            url: "https:\/\/static-mobile.onecommerce.io\/images\/mighty\/1676355824218.png",
            name: "1676355824218",
            type: "image"
        },
        {
            theme_id: "Pe",
            url: "https:\/\/static-mobile.onecommerce.io\/images\/mighty\/1676355865218.png",
            name: "1676355865218",
            type: "image"
        },
        {
            theme_id: "Pe",
          url: "https:\/\/static-mobile.onecommerce.io\/images\/mighty\/1676355887498.png",
            name: "1676355887498",
            type: "image"
        }
    ],
    lock : true,
    plan: "Growth",
    active: true,
    app_design_updated_at: null
  }
]

const InvetaryOfAllComponent = [
  {
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
  },
  {
      "count": 1,
      "visibility": true,
      "text": "Up to 50% off New Arrivals!",
      "text_color": "#FFFFFF",
      "bg_color": "#FE6100",
      "animation": "None",
      "id": null,
      "type": "announcement_bar",
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
  },
  {
      "count": 1,
      "visibility": true,
      "image_url": null,
      "redirect_to": "None",
      "image_adjustment": "cover",
      "id": null,
      "type": "banner_image",
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
  },
  {
      "count": 1,
      "visibility": true,
      "auto_slide": {
          "enable": true,
          "time": 10
      },
      "items": [
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/runwise\/banner-image-slider\/1687335877037.jpg",
              "redirect_to": "None"
          },
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/runwise\/banner-image-slider\/1687335877137.jpg",
              "redirect_to": "None"
          },
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/runwise\/banner-image-slider\/1687335877237.jpg",
              "redirect_to": "None"
          },
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/runwise\/banner-image-slider\/1687335877337.jpg",
              "redirect_to": "None"
          }
      ],
      "id": null,
      "type": "banner_image_slider",
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
  },
  {
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
  },
  {
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
  },
  {
      "count": 1,
      "visibility": true,
      "collections_ids": [
          456867971390
      ],
      "id": null,
      "type": "collection_card_slider",
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
  },
  {
      "count": 1,
      "visibility": true,
      "collections_ids": [
          456867971390
      ],
      "image_adjustment": "cover",
      "id": null,
      "type": "collection_card_stack",
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
  },
  {
      "count": 1,
      "visibility": true,
      "collections_ids": [
          456867971390
      ],
      "image_adjustment": "cover",
      "id": null,
      "type": "collection_grid",
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
  },
  {
      "count": 1,
      "visibility": true,
      "collections_ids": [
          456867971390
      ],
      "id": null,
      "type": "collection_slider",
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
  },
  {
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
  },
  {
      "count": 1,
      "block_title": "Our Instagram",
      "visibility": true,
      "id": null,
      "type": "instagram",
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
  },
  {
      "count": 1,
      "visibility": true,
      "block_title": "New arrivals",
      "collection_id": 456867971390,
      "no_of_product": 4,
      "image_adjustment": "cover",
      "id": null,
      "type": "product_grid",
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
  },
  {
      "count": 1,
      "visibility": true,
      "block_title": "New arrivals",
      "collection_id": 456867971390,
      "no_of_product": 4,
      "image_adjustment": "cover",
      "id": null,
      "type": "product_slider",
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
  },
  {
      "count": 1,
      "block_title": "Contact with us",
      "visibility": false,
      "items": [
          {
              "url": null,
              "title": "Facebook",
              "visibility": true
          },
          {
              "url": null,
              "title": "X",
              "visibility": true
          },
          {
              "url": null,
              "title": "Instagram",
              "visibility": true
          },
          {
              "url": null,
              "title": "YouTube",
              "visibility": true
          },
          {
              "url": null,
              "title": "TikTok",
              "visibility": true
          }
      ],
      "id": null,
      "type": "social_channel",
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
  },
  {
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
  },
  {
      "count": 1,
      "visibility": true,
      "items": [
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/chic\/square-image-slider\/1675334836.png",
              "redirect_to": "None"
          },
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/chic\/square-image-slider\/1675334853.png",
              "redirect_to": "None"
          },
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/chic\/square-image-slider\/1675334954.png",
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
  },
  {
      "count": 1,
      "visibility": true,
      "content": "Welcome to our online store, your one-stop shop for all your needs. We're dedicated to simplifying your online shopping experience, offering a wide range of products that enhance your everyday life. Shop with us today and discover the convenience of online shopping.",
      "id": null,
      "type": "text_paragraph",
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
  },
  {
      "count": 1,
      "block_title": "Our Tiktok",
      "visibility": true,
      "video_url": null,
      "id": null,
      "type": "tiktok_video",
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
  },
  {
      "count": 1,
      "visibility": true,
      "block_title": null,
      "video_url": null,
      "video_id": null,
      "mute": false,
      "auto_play": false,
      "full_width": true,
      "loop": false,
      "show_playback": true,
      "id": null,
      "type": "video",
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
]

const brandingOnThatThemeLikeLogo =  {
  "id": 7937,
  "theme_id": "eb",
  "shop_id": 81447387454,
  "app_name_mode": "text",
  "app_name": "renergii",
  "app_name_text_color": "#C8A089",
  "app_name_logo_src": null,
  "hbb_bg_color": "#FFFFFF",
  "hbb_icon_color": "#202223",
  "pb_bg_color": "#C8A089",
  "pb_text_color": "#FFFFFF",
  "lb_bg_color": "#C8A089",
  "lb_text_color": "#FFFFFF",
  "splash_screen_image": null,
  "status": 1,
  "created_at": "2023-12-14T10:27:54.000000Z",
  "updated_at": "2023-12-14T10:27:54.000000Z",
  "dark_mode_on": 0,
  "hbb_dm_bg_color": null,
  "hbb_dm_icon_color": null,
  "splash_screen_type": "ss_logo",
  "additional_features": []
}

const componenentThemeBranding = [
  {
      "visibility": true,
      "image_url": null,
      "redirect_to": "None",
      "image_adjustment": "cover",
      "id": 59980,
      "type": "banner_image",
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
  },
  {
      "visibility": true,
      "block_title": "New arrivals",
      "collection_id": 456867971390,
      "no_of_product": 4,
      "image_adjustment": "cover",
      "id": 59981,
      "type": "product_slider",
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
  },
  {
      "visibility": true,
      "collections_ids": [
          456867971390
      ],
      "id": 59982,
      "type": "collection_slider",
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
  },
  {
      "visibility": true,
      "collections_ids": [
          456867971390
      ],
      "image_adjustment": "cover",
      "id": 59983,
      "type": "collection_grid",
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
  },
  {
      "visibility": true,
      "block_title": "New arrivals",
      "collection_id": 456867971390,
      "no_of_product": 4,
      "image_adjustment": "cover",
      "id": 59984,
      "type": "product_grid",
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
  },
  {
      "visibility": true,
      "items": [
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/chic\/square-image-slider\/1675334836.png",
              "redirect_to": "None"
          },
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/chic\/square-image-slider\/1675334853.png",
              "redirect_to": "None"
          },
          {
              "image_url": "https:\/\/static-mobile.onecommerce.io\/images\/chic\/square-image-slider\/1675334954.png",
              "redirect_to": "None"
          }
      ],
      "id": 59985,
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
  },
  {
      "visibility": true,
      "content": "Welcome to our online store, your one-stop shop for all your needs. We're dedicated to simplifying your online shopping experience, offering a wide range of products that enhance your everyday life. Shop with us today and discover the convenience of online shopping.",
      "id": 59986,
      "type": "text_paragraph",
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
]


const navigationOnTheme =   {
  "side-menu": {
      "id": 15859,
      "shop_id": 81447387454,
      "theme_id": "eb",
      "status": true,
      "setting": [
          {
              "title": "Home",
              "redirect_page": "home",
              "redirect_id": null,
              "external_link": null,
              "order": 1
          },
          {
              "title": "Collection List",
              "redirect_page": "collections",
              "redirect_id": null,
              "external_link": null,
              "order": 2
          },
          {
              "title": "Products",
              "redirect_page": "products",
              "redirect_id": null,
              "external_link": null,
              "order": 3
          },
          {
              "title": "Notifications",
              "redirect_page": "notifications",
              "redirect_id": null,
              "external_link": null,
              "order": 4
          }
      ],
      "background_image": null,
      "type": "side-menu",
      "created_at": "2023-12-14T10:27:54.000000Z",
      "updated_at": "2023-12-14T10:27:54.000000Z"
  },
  "bottom-bar": {
      "id": 15860,
      "shop_id": 81447387454,
      "theme_id": "eb",
      "status": true,
      "setting": [
          {
              "title": "Home",
              "key": "home",
              "order": 1
          },
          {
              "title": "Search",
              "key": "search",
              "order": 2
          },
          {
              "title": "Wishlist",
              "key": "wishlist",
              "order": 3
          },
          {
              "title": "Notification",
              "key": "notification",
              "order": 4
          },
          {
              "title": "Account",
              "key": "account",
              "order": 5
          }
      ],
      "background_image": null,
      "type": "bottom-bar",
      "created_at": "2023-12-14T10:27:54.000000Z",
      "updated_at": "2023-12-14T10:27:54.000000Z"
  }
}

