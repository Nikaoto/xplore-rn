import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import GroupCard from "../../components/GroupCard/GroupCard"
import globalStyles from "../../values/styles"

export default class GroupsScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    //this.setState({groupData: groupData})
    this.fetchGroups(5)
      .then(res => res.json())
      .then(res => this.setState({ groupData: res.data.groups}))
  }

  fetchGroups(count) {
    const serverURL = "http://10.0.2.2:8080/graphql"
    const groupQuery = `{
      groups(count: ${count}){
        id
        name
        imageUrl
        beenHere
        memberIds
        leaders {
          name
          reputation
          imageUrl
        }
      }
    }`

    return fetch(serverURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: groupQuery
      })
    })
  }

  // TODO move all groupcard logic to GroupCard class
  renderGroupCard(group) {
    return (
      <View>
        <Text>{"id: " + group.id}</Text>
        <Text>{"name: " + group.name}</Text>
        <Text>{"description: " + group.description}</Text>
        <Text>{"imageUrl: " + group.imageUrl}</Text>
        <Text>{"meetupLatitude: " + group.meetupLatitude}</Text>
        <Text>{"meetupLongitude: " + group.meetupLongitude}</Text>
        <Text>{"startDate: " + group.startDate}</Text>
        <Text>{"startTime: " + group.startTime}</Text>
        <Text>{"endDate: " + group.endDate}</Text>
        <Text>{"endTime: " + group.endTime}</Text>
        <Text>{"beenHere: " + group.beenHere}</Text>
        <Text>{"leaderIds: " + group.leaderIds}</Text>
        <Text>{"memberIds: " + group.memberIds}</Text>
        <Text>{"invitedMemberIds: " + group.invitedMemberIds}</Text>
        <Text>{"requestingMemberIds: " + group.requestingMemberIds}</Text>
        <View style={[globalStyles.divider, {marginTop: 5, marginBottom: 10}]}/>
      </View>
    )
  }

  tempRenderGroupCard(group) {
    const {id, name, imageUrl, beenHere, leaders, memberIds} = group
    const memberCount = memberIds.length + leaders.length
    const mainLeader = leaders[0]

    return(
      <GroupCard
        id={id}
        name={name}
        imageUrl={imageUrl}
        leaderFullName={mainLeader.name}
        leaderImageUrl={mainLeader.imageUrl}
        leaderReputationText={mainLeader.reputation + " REPUTATION"}
        invite={false}
        beenHere={beenHere}
        memberCount={memberCount}
        durationText={"69 days"}
        startsInText={"In 69 weeks"}
      />
    )
  }

  render() {
    const groups = this.state.groupData

    return (
      <View style={styles.container}>
        <FlatList
          data={groups}
          renderItem={({ item }) => this.tempRenderGroupCard(item)}
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