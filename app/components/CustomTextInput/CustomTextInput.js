import React, { Component } from "react"
import { TextInput } from "react-native"
import styles from "./styles"

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ""}
  }

  render() {
    return(
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        underlineColorAndroid="transparent"

      />
    )
  }
}