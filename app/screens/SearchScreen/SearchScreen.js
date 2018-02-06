import React from "react"
import { Text, View } from "react-native"
import Button from "../../components/Button/Button"
import CardView from "../../components/CardView/CardView"
import globalStyles from "../../values/styles"

export default class SearchScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {searchText: ""}
  }
/*
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" size={globalStyles.bottomNavIconSize} color={tintColor}/>
    ),
  }*/

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