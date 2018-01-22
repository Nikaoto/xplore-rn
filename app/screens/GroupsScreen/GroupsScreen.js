import React from "react"
import { View, Text, Image, Button, AsyncStorage } from "react-native"
import { isUserLoggedIn, setUserLoggedIn } from "../../reducers/AccountUtil"
import styles from "../../values/styles"

export default class GroupsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/groups.png')}
        style={[styles.bottomNavIcon, {tintColor: tintColor}]}
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
      <View>
        <Text>Groups</Text>
        <Button
          title="Click to check if user logged in"
          onPress={this.onLoadPress}/>
        <Button
          title="Click to save user logged in"
          onPress={this.onSavePress}/>
      </View>
    )
  }
}