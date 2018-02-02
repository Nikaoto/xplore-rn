import React from "react"
import LoadingIndicator from "../../components/LoadingIndicator"
import Icon from "react-native-vector-icons/MaterialIcons"
import globalStyles from "../../values/styles"

export default class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="place" size={globalStyles.bottomNavIconSize} color={tintColor}/>
    ),
  }

  render() {
    return <LoadingIndicator size={"large"} center={true}/>
  }
}