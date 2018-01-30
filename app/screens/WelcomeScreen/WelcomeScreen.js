import React, {Component} from "react"
import {StyleSheet, Text, View} from "react-native"
import {NavigationActions} from "react-navigation"
import Button from "../../components/Button"
import {setFirstBoot} from "../../reducers/PrefsUtil"

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  onPress() {
    setFirstBoot(false)
    this.openTabsScreen()
  }

  openTabsScreen() {
    const action = NavigationActions.reset({
      index: 0,
      actions : [
        NavigationActions.navigate({routeName: "Tabs"})
      ]
    })
    this.props.navigation.dispatch(action)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 35}} >Welcome screen bois</Text>
        <Button onPress={() => this.onPress()}>
          <Text>Finish Intro</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
  }
})