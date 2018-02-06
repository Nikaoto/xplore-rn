import React from "react"
import LoadingIndicator from "../../components/LoadingIndicator"

export default class MapScreen extends React.Component {
/*  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="place" size={globalStyles.bottomNavIconSize} color={tintColor}/>
    ),
  }*/

  render() {
    return <LoadingIndicator size={"large"} center={true}/>
  }
}