import * as dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

dotenv.config();

const endpoint = process.env.GRAPHQL_ENDPOINT;

export const client = new GraphQLClient(endpoint, {
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
