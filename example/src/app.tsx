import {contentView, TextView, Button} from 'tabris';

contentView.append(
  <$>
    <TextView markupEnabled
        centerX={0} centerY={0}
        font='16px'
        text='Awaiting launch by URL...' />
    <Button bottom={16} left={16} right={16} text='Log urlLaunchParameters'
        onSelect={() => console.log(JSON.stringify(eslaunchmonitor.urlLaunchParameters))} />
  </$>
);

eslaunchmonitor.on({urlLaunch: ({queryParameters, url}) => {
  contentView.find(TextView).only().text = `Url: <br/><b>${url}</b><br/><br/>Query parameters: <br/><b>${JSON.stringify(queryParameters)}</b>`
  console.log('"urlLaunch" parameters: ' + JSON.stringify({queryParameters, url}));
}});
