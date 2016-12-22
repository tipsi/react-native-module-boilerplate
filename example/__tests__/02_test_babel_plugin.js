import test from 'tape-async'
import helper from './utils/helper'

const { driver, elements } = helper

test('Test if Babel plugin works on React-Native', async (t) => {
  const screen = elements()

  try {
    await driver.waitForVisible(screen.exampleText1, 60000)
    const exampleText1 = await driver.getText(screen.exampleText1)
    t.equal(exampleText1, 'Babel Plugin Works on Example 1!', 'Title 1 is correct')

    try {
      await driver.waitForVisible(screen.localImage1, 5000)
      t.pass('Black react logo (local) is visible')
    } catch (e) {
      t.fail('Black react logo (local) isn\'t visible')
    }

    try {
      await driver.waitForVisible(screen.remoteImage1, 5000)
      t.pass('Black react logo (remote) is visible')
    } catch (e) {
      t.fail('Black react logo (remote) isn\'t visible')
    }

    // Example 2
    await driver.waitForVisible(screen.exampleText2, 5000)
    const exampleText2 = await driver.getText(screen.exampleText2)
    t.equal(exampleText2, 'Babel Plugin Works on Example 2!', 'Title 2 is correct')

    try {
      await driver.waitForVisible(screen.localImage2, 5000)
      t.pass('Black react logo 2 (local) is visible')
    } catch (e) {
      t.fail('Black react logo 2 (local) isn\'t visible')
    }

    try {
      await driver.waitForVisible(screen.remoteImage2, 5000)
      t.pass('Black react logo 2 (remote) is visible')
    } catch (e) {
      t.fail('Black react logo 2 (remote) isn\'t visible')
    }
  } catch (error) {
    await helper.screenshot()
    await helper.source()

    throw error
  }
})
