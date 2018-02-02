import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import FastImage from "react-native-fast-image"
import CardView from "../CardView"
import styles from "./styles"

export default class GroupCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const groupImageSource = "https://maps.googleapis.com/maps/api/staticmap?&zoom=16&size=450x300&maptype=hybrid&center=41.8277156308525,44.967842660844326&markers=color:orange|41.8277156308525,44.967842660844326"
    const leaderImageSource = "https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic.jpg"
    const temp = require("../../img/temp.png")

    return(
      <CardView elevation={3} style={styles.groupCard}>
        <View style={styles.topLayout}>
          <View style={styles.leaderLayout}>
            <FastImage style={styles.leaderImage} source={{uri: leaderImageSource}}/>
            <View style={styles.leaderTextLayout}>
              <Text style={styles.leaderReputationText} numberOfLines={1}>26 REPUTATION</Text>
              <Text style={styles.leaderNameText}>Deus Vult</Text>
            </View>
          </View>
          <View style={styles.badgeLayout}>
            <FastImage resizeMode={"contain"} source={require('../../img/beenhere.png')} style={styles.beenHereIcon}/>
            <FastImage resizeMode={"contain"} source={require('../../img/invite.png')} style={styles.inviteIcon}/>
          </View>
        </View>
        <FastImage style={styles.groupImage} source={{uri: groupImageSource}}/>
        <Text style={styles.groupNameText} numberOfLines={1}>{this.props.groupName}</Text>
        <View style={styles.divider}/>
        <View style={styles.footer}>
          <View style={styles.footerSection}>
            <FastImage source={temp} style={styles.footerIcon}/>
            <Text style={styles.footerText}>5</Text>
          </View>
          <View style={styles.footerSection}>
            <FastImage source={temp} style={styles.footerIcon}/>
            <Text style={styles.footerText}>3 days</Text>
          </View>
          <View style={styles.footerSection}>
            <FastImage source={temp} style={styles.footerIcon}/>
            <Text style={styles.footerText}>In 2 weeks</Text>
          </View>

        </View>
      </CardView>
    )
  }
}