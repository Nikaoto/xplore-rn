import { AsyncStorage } from "react-native"

const USER_LOGGED_IN_KEY = "@Xplore:user_logged_in"

export async function isUserLoggedIn() {
  try {
    const value = await AsyncStorage.getItem(USER_LOGGED_IN_KEY)
    if (value !== null) {
      console.log("we have a value bois")
      return value
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}