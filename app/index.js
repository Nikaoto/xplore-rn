import React from "react"
import Welcome from "./components/Welcome"
import BottomNavigation from "./components/BottomNavigation"
import SearchScreen from "./components/SearchScreen"
import {
  Text,
  View,
  StyleSheet,
} from "react-native"
import { StackNavigator } from "react-navigation"

const XploreApp = StackNavigator({
  Home: {
    screen: BottomNavigation,
    navigationOptions: {
      title: "Xplore",
    },
  },
})

export default XploreApp

/*export default class XploreApp extends React.Component {
  render() {
    return (
      <BottomNavigation />
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
<View>
        <View style={styles.container}>
          <Welcome/>
          <Text>Open up App.js toooo start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>

      </View>*/