import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { RNModule, RNComponent } from 'react-native-module-boilerplate'
import Example from './src/components/Example'
import Example2 from './src/components/Example2'

export default class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <RNModule />
        <RNComponent style={{ width: 50, height: 50 }} isRed={true} />
        <RNComponent style={{ width: 50, height: 50 }} isRed={false} />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Example />
        <Example2 />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

AppRegistry.registerComponent('example', () => example)
