import React, { Component } from "react"
import { AppRegistry } from "react-native"
import { Root } from "./config/routes"

class XploreApp extends Component {
  render() {
    return <Root/>
  }
}

export default XploreApp
AppRegistry.registerComponent("XploreApp", () => XploreApp)
