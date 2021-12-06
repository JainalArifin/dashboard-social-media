const CracoAlias = require("craco-alias");
const alias = require("./tools/alias").alias;

module.exports = {
  mode: "development",
  // Adding Server
  // devServer: {
  //   port: 8001,
  // },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // see in examples section
        // source: "tsconfig",
        // baseUrl: ".",
        // tsConfigPath: "./tsconfig.path.json",
        source: "jsconfig",
        baseUrl: ".",
        aliases: alias,
      },
    },
  ],
};
