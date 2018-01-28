import React, { Component } from "react"
import CustomTextInput from "../CustomTextInput"

export default class EmailInput extends Component {
  constructor(props) {
    super(props)
  }

  onChangeText(text) {
    if (this.props.onChangeText) {
      this.props.onChangeText(text)
    }
  }

  render() {
    return (
      <CustomTextInput
        style={this.props.style}
        placeholder={"Email"}
        autoCapitalize={"none"}
        keyboardType={"email-address"}
        onChangeText={(text) => this.onChangeText(text)}
        autoCorrect={false}
      />
    )
  }
}