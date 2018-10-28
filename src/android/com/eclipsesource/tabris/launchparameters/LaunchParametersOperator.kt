package com.eclipsesource.tabris.launchparameters

import android.app.Activity
import com.eclipsesource.tabris.android.AbstractOperator
import com.eclipsesource.tabris.android.Properties
import com.eclipsesource.tabris.android.TabrisContext

private const val TYPE = "com.eclipsesource.tabris.LaunchParameters"

class LaunchParametersOperator(private val activity: Activity, private val tabrisContext: TabrisContext)
  : AbstractOperator<LaunchParameters>() {
  private val propertyHandler by lazy { LaunchParametersPropertyHandler() }
  override fun getType() = TYPE
  override fun getPropertyHandler(analytics: LaunchParameters) = propertyHandler
  override fun create(id: String, properties: Properties) = LaunchParameters(activity)
}