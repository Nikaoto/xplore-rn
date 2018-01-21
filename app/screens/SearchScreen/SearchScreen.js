import React from "react"
import { Text, Image } from "react-native"
import styles from "../../values/styles"

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/search.png')}
        style={[styles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return <Text>Search</Text>
  }
}