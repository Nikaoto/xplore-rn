import React from "react"
import BottomNavigation from "./screens/BottomNavigation"
import { isUserLoggedIn } from "./reducers/AccountUtil"
import { StackNavigator } from "react-navigation"
import colors from "./values/colors"
import strings from "./values/strings"

if (isUserLoggedIn()) {
  console.log("logged in lol")
} else {
  console.log("not logged in lmao")
}

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