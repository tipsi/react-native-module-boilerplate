export default function elements() {
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
      memo[item] = selectors[item][this.config.platformName]
    }

    return memo
  }, {})
}
