import React, {Component} from "react"
import {StyleSheet, View} from "react-native"

/*
  Props
  -----
  style: StyleSheet
  elevation: Int (1-16)
  shadowRadius: Int (0.5-8) // Always half of elevation
  borderRadius: Int
 */

export default class CardView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onPress = this.onPress.bind(this)
    this.defaults = {
      elevation: 1,
      shadowRadius: 0.5,
      borderRadius: 5,
    }
  }

  componentWillMount() {
    // Configure style
    const elevation = this.props.elevation || this.defaults.elevation
    const primaryStyles = StyleSheet.create({
      card: {
        elevation: elevation,
        shadowRadius: elevation / 2,
        borderRadius: this.props.borderRadius || this.defaults.borderRadius
      }
    })

    this.setState({ finalStyle: [defaultStyles.card, this.props.style, primaryStyles.card] })
  }

  // TODO create TouchableCardView and remove this
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
    backgroundColor: "white",
    padding: 15,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: {height: 1, width: 0},
  }
})