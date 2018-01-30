import React, {Component} from "react"
import {NavigationActions} from "react-navigation"
import {StyleSheet, Text, View} from "react-native"
import EmailInput from "../../components/EmailInput"
import PasswordInput from "../../components/PasswordInput"
import Button from "../../components/Button"

import strings from "../../values/strings"

import {setUserLoggedIn} from "../../reducers/AccountUtil"
import {isValidEmail} from "../../reducers/FormUtil"
import {isFirstBoot} from "../../reducers/PrefsUtil"

// TODO write description

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {userLoggedIn: null}
    this.onSubmit = this.onSubmit.bind(this)
  }

  static navigationOptions = {
    title: strings.login
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
        <Text style={styles.xploreLogo}>Xpore Logo Placeholder</Text>
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
    alignItems: "center",
    margin: 20,
  },
  xploreLogo: {
    margin: 10,
  },
  xploreLoginButton: {
    marginTop: 30,
    padding: 9,
    alignSelf: "stretch",
  }
})