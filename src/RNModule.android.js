import React, { Component } from 'react'
import {
  Button,
  View,
  NativeModules,
} from 'react-native'

const { RNBoilerplateModule } = NativeModules

export default class RNBoilerplateModuleComponent extends Component {
  render() {
    return (
      <View>
        <Button
          title="To get started, edit RNModule.android.js"
          onPress={() => RNBoilerplateModule.findCars()}
        />
      </View>
    )
  }
}
