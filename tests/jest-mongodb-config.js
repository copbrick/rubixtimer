export default {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: "jest",
    },
    binary: {
      version: "4.4.10", // Version of MongoDB
      skipMD5: true,
    },
    autoStart: false,
  },
};
