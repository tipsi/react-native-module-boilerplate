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
    exampleText1: {
      ios: idFromXPath(`
        /XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/
        XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
        XCUIElementTypeOther[4]/XCUIElementTypeStaticText
      `),
      android: idFromAccessId('exampleText1'),
    },
    exampleText2: {
      ios: idFromXPath(`
        /XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/
        XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
        XCUIElementTypeOther[5]/XCUIElementTypeStaticText
      `),
      android: idFromAccessId('exampleText2'),
    },
    localImage1: {
      ios: idFromXPath(`
        /XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/
        XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
        XCUIElementTypeOther[4]/XCUIElementTypeImage
      `),
      android: idFromAccessId('localImage1'),
    },
    remoteImage1: {
      ios: idFromAccessId('remoteImage1'),
      android: idFromAccessId('remoteImage1'),
    },
    localImage2: {
      ios: idFromXPath(`
        /XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/
        XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/
        XCUIElementTypeOther[5]/XCUIElementTypeImage
      `),
      android: idFromAccessId('localImage2'),
    },
    remoteImage2: {
      ios: idFromAccessId('remoteImage2'),
      android: idFromAccessId('remoteImage2'),
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
