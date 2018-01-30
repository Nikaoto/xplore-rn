import React from "react"
import {TabNavigator} from "react-navigation"
import SearchScreen from "../SearchScreen"
import GroupsScreen from "../GroupsScreen"
import MapScreen from "../MapScreen"
import ProfileScreen from "../ProfileScreen"
import colors from "../../values/colors"

const BottomNavigation = TabNavigator({
	Search : { screen: SearchScreen },
  Groups: { screen:  GroupsScreen },
  Map: { screen:  MapScreen },
  Profile: { screen:  ProfileScreen },
}, {
  animationEnabled: true,
  pressColor: "grey",
  tabBarPosition: "bottom",
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: "black",
    upperCaseLabel: true,
    showIcon: true,
    style : {
      backgroundColor: colors.navBarBackgroundColor,
      paddingBottom: 0,
      marginBottom: 0,
    },
    labelStyle: {
      fontSize: 10,
      padding: 0,
      margin: 0,
    },
  },
})

export default BottomNavigation