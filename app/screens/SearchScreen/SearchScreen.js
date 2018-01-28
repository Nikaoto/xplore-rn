import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import extStyles from "../../values/styles"

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/search.png')}
        style={[extStyles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }

  constructor(props) {
    super(props)
    this.state = {searchText: ""}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{alignSelf: "stretch"}}>Search Placeholder</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
  },
})