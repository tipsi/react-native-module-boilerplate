import { remote } from 'webdriverio'
import plugins from './plugins'
import addAndroidPermissions from './core/add-android-permissions'

class Helper {
  driver = null
  config = {}

  constructor() {
    plugins.extend(this)
  }

  init = async (config) => {
    if (this.driver) {
      return
    }

    this.config = config
    this.driver = remote({
      desiredCapabilities: {
        deviceName: config.deviceName,
        platformName: config.platformName,
        platformVersion: config.platformVersion,
        app: config.app,
        noReset: config.noReset,
        automationName: config.automationName,
        newCommandTimeout: 60000,
      },
      logLevel: 'debug',
      path: '/wd/hub',
      host: config.appiumHost,
      port: config.appiumPort,
      connectionRetryTimeout: 1200000, // 20 min
    })

    if (config.platformName === 'android') {
      setTimeout(async () => {
        await addAndroidPermissions(config.deviceName, 'com.example', ['CAMERA'])
      }, 3000)
    }

    await this.driver.init()
  }

  release = async () => {
    if (this.driver) {
      await this.driver.end()
      this.driver = null
      this.config = {}
    }
  }
}

// This is singleton
export default new Helper()
