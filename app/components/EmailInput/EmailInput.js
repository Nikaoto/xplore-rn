import React, { Component } from "react"
import { Text, TextInput, View } from "react-native"

export default class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ""}
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={{}}
        />
      </View>
    )
  }
}