import React, { Component } from "react"
import CustomTextInput from "../CustomTextInput"

export default class PasswordInput extends Component {
  constructor(props) {
    super(props)
  }

  onChangeText(text) {
    if (this.props.onChangeText) {
      this.props.onChangeText(text)
    }
  }

  render() {
    return(
      <CustomTextInput
        style={this.props.style}
        placeholder={"Password"}
        autoCapitalize={"none"}
        keyboardType={"default"}
        secureTextEntry={true}
        onChangeText={(text) => this.onChangeText(text)}
        autoCorrect={false}
      />
    )
  }
}