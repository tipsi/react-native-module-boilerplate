import fs from 'fs'
import adb from 'adbkit'

const client = adb.createClient()

export default async function pushFileToDevice(fromFilePath, toFilePath) {
  const data = fs.readFileSync(fromFilePath)
  await this.driver.pushFile(toFilePath, data.toString('base64'))

  // Certain versions of android do not fire proper tasks for updating
  // the state of file system. We trigger an explicit intent for
  // updating the status of the file system.
  // See: http://stackoverflow.com/a/38534843/3170513
  await client.shell(
      this.config.deviceName,
      'am broadcast -a android.intent.action.MEDIA_MOUNTED -d file:///'
  )
}
