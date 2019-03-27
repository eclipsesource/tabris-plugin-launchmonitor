var URL_LAUNCH_EVENT = 'urlLaunch';

var urlLaunchParameters = null;

var LaunchMonitor = tabris.NativeObject.extend('com.eclipsesource.tabris.LaunchMonitor');

LaunchMonitor.prototype._trigger = function(name, event) {
  if (name === URL_LAUNCH_EVENT) {
    urlLaunchParameters = {queryParameters: event.queryParameters, url: event.url};
  }
  tabris.Widget.prototype._trigger.call(this, name, event);
};

tabris.NativeObject.defineProperties(LaunchMonitor.prototype, {
  urlLaunchParameters: {
    type: 'any',
    set: function(name) {
      console.warn(`Can not set read-only property "${name}"`)
    },
    get: function() {
      return urlLaunchParameters;
    }
  }
})

let launchMonitor = new LaunchMonitor();
launchMonitor._nativeListen(URL_LAUNCH_EVENT, true);
module.exports = launchMonitor;
