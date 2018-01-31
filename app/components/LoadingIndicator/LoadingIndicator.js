import React, {Component} from "react"
import {ActivityIndicator, Platform, View} from "react-native"

/*
  Props
  -----
  size: Enum(small, large)
  center: Boolean
  color: Color
*/

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
    // If size is a number on ios, specify correct size in string
    if (Platform.OS === "ios" && !isNaN(this.state.size)) {
      if (this.state.size >= 30) {
        this.setState({ size: "large" })
      } else {
        this.setState({ size: "small" })
      }
      return
    }

    // Makes large spinner larger on android
    if (Platform.OS === "android" && this.state.size === "large") {
      this.setState({size: 65})
    }
  }

  render() {
    const size = this.state.size
    const color = this.state.color
    const center = this.state.center

    if (center === true) {
      return(
        <View style={{flex: 1, justifyContent: "center"}}>
          <ActivityIndicator size={size} color={color} />
        </View>
      )
    } else {
      return <ActivityIndicator size={size} color={color} />
    }
  }
}