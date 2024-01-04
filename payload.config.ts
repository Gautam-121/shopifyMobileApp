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
const dotenv = require("dotenv")
const { payloadCloud } = require('@payloadcms/plugin-cloud');
const { postgresAdapter } = require('@payloadcms/db-postgres');
// const  { mongooseAdapter } = require('@payloadcms/db-mongodb')
const { webpackBundler } = require('@payloadcms/bundler-webpack');
const { slateEditor } = require('@payloadcms/richtext-slate');

// Importing the actual modules for runtime
const Product = require('./src/collections/Product.js');
const User = require('./src/collections/User.js');
const BannerImage = require('./src/collections/BannerImage.js');
const Collection = require('./src/collections/Collection.js');
const Session = require("./src/collections/Session.js")
const ActiveStore = require("./src/collections/ActiveStore.js")
const SocialChannel = require("./src/collections/SocialChannels.js")
const TextParagraph = require("./src/collections/TextParagraph.js")
const EventTimer = require("./src/collections/EventTimer.js")
const AnnouncementBanner = require("./src/collections/AnnouncementBanner.js")
const OtherComponent = require("./src/collections/OthersComponent.js")
const BrandingByApp = require("./src/collections/BrandingTheme.js")
const HomePage = require("./src/collections/HomePage.js")
const Video = require("./src/collections/Video.js")

async function connectToDatabase() {
  try {
    const db = postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI,
      },
      sync: true
    });

    console.log('Database connection successful:', db);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectToDatabase();

module.exports =  buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: User.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  cors: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  collections: [BrandingByApp , Video , HomePage , AnnouncementBanner , OtherComponent , User , BannerImage  , EventTimer  , TextParagraph , SocialChannel  , Product , Collection , Session , ActiveStore ],
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
  // db: mongooseAdapter({
  //   // Mongoose-specific arguments go here.
  //   // URL is required.
  //   url: process.env.DATABASE_URI,
  // })
});

