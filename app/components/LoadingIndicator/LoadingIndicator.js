import React, { Component } from "react"
import { Platform, View, ActivityIndicator } from "react-native"

export default class LoadingIndicator extends Component {
  constructor(props){
    super(props)
    this.state = {
      size: this.props.size || "small",
      center: this.props.center || false,
      color: this.props.color || "#00ff00"
    }
  }

  componentDidMount() {
    // Makes large spinner larger on android
    if (Platform.OS === "android") {
      if (this.state.size === "large") {
        this.setState({size: 65})
      }
    }
  }

  render() {
    const size = this.state.size
    const color = this.state.color
    const center = this.state.center

    if (center === true) {
      return(
        <View style={{flex: 1, justifyContent: "center"}}>
          <ActivityIndicator size={size} color="#00ff00" />
        </View>
      )
    } else {
      return <ActivityIndicator size={size} color="#00ff00" />
    }
  }
}