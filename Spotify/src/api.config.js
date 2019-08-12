/** @format */

const endpoints = {
  search: "search",
  artiste: "artiste",
  album: "album",
  token: "token",
};

const configs = {
  local: {
    host: "http://localhost:3000/",
    endpoints
  }
};

const config = configs.local;

export default config;
