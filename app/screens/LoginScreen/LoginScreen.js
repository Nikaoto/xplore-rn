import React, { Component } from "react"
import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native"
import strings from "../../values/strings"
import colors from "../../values/colors"
import {isUserLoggedIn, setUserLoggedIn} from "../../reducers/AccountUtil"
import EmailInput from "../../components/EmailInput"
import { isValidEmail } from "../../reducers/FormUtil"
import { NavigationActions } from "react-navigation"
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import {isFirstBoot} from "../../reducers/PrefsUtil"

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
})