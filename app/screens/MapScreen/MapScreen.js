import React from "react"
import { Text, Image, View } from "react-native"
import LoadingIndicator from "../../components/LoadingIndicator"
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
    return <LoadingIndicator size={"large"} center={true}/>
  }
}