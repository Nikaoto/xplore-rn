import React, { Component } from "react"
//import CenterLoadingBar from "./components/CenterLoadingBar"
import BottomNavigation from "./screens/BottomNavigation"
import Login from "./components/Login"
import { StackNavigator } from "react-navigation"
import { isUserLoggedIn } from "./reducers/AccountUtil"
import colors from "./values/colors"
import strings from "./values/strings"
import {Text} from "react-native"

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {userLoggedIn: null}
    isUserLoggedIn().then(userLoggedIn => this.setState({userLoggedIn: userLoggedIn}))
  }

  static navigationOptions = {
    title: strings.xplore,
    borderTopColor: colors.primary,
    borderTopWidth: 2,
  }

  render() {
    const userLoggedIn = this.state.userLoggedIn
    if (userLoggedIn === null) {
      console.log("rendering CenterLoadingBar")
      return <Text>LOADING...</Text>
    } else if (userLoggedIn === true) {
      console.log("rendering BottomNavigation")
      return <BottomNavigation/>
    } else {
      console.log("rendering LoginComponent")
      return <Login/>
    }
  }
}

const XploreApp = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
})

export default XploreApp

