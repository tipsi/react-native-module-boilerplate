import adb from 'adbkit'

const client = adb.createClient()
export default async function addAndroidPermissions(deviceId, appId, permissions = []) {
  try {
    await Promise.all(
      permissions.map(permission => client.shell(
        deviceId,
        `pm grant ${appId} android.permission.${permission}`
      ))
    )
  } catch (error) {
    throw new Error(`Can not set android permissions: ${error}`)
  }
}
