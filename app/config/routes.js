import React from "react"
import { TabNavigator, StackNavigator } from "react-navigation"
//import CenterLoadingBar from "./components/CenterLoadingBar"
import Tabs from "../screens/Tabs"
import { isUserLoggedIn } from "../reducers/AccountUtil"
import colors from "../values/colors"
import strings from "../values/strings"
import { Text } from "react-native"
import LoginScreen from "../screens/LoginScreen"

export const Root = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: "modal",
})