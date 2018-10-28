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


    var getProjectFile = function(platform, relPath) {
      return path.join(projectRoot, "platforms", platform, cfg.name(), relPath);
    };

    var replace = function(path, to_replace, replace_with) {
      var data = fs.readFileSync(path, "utf8");
      var result = data.replace(to_replace, replace_with);
      fs.writeFileSync(path, result, "utf8");
    };

    var updateIOSAppDelegate = function() {
      var appDelegate = getProjectFile("ios", "Classes/AppDelegate.m");
      var importReplace = "/* HOOK: import classes for registration */";
      replace(appDelegate, importReplace, "#import \"ESLaunchParameters.h\"\n" + importReplace);
      replace(appDelegate, "@end", "- (BOOL) application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {" + "\n\t" + "[ESLaunchParameters setURL:url];" + "\n\t" + "return YES;\n}" + "\n\n" + "@end")
    };

    updateIOSAppDelegate();

  };

}