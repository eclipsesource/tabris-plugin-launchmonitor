import { EventObject } from 'tabris';

interface LaunchEvents {
  urlLaunch?(event: MessageEvent): void;
}
interface UrlLaunchParameters {
  queryParameters: {[key: string]: any};
  url: string;
}
interface MessageEvent extends EventObject<LaunchMonitor> {}
interface MessageEvent extends UrlLaunchParameters {}

interface LaunchMonitor {
  on(type: string, listener: (event: any) => void, context?: object): this;
  on(listeners: LaunchEvents): this;
  off(type: string, listener: (event: any) => void, context?: object): this;
  off(listeners: LaunchEvents): this;
  once(type: string, listener: (event: any) => void, context?: object): this;
  once(listeners: LaunchEvents): this;
  urlLaunchParameters: UrlLaunchParameters
}
declare global {
  var eslaunchmonitor: LaunchMonitor;
}

export {};