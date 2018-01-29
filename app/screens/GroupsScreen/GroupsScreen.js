import React from "react"
import { View, Text, Image, AsyncStorage } from "react-native"
import Button from "../../components/Button"
import globalStyles from "../../values/styles"
import styles from "./styles"

export default class GroupsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/groups.png')}
        style={[styles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <Button
          onPress={() => console.log("OnPress")}
          underlayColor={"#000000"}
          style={styles.button}>
          <Text>TOUCC ME</Text>
        </Button>
        <Text>Groups Screen</Text>
      </View>
    )
  }
}