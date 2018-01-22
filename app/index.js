import React, { Component } from "react"
import BottomNavigation from "./screens/BottomNavigation"
//import LoginComp from "./components/LoginComp"
import { StackNavigator } from "react-navigation"
import { isUserLoggedIn } from "./reducers/AccountUtil"
import colors from "./values/colors"
import strings from "./values/strings"

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {userLoggedIn: props.userLoggedIn}
    isUserLoggedIn().then(userLoggedIn => this.setState({userLoggedIn: userLoggedIn}))
  }

  static navigationOptions = {
    title: strings.xplore,
    borderTopColor: colors.primary,
    borderTopWidth: 2,
  }

  render() {
    return <BottomNavigation/>
  }
}

const XploreApp = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
})

export default XploreApp

