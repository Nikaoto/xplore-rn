import React, {Component} from "react"
import {Image, StyleSheet, Text, View} from "react-native"
import CardView from "../CardView"
import colors from "../../values/colors"

export default class GroupCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const groupImageSource = "http://maps.googleapis.com/maps/api/staticmap?&zoom=16&size=450x300&maptype=hybrid&center=41.8277156308525,44.967842660844326&markers=color:orange|41.8277156308525,44.967842660844326"
    const leaderImageSource = "http://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic.jpg"
    const temp = require("../../img/temp.png")

    return(
      <CardView elevation={3} style={styles.groupCard}>
        <View style={styles.topLayout}>
          <View style={styles.leaderLayout}>
            <Image style={styles.leaderImage} source={{uri: leaderImageSource}}/>
            <View style={styles.leaderTextLayout}>
              <Text style={styles.leaderReputationText} numberOfLines={1}>26 REPUTATION</Text>
              <Text style={styles.leaderNameText}>Deus Vult</Text>
            </View>
          </View>
          <View style={styles.badgeLayout}>
            <Image resizeMode={"contain"} source={require('../../img/beenhere.png')} style={styles.beenHereIcon}/>
            <Image resizeMode={"contain"} source={require('../../img/invite.png')} style={styles.inviteIcon}/>
          </View>
        </View>
        <Image style={styles.groupImage} source={{uri: groupImageSource}}/>
        <Text style={styles.groupNameText} numberOfLines={1}>{this.props.groupName}</Text>
        <View style={styles.divider}/>
        <View style={styles.footer}>
          <View style={styles.footerSection}>
            <Image source={temp} style={styles.footerIcon}/>
            <Text style={styles.footerText}>5</Text>
          </View>
          <View style={styles.footerSection}>
            <Image source={temp} style={styles.footerIcon}/>
            <Text style={styles.footerText}>3 days</Text>
          </View>
          <View style={styles.footerSection}>
            <Image source={temp} style={styles.footerIcon}/>
            <Text style={styles.footerText}>In 2 weeks</Text>
          </View>

        </View>
      </CardView>
    )
  }
}

const styles = StyleSheet.create({
  topLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupCard: {
    marginTop: 15,
    marginHorizontal: 5,
    padding: 0,
    alignSelf: "stretch",
  },
  leaderLayout: {
    margin: 10,
    flexDirection: "row",
  },
  leaderImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  leaderTextLayout: {
    marginLeft: 5,
  },
  leaderReputationText: {
    color: colors.greyText,
    fontFamily: "sans-serif-medium",
    fontSize: 13,
  },
  leaderNameText: {
    color: colors.greyestText,
    fontWeight: "bold",
    fontSize: 16,
  },
  badgeLayout: {
    margin: 3,
    display: "flex",
    flexDirection: "row-reverse",
  },
  beenHereIcon: {
    marginLeft: 3,
    width: 20,
    height: 24,
  },
  inviteIcon: {
    width: 20,
    height: 22,
  },
  groupImage: {
    height: 85,
    width: "auto",
  },
  groupNameText: {
    marginHorizontal: 10,
    marginVertical: 3,
    color: colors.greyestText,
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  footer: {
    marginTop: 2,
    marginBottom: 2,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerSection: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  footerIcon: {
    height: 22,
    width: 22,
  },
  footerText: {
    color: colors.greyerText,
    marginLeft: 3,
    paddingTop: 1,
  },
})