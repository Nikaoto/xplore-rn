import React, { Component } from "react"
import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native"
import strings from "../../values/strings"
import colors from "../../values/colors"
import { isUserLoggedIn } from "../../reducers/AccountUtil"
import EmailInput from "../../components/EmailInput"
import CustomTextInput from "../../components/CustomTextInput"
import { isValidEmail } from "../../reducers/FormUtil"

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {userLoggedIn: null}
    isUserLoggedIn().then(userLoggedIn => this.setState({userLoggedIn: userLoggedIn}))
  }

  static navigationOptions = {
    title: strings.login
  }

  onPress() {

  }

  onSubmit = () => {
    if (isValidEmail(this.state.emailText)) {
      console.log("gud email")
      this.props.navigation.navigate("Tabs")
    } else {
      console.log("bad email D:<")
    }
  }

  render() {
    return(
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

  /*render() {
    const userLoggedIn = this.state.userLoggedIn
    if (userLoggedIn === null) {
      console.log("rendering CenterLoadingBar")
      return <Text>LOADING...</Text>
    } else if (userLoggedIn === true) {
      console.log("rendering BottomNavigation")
      return <BottomNavigation/>
    } else {
      console.log("rendering LoginComponent")
      return <Login/>
    }
  }*/
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
})