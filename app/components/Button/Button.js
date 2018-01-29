import React, { Component } from "react"
import { Platform, TouchableNativeFeedback, TouchableOpacity, Text, View} from "react-native"
import styles from "./styles"

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render() {
    if (Platform.os === "ios") {
      const activeOpacity = this.props.activeOpacity || 0.2
      const style = [this.props.style, styles.touchableOpacity]

      return (
        <TouchableOpacity onPress={this.onPress} activeOpacity={activeOpacity}>
          <View style={style}>
            {this.props.children}
          </View>
        </TouchableOpacity>
      )
    } else {
      const style = [this.props.style, styles.touchableNativeFeedback]

      return (
        <TouchableNativeFeedback onPress={this.onPress}>
          <View style={style}>
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
      )
    }
  }
}