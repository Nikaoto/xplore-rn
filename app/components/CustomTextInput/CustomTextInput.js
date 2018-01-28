import React, { Component } from "react"
import { TextInput } from "react-native"
import styles from "./styles"

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {text: this.props.value || ""}
  }

  onChangeText(text) {
    this.setState({text: text})
    if (this.props.onChangeText) {
      this.props.onChangeText(text)
    }
  }

  render() {
    return(
      <TextInput
        style={[styles.textInput, this.props.style]}
        onChangeText={(text) => this.onChangeText(text)}
        value={this.state.text}
        placeholder={this.props.placeholder || ""}
        keyboardType={this.props.keyboardType}
        autoCapitalize={this.props.autoCapitalize || "none"}
        underlineColorAndroid={"transparent"}
        autoCorrect={this.props.autoCorrect || false}
      />
    )
  }
}