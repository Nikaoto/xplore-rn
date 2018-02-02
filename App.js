import React, {Component} from 'react'
import XploreApp from "./app/index"
import { AppRegistry, Platform, StatusBar, StyleSheet, View } from "react-native"
import colors from "./app/values/colors"

export default class App extends Component {
  render() {
    return (
      <View style={styles.baseContainer}>
        <View style={styles.statusBar}>
          <StatusBar translucent backgroundColor={colors.primaryDark}/>
        </View>
        <XploreApp/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1
  },
  statusBar: {
    height: (Platform.OS === "ios" ? 20 : StatusBar.currentHeight),
  }
})

AppRegistry.registerComponent("App", () => App)