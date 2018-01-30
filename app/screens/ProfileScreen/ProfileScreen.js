import React, {Component} from "react"
import {Button, Image, Text, View} from "react-native"
import globalStyles from "../../values/styles"
import {clearAllPrefs} from "../../reducers/PrefsUtil"
import {isUserLoggedIn, setUserLoggedIn} from "../../reducers/AccountUtil"

export default class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/profile.png')}
        style={[globalStyles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }

  onLoadPress() {
    isUserLoggedIn().then(value => console.log(value))
  }

  onSavePress() {
    setUserLoggedIn(true)
  }


  render() {
    return (
      <View style={globalStyles.container}>
        <Text>Profile Screen</Text>
        <Button
          title={"Clear prefs"}
          onPress={() => clearAllPrefs()}/>
        <Text style={{marginTop: 10, marginBottom: 10}}>Login Control</Text>
        <Button
          title="Click to check if user logged in"
          onPress={() => this.onLoadPress()}/>
        <Button
          title="Click to save user logged in"
          onPress={() => this.onSavePress()}/>
      </View>
    )
  }
}