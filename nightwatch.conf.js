require('babel-core/register');
const fs = require("fs");

module.exports = ((settings) => {
  const seleniumFileName =
  fs.readdirSync("node_modules/selenium-standalone/.selenium/selenium-server/");
  settings.selenium.server_path += seleniumFileName;
  return settings;
})(require("./nightwatch.json"));