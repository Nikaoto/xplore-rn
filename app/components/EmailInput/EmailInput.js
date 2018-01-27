import React, { Component } from "react"
import CustomTextInput from "../CustomTextInput"

export default class EmailInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CustomTextInput placeholder={"Email"} keyboardType={"email-address"} />
    )
  }
}