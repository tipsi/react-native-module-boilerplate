import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class ExampleTipsi extends Component {
  render() {
    return (
      <View>
        <Text accessible accessibilityLabel="exampleText1">
          Babel Plugin Works on Example 1!
        </Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={require('../../img/black_logo.png')}
          accessible
          accessibilityLabel="localImage1"
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          accessible
          accessibilityLabel="remoteImage1"
        />
      </View>
    )
  }
}
