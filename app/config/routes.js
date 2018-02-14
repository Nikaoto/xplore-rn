import React, { Component } from "react"
import { Image, StyleSheet, View } from "react-native"
import { NavigationActions, StackNavigator } from "react-navigation"
import { isUserLoggedIn } from "../reducers/AccountUtil"
import { isFirstBoot } from "../reducers/PrefsUtil"
import Tabs from "../screens/Tabs"
import LoginScreen from "../screens/LoginScreen"
import WelcomeScreen from "../screens/WelcomeScreen"

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
    return(
      <View style={styles.container}>
        <Image style={styles.logo} resizeMode={"contain"} source={require("../img/logo.png")}/>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: 250,
  },
})

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
  headerMode: "none",
})