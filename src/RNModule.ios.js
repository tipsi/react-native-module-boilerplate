import React, { Component } from 'react'
import {
  TouchableHighlight,
  Text,
  View,
  NativeModules,
} from 'react-native'

const { RNModuleManager } = NativeModules

export default class RNModuleManagerComponent extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            RNModuleManager.findCars().then((cars) => {
              console.log(cars)
            })
          }}>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = {
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}
