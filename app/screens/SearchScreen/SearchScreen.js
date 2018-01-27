import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import CustomTextInput from "../../components/CustomTextInput"
import EmailInput from "../../components/EmailInput"
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
        <Text style={styles.xploreLogo}>Xpore Logo Placeholder</Text>
        <EmailInput/>
        <CustomTextInput style={{marginTop: 10}} placeholder={"Password"}/>
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
    marginBottom: 10,
  },
  usernameTextInput: {

  },
})