package com.eclipsesource.tabris.launchmonitor

import com.eclipsesource.tabris.android.*
import com.eclipsesource.tabris.android.ObjectHandler
import com.eclipsesource.v8.V8Object

class LaunchMonitorHandler(private val scope: ActivityScope)
  : ObjectHandler<LaunchMonitor> {
  override val type = "com.eclipsesource.tabris.LaunchMonitor"
  override fun create(id: String, properties: V8Object) = LaunchMonitor(scope)
}
