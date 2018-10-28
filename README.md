# Tabris.js Launch Parameters Plugin

Reads parameters of a URL used to launch a Tabris.js app.

Can be used in conjunction with the [`cordova-plugin-customurlscheme`](https://github.com/EddyVerbruggen/Custom-URL-scheme) plugin and [`app.launch(url)`](http://docs.tabris.com/latest/api/app.html#launchurl).

# Supported platforms

Android, iOS

# Usage

## App 1:

**JS**
```js
import {app} from 'tabris';

app.launch('testapp://?foo=bar');
```

## App 2:

**config.xml**
```xml
<plugin name="cordova-plugin-customurlscheme" spec="4.3.0">
  <variable name="URL_SCHEME" value="testapp" />
</plugin>
```

**JS**
```js
esutils.getUrlLaunchParameters(); // {foo: 'bar'}
```
