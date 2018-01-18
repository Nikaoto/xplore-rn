import React from "react"
import {
  Text,
  View,
  StyleSheet,
} from "react-native"
import Welcome from "./components/Welcome"

export default class XploreApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome/>
        <Text>Open up App.js toooo start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
