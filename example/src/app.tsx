import {ui, app, TextView} from 'tabris';

declare var esutils: any;

ui.contentView.append(
  <textView markupEnabled
    centerX={0} centerY={0}
    font='24px'>
  </textView>
);

app.on({resume: () => {
  let params = (JSON.stringify(esutils.getUrlLaunchParameters(), null, 2) || 'undefined').replace(/\n/g, '<br/>');
  ui.find(TextView).first(TextView).text = `Launch parameters: <br/><b>${params}</b>`
}});
