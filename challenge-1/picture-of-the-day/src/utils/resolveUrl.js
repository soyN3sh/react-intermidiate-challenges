import { REACT_APP_NASA_API_KEY } from "./constants";

const resolveUrl = (apiParams) => {
  const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}`;
  const params = Object.keys(apiParams);
  const urlWithParams = params.reduce((url, param) => {
    let newQueryParam = ``;
    newQueryParam = `&${param}=${encodeURI(apiParams[param])}`;
    return `${url}${newQueryParam}`;
  }, BASE_URL);
  return urlWithParams;
};

export { resolveUrl };
