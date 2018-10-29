import { EventObject } from 'tabris';

interface LaunchEvents {
  urlLaunch?(event: MessageEvent): void;
}
interface MessageEvent extends EventObject<LaunchMonitor> {
  queryParameters: {[key: string]: any};
}

interface LaunchMonitor {
  on(type: string, listener: (event: any) => void, context?: object): this;
  on(listeners: LaunchEvents): this;
  off(type: string, listener: (event: any) => void, context?: object): this;
  off(listeners: LaunchEvents): this;
  once(type: string, listener: (event: any) => void, context?: object): this;
  once(listeners: LaunchEvents): this;
}
declare global {
  var eslaunchmonitor: LaunchMonitor;
}

export {};