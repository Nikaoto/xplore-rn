import React from "react"
import {Image, Text, View} from "react-native"
import Button from "../../components/Button"
import CardView from "../../components/CardView"
import globalStyles from "../../values/styles"
import styles from "./styles"

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
        <Button
          onPress={() => console.log("OnPress")}
          style={styles.button}>
          <Text>TOUCC ME</Text>
        </Button>
        <Text>Groups Screen</Text>
        <CardView elevation={2}>
          <Text>
            Sample Text Boi
          </Text>
          <Button>
            <Text>Sample Button Boi</Text>
          </Button>
        </CardView>
      </View>
    )
  }
}