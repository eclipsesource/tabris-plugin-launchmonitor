#!/usr/bin/env node

var fs = require("fs"),
    path = require("path");

var rootdir = process.argv[2];
if (rootdir) {

  module.exports = function(context) {

    var cordova_util = context.requireCordovaModule("cordova-lib/src/cordova/util"),
        ConfigParser = context.requireCordovaModule("cordova-common").ConfigParser,
        projectRoot = cordova_util.isCordova(),
        xml = cordova_util.projectConfig(projectRoot),
        cfg = new ConfigParser(xml);


    var getMainActivityPath = function() {
      return path.join(projectRoot, "platforms", "android", "src", cfg.packageName().replace(/\./g, path.sep), "MainActivity.java");
    };

    var replace = function(path, to_replace, replace_with) {
      var data = fs.readFileSync(path, "utf8");
      var result = data.replace(to_replace, replace_with);
      fs.writeFileSync(path, result, "utf8");
    };

    var updateMainActivity = function() {
      var endOfStartTabrisActivityMethod = "startActivityForResult( intent, 0 );";
      replace(getMainActivityPath(), endOfStartTabrisActivityMethod, "if (getIntent().getData() != null) {\n" +
      "      intent.putExtra( \"launchUri\", getIntent().getData().toString() );\n" +
      "    }\n" +
      "    " + endOfStartTabrisActivityMethod);
    };

    updateMainActivity();
  };

}