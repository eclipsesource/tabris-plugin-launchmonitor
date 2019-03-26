var URL_LAUNCH_EVENT = 'urlLaunch';
var EVENT_TYPES = [URL_LAUNCH_EVENT];

var urlLaunchParameters = null;

var LaunchMonitor = tabris.NativeObject.extend('com.eclipsesource.tabris.LaunchMonitor');

LaunchMonitor.prototype._listen = function(name, listening) {
  if (EVENT_TYPES.indexOf(name) > -1) {
    this._nativeListen(name, listening);
  } else {
    tabris.Widget.prototype._listen.call(this, name, listening);
  }
};

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

module.exports = new LaunchMonitor();
