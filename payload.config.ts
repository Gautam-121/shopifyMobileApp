const { buildConfig } = require('payload/config');
const path = require('path');
const { payloadCloud } = require('@payloadcms/plugin-cloud');
const { postgresAdapter } = require('@payloadcms/db-postgres');
const { webpackBundler } = require('@payloadcms/bundler-webpack');
const { slateEditor } = require('@payloadcms/richtext-slate');


module.exports = buildConfig({
  serverURL : process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  cors : process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(",") : [],
  csrf : process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(",") : [],
  collections: [],
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
})