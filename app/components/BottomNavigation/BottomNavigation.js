import React from "react"
import { TabNavigator } from "react-navigation"
import SearchScreen from "../../screens/SearchScreen"
//import TripsScreen from "../../screens/TripsScreen"
import GroupsScreen from "../../screens/GroupsScreen"
import MapScreen from "../../screens/MapScreen"
import ProfileScreen from "../../screens/ProfileScreen"

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
    activeTintColor: "#48c201",
    inactiveTintColor: "black",
    upperCaseLabel: true,
    showIcon: true,
    iconStyle: {
      width: 36,
      height: 36,
    },
    style : {
      backgroundColor: "white",
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