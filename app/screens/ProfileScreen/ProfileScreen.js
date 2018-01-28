import React, { Component } from "react"
import { Text, Image, View, Button } from "react-native"
import styles from "../../values/styles"
import {clearAllPrefs} from "../../reducers/PrefsUtil"

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
    return (
      <View>
        <Text>Profile</Text>
        <Button
          title={"Clear prefs"}
          onPress={() => clearAllPrefs()}/>
      </View>
    )
  }
}