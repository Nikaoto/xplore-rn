import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import GroupCard from "../../components/GroupCard/GroupCard"
import globalStyles from "../../values/styles"
import groupData from "./groups.json"

export default class GroupsScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Groups',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="group" size={globalStyles.bottomNavIconSize} color={tintColor}/>
    ),
  }

  componentWillMount() {
    console.log(groupData)
    this.setState({groupData: groupData})
  }

  renderGroupCard() {
    return (
      <GroupCard
        id={"asd"}
        name={"brejk"}
        imageUrl={"https://maps.googleapis.com/maps/api/staticmap?&zoom=16&size=450x300&maptype=hybrid&center=41.8277156308525,44.967842660844326&markers=color:orange|41.8277156308525,44.967842660844326"}
        leaderFullName={"Andrej Sapkowski"}
        leaderImageUrl={"https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic.jpg"}
        leaderReputation={26}
        invite={true}
        beenHere={false}
        memberCount={5}
        durationText={"3 days"}
        startsInText={"In 2 weeks"}
      />
    )
  }

  render() {
    const groups = this.state.groupData

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.groupList}
          data={groups}
          renderItem={({ item }) => this.renderGroupCard()}
          keyExtractor={item => item.id}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: "stretch",
  },
  groupList: {
    paddingBottom: 15,
  },
  titleText: {
    alignSelf: "stretch",
  }
})