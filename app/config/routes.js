import React, { Component } from "react"
import { ActivityIndicator, View } from "react-native"
import { StackNavigator, NavigationActions } from "react-navigation"
import { isUserLoggedIn } from "../reducers/AccountUtil"
import { isFirstBoot } from "../reducers/PrefsUtil"
import colors from "../values/colors"
import strings from "../values/strings"
import Tabs from "../screens/Tabs"
import LoginScreen from "../screens/LoginScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator"

class StartScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    isUserLoggedIn().then(userLoggedIn => {
      if (userLoggedIn === false) {
        console.log("navigating to LoginScreen")
        this.openLoginScreen()
      } else {
        isFirstBoot().then(firstBoot => {
          if (firstBoot === true) {
            console.log("navigating to WelcomeScreen")
            this.openWelcomeScreen()
          } else {
            console.log("navigating to Tabs")
            this.openTabsScreen()
          }
        })
      }
    })
  }

  openScreenAsFirst(routeName) {
    const action = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: routeName})
      ]
    })
    this.props.navigation.dispatch(action)
  }

  openLoginScreen() {
    this.openScreenAsFirst("Login")
  }

  openWelcomeScreen() {
    this.openScreenAsFirst("Welcome")
  }

  openTabsScreen() {
    this.openScreenAsFirst("Tabs")
  }

  render() {
    return <LoadingIndicator center={true} size={"large"}/>

  }
}

export const Root = StackNavigator({
  Start: {
    screen: StartScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Welcome: {
    screen: WelcomeScreen,
  },
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: "modal",
})