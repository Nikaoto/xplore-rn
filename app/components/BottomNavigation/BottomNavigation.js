import React from "react"
import { TabNavigator } from "react-navigation"
import SearchScreen from "../SearchScreen"
import TripsScreen from "../TripsScreen"
// import all the screens

const BottomNavigation = TabNavigator({
	Search : { screen: SearchScreen },
  Trips: { screen:  TripsScreen },
  /*Map : { screen: },
  Inbox: { screen: },
  Profile: { screen: }*/
}, {
  tabBarPosition: "bottom",
})

export default BottomNavigation