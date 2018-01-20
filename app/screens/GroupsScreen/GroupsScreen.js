import React from "react"
import { Text, Image } from "react-native"
import styles from "./styles"

export default class GroupsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/groups.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return <Text>Groups</Text>
  }
}