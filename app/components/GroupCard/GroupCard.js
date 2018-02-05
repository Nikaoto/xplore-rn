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

  renderLeader(leaderFullName, leaderReputationText, leaderImageUrl) {
    return (
      <View style={styles.leaderLayout}>

        <View style={styles.leaderImageWrapper}>
          <FastImage style={styles.leaderImage} source={{uri: leaderImageUrl}}/>
        </View>

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
    const id = "ASJKDHKH"
    const name = this.props.name
    const imageUrl = this.props.imageUrl
    const leaderFullName = this.props.leaderFullName
    const leaderImageUrl = this.props.leaderImageUrl
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

          {this.renderLeader(leaderFullName, leaderReputationText, leaderImageUrl)}

          {this.renderBadges(invite, beenHere)}

        </View>

        <FastImage style={styles.groupImage} source={{uri: imageUrl}}/>

        <Text style={styles.groupNameText} numberOfLines={1}>{name}</Text>

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
