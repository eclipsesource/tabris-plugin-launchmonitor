import {ui, TextView} from 'tabris';

ui.contentView.append(
  <widgetCollection>
    <textView markupEnabled
      centerX={0} centerY={0}
      font='16px'
      text='Awaiting launch by URL...' />
    <button bottom={16} left={16} right={16} text='Log urlLaunchParameters'
      onSelect={() => console.log(JSON.stringify(eslaunchmonitor.urlLaunchParameters))} />
  </widgetCollection>
);

eslaunchmonitor.on({urlLaunch: ({queryParameters, url}) => {
  ui.find(TextView).first(TextView).text = `Url: <br/><b>${url}</b><br/><br/>Query parameters: <br/><b>${JSON.stringify(queryParameters)}</b>`
  console.log('"urlLaunch" parameters: ' + JSON.stringify({queryParameters, url}));
}});
