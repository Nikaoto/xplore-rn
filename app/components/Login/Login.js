import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import CustomTextInput from "../CustomTextInput/CustomTextInput"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onPress() {
    // :^)
  }

  render() {
    return (
      <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontWeight: "bold", marginBottom: 20}}>Login Screen yo :^)</Text>
        <CustomTextInput/>
        <Button title="PRESS ME NOW BOI" onPress={this.onPress}/>
      </View>
    )
  }
}