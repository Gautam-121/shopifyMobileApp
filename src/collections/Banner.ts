import { CollectionConfig } from "payload/types";

const Banner: CollectionConfig = {
  slug: "banner",
  admin: {
    useAsTitle: "title",
  },
  access :{
    create : ()=>true
  },
  fields: [
    {
      name: "title",
      label: "Banner Title",
      type: "text",
    },
    {
      name: "action",
      label: "Banner Action",
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "External Url", value: "external_url" },
        { label: "Products", value: "products" },
      ],
      required: true,
    },
    {
      name: "url_id",
      label: "Url",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData.action === "external_url",
      },
      required: true,
    },
    {
      name: "product",
      label: "Products",
      type: "relationship",
      relationTo: "product",
      admin: {
        condition: (_, siblingData) => siblingData.action === "products",
      },
      required: true,
      hasMany: true,
    },
  ],
};

export default Banner;
