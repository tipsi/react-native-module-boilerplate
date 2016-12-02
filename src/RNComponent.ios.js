import React, { Component, PropTypes } from 'react'
import { View, requireNativeComponent } from 'react-native'

export default class RNComponent extends Component {
  static propTypes = {
    ...View.propTypes,
    isRed: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <RNComponentView {...this.props} />
    )
  }
}

const RNComponentView = requireNativeComponent('RNComponent', RNComponent)
