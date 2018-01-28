import React, { Component } from "react"
import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native"
import strings from "../../values/strings"
import colors from "../../values/colors"
import { isUserLoggedIn } from "../../reducers/AccountUtil"
import EmailInput from "../../components/EmailInput"
import { isValidEmail } from "../../reducers/FormUtil"
import { NavigationActions } from "react-navigation"
import PasswordInput from "../../components/PasswordInput/PasswordInput"

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {userLoggedIn: null}
    isUserLoggedIn().then(userLoggedIn => this.setState({userLoggedIn: userLoggedIn}))
    this.onSubmit = this.onSubmit.bind(this)
  }

  static navigationOptions = {
    title: strings.login
  }

  onPress() {

  }

  onSubmit() {
    if (isValidEmail(this.state.emailText)) {
      console.log("gud email")
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: "Tabs"})
        ]
      })
      this.props.navigation.dispatch(resetAction)
    } else {
      console.log("bad email D:<")
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.xploreLogo}>Xpore Logo Placeholder</Text>
        <EmailInput onChangeText={(text) => this.setState({emailText: text})} style={{alignSelf: "stretch"}}/>
        <PasswordInput style={{alignSelf: "stretch", marginTop: 10}}/>
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