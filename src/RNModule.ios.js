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
        <Button
          title="To get started, edit RNModule.android.js"
          onPress={() => RNModuleManager.findCars()}
        />
      </View>
    )
  }
}
