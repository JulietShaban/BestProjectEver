import { HTTP, HTTPS } from "@constants/api";

/**
 * Changes url http to https
 * @param {String} url - url we are going to change
 * @returns {String} - changed url
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

/**
 * Sends a request for Fetch
 * @param {String} url - url for a request
 * @returns {Promise} - promise with a result of a request
 */

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }
    return (await res).json();
  } catch (error) {
    console.log("Could not fetch.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(url.map(res => {
      return fetch(res).then(res => res.json())
  }));

  return res;
}