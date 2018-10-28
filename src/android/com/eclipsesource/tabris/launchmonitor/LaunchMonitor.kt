package com.eclipsesource.tabris.launchmonitor

import android.app.Activity
import android.net.Uri
import android.os.Handler;
import com.eclipsesource.tabris.android.TabrisActivity
import com.eclipsesource.tabris.android.TabrisContext
import java.net.URLDecoder
import java.util.*

private const val EVENT_URL_LAUNCH = "urlLaunch"
private const val PROP_QUERY_PARAMETERS = "queryParameters"

class LaunchMonitor(activity: Activity, tabrisContext: TabrisContext) {

  private val launchUri = (activity as TabrisActivity).intentOfCreate.getStringExtra("launchUri")
  private val queryParameters = parseQuery(launchUri)

  init {
    Handler().post {
      if (queryParameters != null) {
        tabrisContext.objectRegistry.getRemoteObjectForObject(this).notify(EVENT_URL_LAUNCH, PROP_QUERY_PARAMETERS, queryParameters)
      }
    }
  }

  private fun parseQuery(url:String?):Map<String, String>? {
    if (url == null) return null
    val launchUri = Uri.parse(url)
    val result = HashMap<String, String>()
    val pairs = launchUri.query.split("&").dropLastWhile { it.isEmpty() }.toTypedArray()
    pairs.forEach {
      val idx = it.indexOf("=")
      val key = URLDecoder.decode(it.substring(0, idx), "UTF-8")
      val value = URLDecoder.decode(it.substring(idx + 1), "UTF-8")
      result[key] = value
    }
    return result
  }

}
