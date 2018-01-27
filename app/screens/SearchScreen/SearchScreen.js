import React from "react"
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native"
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

  constructor(props) {
    super(props)
    this.state = {emailText: ""}
  }

  onSubmit = () => {
    console.log(this.state.emailText)
    // if(validate emailInput){
    // console.log("gud email")} else {
    //console.log("bad email D:<")}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.xploreLogo}>Xpore Logo Placeholder</Text>
        <EmailInput onChangeText={(text) => this.setState({emailText: text})} style={{alignSelf: "stretch"}}/>
        <CustomTextInput style={{alignSelf: "stretch", marginTop: 10}} placeholder={"Password"}/>
        <TouchableOpacity style={{marginTop: 10}} onPress={this.onSubmit}>
          <Text style={{fontSize: 30}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
  },
  xploreLogo: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  usernameTextInput: {

  },
})