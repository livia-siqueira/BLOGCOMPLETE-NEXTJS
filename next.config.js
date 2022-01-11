const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
        return config;
      },
      env: {
        mongodb_username: "livia",
        mongodb_password: "Livia123",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
    env: {
      mongodb_username: "livia",
      mongodb_password: "Livia123",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
