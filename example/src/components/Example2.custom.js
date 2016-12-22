import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Example2Custom extends Component {
  render() {
    return (
      <View>
        <Text accessible accessibilityLabel="exampleText2">
          Babel Plugin Works on Example 2!
        </Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={require('../../img/black_logo.png')}
          accessible
          accessibilityLabel="localImage2"
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          accessible
          accessibilityLabel="remoteImage2"
        />
      </View>
    )
  }
}
