import React from "react"
import BottomNavigation from "./components/BottomNavigation"
import {
  Text,
  View,
  StyleSheet,
} from "react-native"
import { StackNavigator } from "react-navigation"

const XploreApp = StackNavigator({
  Home: {
    screen: BottomNavigation,
    navigationOptions: {
      title: "Xplore",
    },
  },
})

export default XploreApp