import React, { Component } from "react"
import { Platform, View, StyleSheet } from "react-native"

export default class CardView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onPress = this.onPress.bind(this)
  }

  componentWillMount() {
    // Configure style
    const elevation = this.props.elevation || 1
    const primaryStyle = {
      elevation: elevation,
      shadowRadius: elevation/2,
      borderRadius: this.props.borderRadius || 5
    }

    this.setState({ finalStyle: [defaultStyles.card, this.props.style, primaryStyle] })
  }

  onPress() {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render() {
    const finalStyle = this.state.finalStyle

    return(
      <View style={finalStyle}>
        {this.props.children}
      </View>
    )
  }
}

// Defaults
const defaultStyles = StyleSheet.create({
  card: {
    elevation: 1,
    shadowRadius: 1,
    borderRadius: 5, //TODO remove the first three elements, they are redundant
    backgroundColor: "white",
    padding: 15,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: {height: 1, width: 0},
  }
})