import React from "react"
import {Image} from "react-native"
import LoadingIndicator from "../../components/LoadingIndicator"
import globalStyles from "../../values/styles"

export default class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/map.png')}
        style={[globalStyles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return <LoadingIndicator size={"large"} center={true}/>
  }
}