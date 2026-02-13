import { GraphQLClient } from 'graphql-request';

const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

// API URL must include the version (e.g., 2024-01)
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    'Content-Type': 'application/json',
  },
});

export async function shopifyFetch(query: string, variables = {}) {
  return graphQLClient.request(query, variables);
}