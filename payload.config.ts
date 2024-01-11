// import { buildConfig } from 'payload/config';
// import path from 'path';
// import { payloadCloud } from '@payloadcms/plugin-cloud';
// import { postgresAdapter } from '@payloadcms/db-postgres';
// import { webpackBundler } from '@payloadcms/bundler-webpack';
// import { slateEditor } from '@payloadcms/richtext-slate';


// // Importing the actual modules for runtime
// import Product from './server/collections/Product.js';
// import User from './server/collections/User.js';
// import Banner from './server/collections/Banner.js';
// import Collection from './server/collections/Collection.js';

const { buildConfig } = require('payload/config');
const path = require('path');
const { payloadCloud } = require('@payloadcms/plugin-cloud');
const { postgresAdapter } = require('@payloadcms/db-postgres');
const { webpackBundler } = require('@payloadcms/bundler-webpack');
const { slateEditor } = require('@payloadcms/richtext-slate');

// Importing the actual modules for runtime
const ProductGrid = require('./server/collections/ProductGrid.js');
const User = require('./server/collections/User.js');
const BannerImage = require('./server/collections/BannerImage.js');
const CollectionSlider = require('./server/collections/CollectionSlider.js');
const Session = require("./server/collections/Session.js")
const ActiveStore = require("./server/collections/ActiveStore.js")
const Media = require("./server/collections/Media.js")


module.exports =  buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: User.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  cors: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  collections: [ProductGrid, BannerImage, CollectionSlider, Session , User ,ActiveStore ,Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});

