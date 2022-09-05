import { createClient } from "microcms-js-sdk";

if (undefined === process.env.MICROCMS_SERVICE_DOMAIN) {
  throw 'MICROCMS_SERVICE_DOMAIN is undefined.';
}

if (undefined === process.env.MICROCMS_API_KEY) {
  throw 'MICROCMS_API_KEY is undefined.';
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})
