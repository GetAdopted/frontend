import { defineNuxtPlugin } from '#app';

import axios from 'axios';

/**
 * @property {number} provide.statuses.HTTP_OK - HTTP status code 200 (Ok).
 * @property {number} provide.statuses.HTTP_CREATED - HTTP status code 201 (Created).
 * @property {number} provide.statuses.HTTP_NO_CONTENT - HTTP status code 204 (No Content).
 * @property {number} provide.statuses.HTTP_UNAUTHORIZED - HTTP status code 401 (Unauthorized).
 * @property {number} provide.statuses.HTTP_NOT_FOUND - HTTP status code 404 (Not Found).
 * @property {number} provide.statuses.HTTP_UNPROCESSABLE_ENTITY - HTTP status code 422 (Unprocessable Entity).
 */
const statuses = {
  HTTP_OK: 200,
  HTTP_CREATED: 201,
  HTTP_NO_CONTENT: 204,
  HTTP_BAD_REQUEST: 400,
  HTTP_UNAUTHORIZED: 401,
  HTTP_NOT_FOUND: 404,
  HTTP_UNPROCESSABLE_ENTITY: 422,
};

/**
 * Nuxt.js plugin to provide Axios instance with authentication headers.
 *
 * @param {Object} context - Nuxt.js context object.
 * @param {Object} context.$config - Nuxt.js configuration object.
 * @param {Object} context.$storage - Nuxt.js storage object.
 * @returns {Object} Nuxt.js plugin configuration object.
 */
export default defineNuxtPlugin(({ $config, $storage }) => {
  //const JWTAuthHeader = !process.server && $storage.getToken() ? { Authorization: `Bearer ${$storage.getToken()}` } : {};

  return {
    /**
     * Provide configuration options to Nuxt.js application.
     *
     * @property {Object} provide - Object containing Axios instance and predefined HTTP status codes.
     * @property {Object} provide.axios - Axios instance with configured baseURL, timeout, and headers.
     * @property {string} provide.axios.baseURL - Base URL for API requests.
     * @property {number} provide.axios.timeout - Request timeout duration.
     * @property {Object} provide.axios.headers - HTTP request headers.
     * @property {string} provide.axios.headers.Content-Type - Content type header.
     * @property {string} provide.axios.headers.Accept - Accept header.
     * @property {Object} provide.axios.headers.Authorization - Authorization header with JWT token.
     * @property {Object} provide.statuses - Predefined HTTP status codes.
     */
    provide: {
      axios: axios.create({
        baseURL: $config.public.APP_URL,
        timeout: $config.public.APP_TIMEOUT,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          //...JWTAuthHeader,
        },
      }),
      statuses,
    },
  };
});