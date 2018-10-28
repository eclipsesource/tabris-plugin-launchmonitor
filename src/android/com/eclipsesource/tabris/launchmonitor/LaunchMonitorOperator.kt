package com.eclipsesource.tabris.launchmonitor

import android.app.Activity
import com.eclipsesource.tabris.android.AbstractOperator
import com.eclipsesource.tabris.android.Properties
import com.eclipsesource.tabris.android.TabrisContext

private const val TYPE = "com.eclipsesource.tabris.LaunchMonitor"

class LaunchMonitorOperator(private val activity: Activity, private val tabrisContext: TabrisContext)
  : AbstractOperator<LaunchMonitor>() {
  override fun getType() = TYPE
  override fun create(id: String, properties: Properties) = LaunchMonitor(activity, tabrisContext)
}