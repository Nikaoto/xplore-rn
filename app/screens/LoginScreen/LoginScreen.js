import React, { Component } from "react"
import { NavigationActions } from "react-navigation"
import { Image, StyleSheet, Text, View } from "react-native"
import EmailInput from "../../components/EmailInput"
import PasswordInput from "../../components/PasswordInput"
import Button from "../../components/Button"

import strings from "../../values/strings"

import { setUserLoggedIn } from "../../reducers/AccountUtil"
import { isValidEmail } from "../../reducers/FormUtil"
import { isFirstBoot } from "../../reducers/PrefsUtil"

// TODO write description

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {userLoggedIn: null}
    this.onSubmit = this.onSubmit.bind(this)
  }

  static navigationOptions = {
    title: strings.login,
    style:{
      backgroundColor: "white",
    },
  }

  onSubmit() {
    if (!isValidEmail(this.state.emailText)) {
      console.log("bad email >:V")
      return
    }
    setUserLoggedIn(true)
    isFirstBoot().then(firstBoot => {
      if (firstBoot === true) {
        console.log("opening welcome screen")

        this.openWelcomeScreen()
      } else {
        console.log("opening tabs")

        this.openTabs()
      }
    })
  }

  openWelcomeScreen() {
    const action = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: "Welcome"})
      ]
    })
    this.props.navigation.dispatch(action)
  }

  openTabs() {
    const action = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: "Tabs"})
      ]
    })
    this.props.navigation.dispatch(action)
  }

  render() {
    return(
      <View style={styles.container}>
        <Image style={styles.xploreLogo} source={require("../../img/login_logo.png")} resizeMode={"contain"}/>
        <EmailInput onChangeText={(text) => this.setState({emailText: text})} style={{alignSelf: "stretch"}}/>
        <PasswordInput style={{alignSelf: "stretch", marginTop: 10}}/>
        <Button style={styles.xploreLoginButton} onPress={this.onSubmit}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>
            Log In / Register
          </Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  xploreLogo: {
    alignSelf: "center",
    marginBottom: 5,
  },
  xploreLoginButton: {
    marginTop: 30,
    padding: 9,
    alignSelf: "stretch",
  }
})