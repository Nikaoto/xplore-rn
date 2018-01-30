import React, { Component } from "react"
import { Platform, TouchableNativeFeedback, TouchableOpacity, Text, View} from "react-native"
import styles from "./styles"

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onPress = this.onPress.bind(this)
  }

  componentWillMount() {
    // Configure style
    if (Platform.OS === "ios") {
      this.setState({ finalStyle: [styles.touchableOpacity, this.props.style]})
    } else {
      this.setState({ finalStyle: [styles.touchableNativeFeedback, this.props.style]})
    }
  }

  onPress() {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render() {
    const finalStyle = this.state.finalStyle
    if (Platform.OS === "ios") {
      const activeOpacity = this.props.activeOpacity || 0.2

      return (
        <TouchableOpacity style={finalStyle} onPress={this.onPress} activeOpacity={activeOpacity}>
          {this.props.children}
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableNativeFeedback onPress={this.onPress}>
          <View style={finalStyle}>
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
      )
    }
  }
}