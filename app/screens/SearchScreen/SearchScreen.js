import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import CustomTextInput from "../../components/CustomTextInput"
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.xploreLogo}>Xpore Image Placeholder</Text>
        <CustomTextInput style={{marginTop: 10}} placeholder="Username"/>
        <CustomTextInput style={{marginTop: 10}} placeholder="Email"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
  },
  xploreLogo: {
    marginHorizontal: 10,
  },
  usernameTextInput: {

  },
})