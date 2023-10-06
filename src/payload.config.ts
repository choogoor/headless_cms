import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users'
import Posts from './collections/Posts';
import Media from './collections/Media';
import { payloadCloud } from '@payloadcms/plugin-cloud';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  cors: '*',
  collections: [
    Users, Posts, Media
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
