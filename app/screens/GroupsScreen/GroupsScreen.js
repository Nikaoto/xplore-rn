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
          groupId={"asd"}
          groupName={"Excursion in Javakheti"}
          groupImageSource={"https://maps.googleapis.com/maps/api/staticmap?&zoom=16&size=450x300&maptype=hybrid&center=41.8277156308525,44.967842660844326&markers=color:orange|41.8277156308525,44.967842660844326"}
          leaderFullName={"Andrej Sapkowski"}
          leaderImageSource={"https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic.jpg"}
          leaderReputation={26}
          invite={true}
          beenHere={false}
          memberCount={5}
          durationText={"3 days"}
          startsInText={"In 2 weeks"}
        />
        <GroupCard
          groupId={"asd"}
          groupName={"Taking back our holy land!"}
          groupImageSource={"https://maps.googleapis.com/maps/api/staticmap?&zoom=16&size=450x300&maptype=hybrid&center=41.8277156308525,44.967842660844326&markers=color:orange|41.8277156308525,44.967842660844326"}
          leaderFullName={"Niko Nikoladze"}
          leaderImageSource={"https://cdn.pixabay.com/photo/2016/02/25/18/26/man-1222621_640.jpg"}
          leaderReputation={26}
          invite={true}
          beenHere={true}
          memberCount={1500}
          durationText={"<1 day"}
          startsInText={"In 6 days"}
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