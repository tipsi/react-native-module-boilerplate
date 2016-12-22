import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Example2Tipsi extends Component {
  render() {
    return (
      <View>
        <Text>
          Something Wrong on Example2.tipsi!
        </Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={require('../img/white_logo.jpg')}
        />
      </View>
    )
  }
}
