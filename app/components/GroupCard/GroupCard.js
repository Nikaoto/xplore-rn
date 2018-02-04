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

  renderLeader(leaderFullName, leaderReputationText, leaderImageSource) {
    return (
      <View style={styles.leaderLayout}>

        <FastImage style={styles.leaderImage} source={{uri: leaderImageSource}}/>

        <View style={styles.leaderTextLayout}>
          <Text style={styles.leaderReputationText} numberOfLines={1}>{leaderReputationText}</Text>
          <Text style={styles.leaderNameText}>{leaderFullName}</Text>
        </View>

      </View>
    )
  }

  renderBadges(invite, beenHere) {
    let beenHereIcon = <View />
    let inviteIcon = <View />

    if (beenHere === true) {
      beenHereIcon = <Icon name="marker-check" color={colors.subtleGreen} size={dimens.beenhereIconSize}/>
    }

    if (invite === true) {
      inviteIcon = <Icon name="bookmark" color={colors.subtleRed} size={dimens.inviteIconSize} style={{marginTop: -2}}/>
    }

    return (
      <View style={styles.badgeLayout}>
        { beenHereIcon }
        { inviteIcon }
      </View>
    )
  }

  renderFooter(memberCount, durationText, startsInText) {
    return (
      <View style={styles.footer}>
        <View style={styles.footerSection}>
          <Icon name={"account-outline"} size={dimens.footerIconSize} color={colors.greyText}/>
          <Text style={styles.footerText}>{memberCount}</Text>
        </View>
        <View style={styles.footerSection}>
          <Icon name={"clock"} size={dimens.footerIconSize} color={colors.greyText}/>
          <Text style={styles.footerText}>{durationText}</Text>
        </View>
        <View style={styles.footerSection}>
          <Icon name={"calendar"} size={dimens.footerIconSize} color={colors.greyText}/>
          <Text style={styles.footerText}>{startsInText}</Text>
        </View>
      </View>
    )
  }

  render() {
    const groupId = "ASJKDHKH"
    const groupName = this.props.groupName
    const groupImageSource = this.props.groupImageSource
    const leaderFullName = this.props.leaderFullName
    const leaderImageSource = this.props.leaderImageSource
    const leaderReputation = this.props.leaderReputation
    const leaderReputationText = `${leaderReputation} REPUTATION`
    const invite = this.props.invite
    const beenHere = this.props.beenHere
    const memberCount = this.props.memberCount
    const durationText = this.props.durationText
    const startsInText = this.props.startsInText

    return(
      <CardView elevation={3} style={styles.groupCard}>
        <View style={styles.topLayout}>

          {this.renderLeader(leaderFullName, leaderReputationText, leaderImageSource)}

          {this.renderBadges(invite, beenHere)}

        </View>

        <FastImage style={styles.groupImage} source={{uri: groupImageSource}}/>

        <Text style={styles.groupNameText} numberOfLines={1}>{groupName}</Text>

        <View style={styles.divider}/>

        {this.renderFooter(memberCount, durationText, startsInText)}

      </CardView>
    )
  }
}

const dimens = {
  footerIconSize: 20,
  beenhereIconSize: 22,
  inviteIconSize: 25,
}
