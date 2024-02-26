import defaultSettings from '@/settings'
/*
ID: log-util
Name:vue端末でログレベルを制御して、出力する
Author: zhaojiuyu
Create_at: 20191012
Update_at: -
*/
/*
使い方：
※設定：
env ファイルにの[VUE_APP_LOGVEL]の内容より、設定する
    ※内容を変更後に、再起動が必要でした
----ENV の設定---------   -- LEVEL--
VUE_APP_LOGVEL = 'debug' --> debug
VUE_APP_LOGVEL = 'info'  --> info
VUE_APP_LOGVEL = 'warn'  --> warn
VUE_APP_LOGVEL = 'error' --> error
※import方：
import LogUtil from '@/utils/log-util'
※利用方(example.)
      LogUtil.debug('start --- S0200 ---',params)
      LogUtil.info('start --- S0200 ---')
      LogUtil.warn('start --- S0200 ---')
      LogUtil.error('start  --- S0200 ---',params)
※出力結果(画面のコンソール)
      LogUtil.debug('start --- S0200 ---',params)
      LogUtil.info('start --- S0200 ---')
      LogUtil.warn('start --- S0200 ---')
      LogUtil.error('start  --- S0200 ---',params)
*/
// LOGLEVEL
const DEBUG = 0
const INFO = 1
const WARN = 2
const ERROR = 3
const LOGLEVEL_DEBUG = 'debug'
const LOGLEVEL_INFO = 'info'
const LOGLEVEL_WARN = 'warn'
const LOGLEVEL_ERROR = 'error'
// LOGTITLE
const LOG_TITLE_DEBUG = '【DEBUG】'
const LOG_TITLE_INFO = '【INFO】'
const LOG_TITLE_WARN = '【WARN】'
const LOG_TITLE_ERROR = '【ERROR】'

const LogUtil = {
  debug: (info, params = '') => {
    LogLevel(LOG_TITLE_DEBUG, info, params, DEBUG)
  },
  info: (info, params = '') => {
    LogLevel(LOG_TITLE_INFO, info, params, INFO)
  },
  warn: (info, params = '') => {
    LogLevel(LOG_TITLE_WARN, info, params, WARN)
  },
  error: (info, params = '') => {
    LogLevel(LOG_TITLE_ERROR, info, params, ERROR)
  }
}

const LogLevel = function(logtitle, info, params, loglevel) {
  // 環境変数のLOGLEVELを取得する
  if (loglevel >= getEnvLogLevel()) {
    if (params === '') {
      console.log(logtitle + info)
    } else {
      console.log(logtitle + info + ' ' + JSON.stringify(params))
    }
  }
}

const getEnvLogLevel = function() {
  if (defaultSettings.envLogLevel === LOGLEVEL_ERROR) {
    return ERROR
  } else if (defaultSettings.envLogLevel === LOGLEVEL_WARN) {
    return WARN
  } else if (defaultSettings.envLogLevel === LOGLEVEL_INFO) {
    return INFO
  } else {
    return DEBUG
  }
}

export default LogUtil
