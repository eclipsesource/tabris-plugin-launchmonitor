package com.eclipsesource.tabris.launchparameters

import com.eclipsesource.tabris.android.PropertyHandlerAdapter

private const val PROP_URL_LAUNCH_PARAMETERS = "urlLaunchParameters"

class LaunchParametersPropertyHandler : PropertyHandlerAdapter<LaunchParameters>() {

  override fun get(launchParameters: LaunchParameters, property: String) = when (property) {
    PROP_URL_LAUNCH_PARAMETERS -> launchParameters.urlLaunchParameters
    else -> null
  }

}
