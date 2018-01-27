import React, { Component } from "react"
import { TextInput } from "react-native"
import styles from "./styles"

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ""}
  }

  render() {
    const placeholder = this.props.placeholder || ""

    return(
      <TextInput
        style={[styles.textInput, this.props.style]}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />
    )
  }
}