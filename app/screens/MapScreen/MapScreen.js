import React from "react"
import { Text, Image } from "react-native"
import styles from "./styles"

export default class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/map.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return <Text>Map</Text>
  }
}