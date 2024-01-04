const { CollectionConfig } = require("payload/types");

const BrandingThemeByApp = {
    slug: "brandingTheme",
    fields: [
        {
            name: "shop_id",
            label: "Shop ID",
            type: "text",
            required: true,
            unique: true
        },
        {
            name: "app_name",
            type: "text",
        },
        {
            name: "app_icon_url",
            type: "text",
            defaultValue: undefined
        },
        {
            name: "launch_screen_image",
            type: "text",
            defaultValue: undefined
        },
        {
            name: "launch_screen_bg_colour",
            type: "text",
            defaultValue: "#FFFFFF"
        },
        {
            name: "hf_bg_color",
            type: "text",
            defaultValue: "#FFFFFF"
        },
        {
            name: "hf_icon_color",
            type: "text",
            defaultValue: "#202223"
        },
        {
            name: "pb_bg_color",
            type: "text",
            defaultValue: "#323470"
        },
        {
            name: "pb_text_color",
            type: "text",
            defaultValue: "#FFFFFF"
        },
        
    ]
};

module.exports = BrandingThemeByApp
