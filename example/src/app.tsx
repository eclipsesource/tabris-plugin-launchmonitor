import {ui, TextView} from 'tabris';

declare var esutils: any;

ui.contentView.append(
  <textView markupEnabled
    centerX={0} centerY={0}
    font='24px'
    text='Awaiting launch by URL...'>
  </textView>
);

esutils.LaunchMonitor.on({urlLaunch: ({queryParameters}: {queryParameters: any}) => {
  let params = (JSON.stringify(queryParameters, null, 2) || 'undefined').replace(/\n/g, '<br/>');
  ui.find(TextView).first(TextView).text = `Launch parameters: <br/><b>${params}</b>`
  console.log('"urlLaunch" queryParameters: ' + JSON.stringify(queryParameters));
}});
