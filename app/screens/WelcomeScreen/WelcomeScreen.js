import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import {setFirstBoot} from "../../reducers/PrefsUtil"
import NavigationActions from "react-navigation"

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  onPress() {
    setFirstBoot(false)
    this.openTabs()
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
        <Text style={{fontSize: 40}} >Welcome screen bois</Text>
        <Button
          title={"Finish intro"}
          onPress={() => this.onPress()}
        />
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