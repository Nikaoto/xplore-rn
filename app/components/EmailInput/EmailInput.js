import React, {Component} from "react"
import CustomTextInput from "../CustomTextInput"

/*
  Props
  -----
  style: StyleSheet
  onChangeText: (text) => {}
  value: String
 */

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
        onChangeText={(text) => this.onChangeText(text)}
        value={this.props.value || ""}
        placeholder={"Email"}
        autoCapitalize={"none"}
        keyboardType={"email-address"}
        autoCorrect={false}
      />
    )
  }
}