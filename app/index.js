import React from "react"
import BottomNavigation from "./components/BottomNavigation"
import { StackNavigator } from "react-navigation"
import colors from "./values/colors"
import strings from "./values/strings"

const XploreApp = StackNavigator({
  Home: {
    screen: BottomNavigation,
    navigationOptions: {
      title: strings.xplore,
      borderTopColor: colors.primary,
      borderTopWidth: 2,
    },
  },
})

export default XploreApp