import React, { Component } from "react"
import { Text, Image } from "react-native"
import styles from "../../values/styles"

export default class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/profile.png')}
        style={[styles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return <Text>Profile</Text>
  }
}