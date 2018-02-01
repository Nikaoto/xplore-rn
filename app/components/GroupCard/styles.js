import {Platform, StyleSheet} from "react-native"
import colors from "../../values/colors"

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
    fontFamily: Platform.OS === "android" ? "sans-serif-medium" : null,
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
    height: 20,
    width: 20,
  },
  footerText: {
    color: colors.greyerText,
    marginLeft: 3,
    paddingTop: Platform.OS === "ios" ? 2 : 1,
  },
})

export default styles