import React from "react"
import {Image, StyleSheet, Text, View} from "react-native"
import globalStyles from "../../values/styles"
import GroupCard from "../../components/GroupCard/GroupCard"

export default class GroupsScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/groups.png')}
        style={[globalStyles.bottomNavIcon, {tintColor: tintColor}]}
      />
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