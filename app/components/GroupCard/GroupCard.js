import React, { Component } from "react"
import { Text, View } from "react-native"
import FastImage from "react-native-fast-image"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import CardView from "../CardView"
import styles from "./styles"
import colors from "../../values/colors"

export default class GroupCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const groupImageSource = "https://maps.googleapis.com/maps/api/staticmap?&zoom=16&size=450x300&maptype=hybrid&center=41.8277156308525,44.967842660844326&markers=color:orange|41.8277156308525,44.967842660844326"
    const leaderImageSource = "https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic.jpg"

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
            <Icon name="marker-check" color={colors.subtleGreen} size={dimens.beenhereIconSize}/>
            <Icon name="bookmark" color={colors.subtleRed} size={dimens.invitedIconSize} style={{marginTop: -2}}/>
          </View>
        </View>
        <FastImage style={styles.groupImage} source={{uri: groupImageSource}}/>
        <Text style={styles.groupNameText} numberOfLines={1}>{this.props.groupName}</Text>
        <View style={styles.divider}/>
        <View style={styles.footer}>
          <View style={styles.footerSection}>
            <Icon name={"account-outline"} size={dimens.footerIconSize} color={colors.greyText}/>
            <Text style={styles.footerText}>5</Text>
          </View>
          <View style={styles.footerSection}>
            <Icon name={"clock"} size={dimens.footerIconSize} color={colors.greyText}/>
            <Text style={styles.footerText}>3 days</Text>
          </View>
          <View style={styles.footerSection}>
            <Icon name={"calendar"} size={dimens.footerIconSize} color={colors.greyText}/>
            <Text style={styles.footerText}>In 2 weeks</Text>
          </View>

        </View>
      </CardView>
    )
  }
}

const dimens = {
  footerIconSize: 20,
  beenhereIconSize: 22,
  invitedIconSize: 25,
}
