import {ui, TextView} from 'tabris';

ui.contentView.append(
  <widgetCollection>
    <textView markupEnabled
      centerX={0} centerY={0}
      font='24px'
      text='Awaiting launch by URL...' />
    <button bottom={16} left={16} right={16} text='Log urlLaunchParameters'
      onSelect={() => console.log(JSON.stringify(eslaunchmonitor.urlLaunchParameters))} />
  </widgetCollection>
);

eslaunchmonitor.on({urlLaunch: ({queryParameters}) => {
  let params = (JSON.stringify(queryParameters, null, 2) || 'undefined').replace(/\n/g, '<br/>');
  ui.find(TextView).first(TextView).text = `Launch parameters: <br/><b>${params}</b>`
  console.log('"urlLaunch" queryParameters: ' + JSON.stringify(queryParameters));
}});
