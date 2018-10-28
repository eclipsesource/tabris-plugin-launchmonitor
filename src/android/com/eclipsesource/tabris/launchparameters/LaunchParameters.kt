package com.eclipsesource.tabris.launchparameters

import android.app.Activity
import android.net.Uri
import com.eclipsesource.tabris.android.TabrisActivity
import java.net.URLDecoder

class LaunchParameters(activity: Activity) {

  private val launchUri = (activity as TabrisActivity).intentOfCreate.getStringExtra("launchUri")
  val urlLaunchParameters = parseQuery(launchUri)

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
