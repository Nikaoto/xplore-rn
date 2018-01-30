import React from "react"
import {Image, StyleSheet, Text, View} from "react-native"
import globalStyles from "../../values/styles"
import Button from "../../components/Button/Button"
import CardView from "../../components/CardView/CardView"

export default class SearchScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {searchText: ""}
  }

  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/search.png')}
        style={[globalStyles.bottomNavIcon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={{alignSelf: "stretch"}}>Search Placeholder</Text>
        <Button
          onPress={() => console.log("OnPress")}
          style={{marginVertical: 10, paddingHorizontal: 10}}>
          <Text>TOUCC ME</Text>
        </Button>
        <Text>Search Screen</Text>
        <CardView elevation={2}>
          <Text>
            Sample Text Boi
          </Text>
          <Button>
            <Text>Sample Button Boi</Text>
          </Button>
        </CardView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
  },
})