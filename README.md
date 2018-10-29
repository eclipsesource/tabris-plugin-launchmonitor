# Tabris.js Launch Monitor Plugin

React on Tabris.js app launch and read launch parameters. Currently only launch by URL is supported.

Can be used in conjunction with the [`cordova-plugin-customurlscheme`](https://github.com/EddyVerbruggen/Custom-URL-scheme) plugin and [`app.launch(url)`](http://docs.tabris.com/latest/api/app.html#launchurl).

## Supported platforms

Android, iOS

## API documentation

### `eslaunchmonitor`

#### Events

##### `urlLaunch`

* The `urlLaunch` event is fired when the app has been launched through a URL.

###### Event Parameters:

* `target` : _eslaunchmonitor_
* `queryParameters`: _{[key: string]: any}_
  * Query parameters, parsed from the URL.

## Usage

### App 1:

**config.xml**
```xml
<plugin name="cordova-plugin-customurlscheme" spec="4.3.0">
  <variable name="URL_SCHEME" value="testapp" />
</plugin>
```

**JS**
```js
eslaunchmonitor.on({urlLaunch: ({queryParameters}) => {
  console.log(queryParameters); // {foo: 'bar'}
}})
```

### App 2:

**JS**
```js
import {app} from 'tabris';

app.launch('testapp://?foo=bar');
```
