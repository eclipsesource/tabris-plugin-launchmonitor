package com.eclipsesource.tabris.launchmonitor

import android.content.Intent
import com.eclipsesource.tabris.android.*
import android.net.Uri
import java.net.URLDecoder
import java.util.*

private const val EVENT_URL_LAUNCH = "urlLaunch"

class LaunchMonitor(scope: ActivityScope) {

  init {
    scope.post {
      if (scope.activity.intent.dataString != null) {
        scope.handler.postDelayed({
          notifyUrlLaunch(scope, scope.activity.intent)
        }, 0)
      }
    }
    scope.events.addActivityStateListener(object : Events.ActivityStateListener {
      override fun activityStateChanged(state: ActivityState, intent: Intent?) {
        when (state) {
          ActivityState.NEW_INTENT -> notifyUrlLaunch(scope, intent)
          else -> {
            // No action needed for other states
          }
        }
      }
    })
  }

  private fun notifyUrlLaunch(scope: ActivityScope, intent: Intent?) {
    if (intent == null || intent.dataString == null) {
      return
    }
    val launchUri = intent.dataString
    val queryParameters = parseQuery(launchUri)
    val urlLaunchParameters = mapOf("queryParameters" to queryParameters, "url" to launchUri);
    scope.objectRegistry.findRemoteObject(this)?.notify(EVENT_URL_LAUNCH, urlLaunchParameters)
  }

  private fun parseQuery(url: String?): Map<String, String>? {
    if (url == null) return HashMap<String, String>()
    val launchUri = Uri.parse(url)
    if (launchUri.query == null) return HashMap<String, String>()
    val result = HashMap<String, String>()
    launchUri?.query?.split("&")?.dropLastWhile { it.isEmpty() }?.toTypedArray()?.let { pairs ->
      pairs.forEach {
        val idx = it.indexOf("=")
        val key = URLDecoder.decode(it.substring(0, idx), "UTF-8")
        val value = URLDecoder.decode(it.substring(idx + 1), "UTF-8")
        result[key] = value
      }
    }
    return result
  }

}
