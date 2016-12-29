import helper from 'tipsi-appium-helper'

helper.elements = function() {
  const { idFromXPath, idFromAccessId } = this

  const selectors = {
    title: {
      ios: idFromXPath(`
        /XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/
        XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
        XCUIElementTypeOther/XCUIElementTypeStaticText[1]
      `),
      android: idFromAccessId('title'),
    },
  }

  return Object.keys(selectors).reduce((memo, item) => {
    const currentImplementation = selectors[item][this.config.platformName]
    if (currentImplementation) {
      /* eslint no-param-reassign: 0 */
      memo[item] = currentImplementation
    }

    return memo
  }, {})
}.bind(helper)

export default helper
