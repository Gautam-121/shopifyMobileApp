const data =[
    {
      "type": "banner_image",
      "view": "horizontal",
      "visibility": true,
      "items": {
          "image_url": "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
          "navigate": "none",
          "redirect_id": null
        },
      "imageAdjustment": "fit",
    },
    {
      "type": "announcement_bar",
      "visibility": true,
      "text": "Up to 50% off New Arrivals",
      "text_color": "#FFFFFF",
      "bg_color": "#FE6100",
      "animation": "Right To Left",
    },
    {
      "type": "product_grid",
      "visibility": true,
      "block_title": "T-Shirt",
      "collection_id": "gid://shopify/Collection/456867971390",
      "no_of_product": 5,
      "imageAdjustment": "fit",
    },
    {
      "type": "product_stack",
      "visibility": true,
      "block_title": "Trousers",
      "collection_id": "gid://shopify/Collection/456867971390",
      "no_of_product": 5,
      "imageAdjustment": "fill",
    },
    {
      "type": "product_slider",
      "visibility": true,
      "block_title": "Shoes",
      "collection_id": "gid://shopify/Collection/456867971390",
      "no_of_product": 5,
      "imageAdjustment": "stretch",
      "updatedAt": "2023-12-26T06:28:42.618Z",
      "createdAt": "2023-12-26T06:28:42.618Z"
    },
    {
        "visbillity": true,
        "type": "collection_card_stack",
        "collection_ids": [
            {
                "collection_id": "gid://collectionId:1234",
                "image_src": "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
                "title": "Women"
            }
        ],
        "imageAdjustment": "stretch",
    },
    {
        "visbillity": true,
        "type": "collection_card_grid",
        "collection_ids": [
            {
                "collection_id": "gid://collectionId:1234",
                "image_src": "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
                "title": "Men"
            }
        ],
        "imageAdjustment": "stretch",
    },
    {
        "visbillity": true,
        "type": "collection_card_slider",
        "collection_ids": [
            {
                "collection_id": "gid://collectionId:1234",
                "image_src": "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
                "title": "Fashions"
            }
        ],
        "imageAdjustment": "stretch",
    },
    {
        "type": "social_channel",
        "visibility": true,
        "block_title": "Contact With Us",
        "items": [
        {
            "socialName": "Facebook",
            "url": "http://www.facebook.com",
            "itemVisibility": true
        },
        {
            "socialName": "Instagram",
            "url": "http://www.instagram.com",
            "itemVisibility": false
        }],
    },
    {
        "type": "text_paragraph",
        "visibility": true,
        "content": "Welcome to our online store, your one-stop shop for all your needs. We're dedicated to simplifying your online shopping experience, offering a wide range of products that enhance your everyday life. Shop with us today and discover the convenience of online shopping.",
    },
    {
        "type": "countdown",
        "visibility": true,
        "block_title": "Don't miss our biggest sales event",
        "text_colour": "#202223",
        "bg_colour": "#F6F7F7",
        "duration": {
        "day": 0,
        "hour": 0,
        "minute": 0
        },
        "start_time": {
        "date": "2023-12-26T11:30:00.000Z",
        "time": "2023-12-26T08:30:00.744Z",
        "timeZone": null
        },
    },
    {
        type: "banner_image_slider",
        visibility: true,
        items:[
            {
                image_url: "https://static-mobile.onecommerce.io/images/doorbuster/circle-image-slider-with-text/1683537784349.jpg",
                navigate: "None",
            },
            {
                image_url: "https://static-mobile.onecommerce.io/images/doorbuster/circle-image-slider-with-text/1683537784449.jpg",
                navigate: "None",
            },
            {
                image_url: "https://static-mobile.onecommerce.io/images/doorbuster/circle-image-slider-with-text/1683537784549.jpg",
                navigate: "None",
            },
            {
                image_url: "https://static-mobile.onecommerce.io/images/doorbuster/circle-image-slider-with-text/1683537784649.jpg",
                navigate: "None",
            },
            {
                image_url: "https://static-mobile.onecommerce.io/images/doorbuster/circle-image-slider-with-text/1683537784749.jpg",
                navigate: "None",
            }
        ]
    }
  ]

  https://onemobile-api.onecommerce.io/api/uploads/image
  const returnData = {
    "status": true,
    "message": "Ok",
    "data": {
        "link": "https:\/\/static-mobile.onecommerce.io\/images\/banner\/1703832997_bags.jpeg"
    }
}





  const adata = {
    datas: [
    {
            type: "banner_image",
            view: "horizontal",
            visibility: true,
            items: {
              image_url:
                "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
              navigate: "none",
              redirect_id: null,
            },
            imageAdjustment: "fill",
    },
    {
            type: "announcement_bar",
            visibility: true,
            text: "Up to 50% off New Arrivals",
            text_color: "#FFFFFF",
            bg_color: "#FE6100",
            animation: "Right To Left",
            updatedAt: "2023-12-28T05:55:23.988Z",
            createdAt: "2023-12-28T05:55:23.988Z",
    },
    {
        visbillity: true,
        type: "collection_card_slider",

        collection_ids: [
          {
            collection_id: "gid://collectionId:1234",
            image_src:
              "https://static-mobile.onecommerce.io/images/doorbuster/advance-image-slider/1683537784349.jpg",
            title: "Women",
          },
        ],
        imageAdjustment: "stretch",
    },
    {
            type: "product_slider",
            visibility: true,
            block_title: "Shoes",
            collection_id: "gid://shopify/Collection/456867971390",
            no_of_product: 5,
            imageAdjustment: "fill",
    },

      {
        _order: 5,
        id: "658d5232f2ad44380c7f9298",
      },
    ],
    updatedAt: "2023-12-28T10:47:14.073Z",
    createdAt: "2023-12-28T10:47:14.073Z",
  };



