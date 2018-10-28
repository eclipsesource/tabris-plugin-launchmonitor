var EVENT_TYPES = ['urlLaunch'];

var LaunchMonitor = tabris.NativeObject.extend('com.eclipsesource.tabris.LaunchMonitor');

LaunchMonitor.prototype._listen = function(name, listening) {
  if (EVENT_TYPES.indexOf(name) > -1) {
    this._nativeListen(name, listening);
  } else {
    tabris.Widget.prototype._listen.call(this, name, listening);
  }
};

module.exports = new LaunchMonitor();
