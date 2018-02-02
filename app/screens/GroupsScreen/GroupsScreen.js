import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import GroupCard from "../../components/GroupCard/GroupCard"
import globalStyles from "../../values/styles"

export default class GroupsScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="group" size={globalStyles.bottomNavIconSize} color={tintColor}/>
    ),
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={styles.titleText}>Groups Screen</Text>
        <GroupCard
          leaderId={"qwe"}
          groupId={"asd"}
          groupName={"Excursion in Javakheti"}
          memberCount={7}
          durationInDays={3}
          startsInDays={5}
          experienced={false}
        />
        <GroupCard
          leaderId={"qwe"}
          groupId={"asd"}
          groupName={"Excursion in Javakheti"}
          memberCount={7}
          durationInDays={3}
          startsInDays={5}
          experienced={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleText: {
    alignSelf: "stretch",
  }
})