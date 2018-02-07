import React from "react"
import { TabNavigator } from "react-navigation"
import SearchScreen from "../SearchScreen"
import GroupsScreen from "../GroupsScreen"
import MapScreen from "../MapScreen"
import ProfileScreen from "../ProfileScreen"
import Icon from "react-native-vector-icons/MaterialIcons"
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
      borderTopColor: "#d3d3d3",
      elevation: 0,
      borderTopWidth: 1,
      paddingBottom: 0,
      marginBottom: 0,
    },
    labelStyle: {
      fontSize: 10,
      padding: 0,
      margin: 0,
    },
    indicatorStyle: {
      display: "none",
    },
  },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={navBarIcons[navigation.state.routeName]}
        size={27}
        style={{ textAlign: "center" }}
        color={tintColor}
      />
    ),
  }),
})

const navBarIcons = {
  Search: "search",
  Groups: "group",
  Map: "place",
  Profile: "account-circle"
}

export default BottomNavigation