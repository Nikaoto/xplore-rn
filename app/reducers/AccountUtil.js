import { AsyncStorage } from "react-native"

const USER_LOGGED_IN_KEY = "@Xplore:user_logged_in"

export async function isUserLoggedIn() {
  try {
    const value = await AsyncStorage.getItem(USER_LOGGED_IN_KEY, (value) => JSON.parse(value))
    if (value !== null) {
      return value
    } else {
      setUserLoggedIn(false)
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function setUserLoggedIn(loggedIn) {
  try {
    return await AsyncStorage.setItem(USER_LOGGED_IN_KEY, JSON.stringify(loggedIn))
  } catch (error) {
    console.log(error)
  }
}