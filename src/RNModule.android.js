import React, { Component } from 'react'
import {
  TouchableHighlight,
  Text,
  View,
  NativeModules,
} from 'react-native'

const { RNBoilerplateModule } = NativeModules

export default class RNBoilerplateModuleComponent extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            RNBoilerplateModule.findCars().then((cars) => {
              console.log(cars)
            })
          }}>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
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
