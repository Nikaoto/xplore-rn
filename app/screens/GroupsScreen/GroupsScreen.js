import React from "react"
import {Image, StyleSheet, Text, View} from "react-native"
import globalStyles from "../../values/styles"

export default class GroupsScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/groups.png')}
        style={[globalStyles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={styles.titleText}>Groups Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleText: {
    alignSelf: "stretch",
  }
})