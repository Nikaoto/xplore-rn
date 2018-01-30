import React from "react"
import {Image, StyleSheet, Text, View} from "react-native"
import globalStyles from "../../values/styles"

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/search.png')}
        style={[globalStyles.bottomNavIcon, {tintColor: tintColor}]}
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