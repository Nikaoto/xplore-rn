import React from "react"
import { TabNavigator } from "react-navigation"
import SearchScreen from "../../screens/SearchScreen"
//import TripsScreen from "../../screens/TripsScreen"
import GroupsScreen from "../../screens/GroupsScreen"
import MapScreen from "../../screens/MapScreen"
import ProfileScreen from "../../screens/ProfileScreen"
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
    iconStyle: {
      width: 30,
      height: 30,
    },
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