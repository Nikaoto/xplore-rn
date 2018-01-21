import React from "react"
import { Text, Image } from "react-native"
import styles from "../../values/styles"

export default class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/map.png')}
        style={[styles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return <Text>Map</Text>
  }
}