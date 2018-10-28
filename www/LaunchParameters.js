var LaunchParameters = tabris.NativeObject.extend('com.eclipsesource.tabris.LaunchParameters');

tabris.NativeObject.defineProperties(LaunchParameters.prototype, {
  urlLaunchParameters: {type: 'any', nocache: true}
});

let launchParameters;

module.exports = function getUrlLaunchParameters() {
  launchParameters = launchParameters || new LaunchParameters();
  return launchParameters.urlLaunchParameters;
};
