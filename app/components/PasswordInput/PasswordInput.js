import React, {Component} from "react"
import CustomTextInput from "../CustomTextInput"

/*
  Props
  -----
  style: StyleSheet
  onChangeText: (text) => {}
 */
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
        onChangeText={(text) => this.onChangeText(text)}
        placeholder={"Password"}
        autoCapitalize={"none"}
        keyboardType={"default"}
        secureTextEntry={true}
        autoCorrect={false}
      />
    )
  }
}