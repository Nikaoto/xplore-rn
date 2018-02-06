import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import GroupCard from "../../components/GroupCard/GroupCard"
import groupData from "./parsed_groups.json"

export default class GroupsScreen extends React.Component {

  componentWillMount() {
    console.log(groupData)
    this.setState({groupData: groupData})
  }

  renderGroupCard(group) {
    return (
      <GroupCard
        id={group.id}
        name={group.name}
        imageUrl={group.imageUrl}
        leaderFullName={group.leaderFullName}
        leaderImageUrl={group.leaderImageUrl}
        leaderReputationText={group.leaderReputationText}
        invite={group.invite}
        beenHere={group.beenHere}
        memberCount={group.memberCount}
        durationText={group.durationText}
        startsInText={group.startsInText}
      />
    )
  }

  render() {
    const groups = this.state.groupData

    return (
      <View style={styles.container}>
        <FlatList
          data={groups}
          renderItem={({ item }) => this.renderGroupCard(item)}
          keyExtractor={item => item.id}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  titleText: {
    alignSelf: "stretch",
  }
})