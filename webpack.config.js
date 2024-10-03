const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert/"),
    },
  },
  // other configurations...
};