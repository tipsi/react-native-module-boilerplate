import React, { Component } from 'react'
import {
  Button,
  View,
  NativeModules,
} from 'react-native'

const { RNModuleManager } = NativeModules

export default class RNModuleManagerComponent extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => RNModuleManager.findCars()}>
          To get started, edit RNModule.ios.js
        </Button>
      </View>
    )
  }
}
