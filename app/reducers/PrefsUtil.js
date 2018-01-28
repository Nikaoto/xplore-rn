import { AsyncStorage } from "react-native"

// Stores and remembers preferences along with experience

const FIRST_BOOT_KEY = "@Xplore:first_boot"

export async function clearAllPrefs() {
  try {
    return await AsyncStorage.clear(() => console.log("all prefs cleared"))
  } catch (error) {
    console.log(error)
  }
}

export async function isFirstBoot() {
  try {
    console.log("isFirstBoot()")
    const value = await AsyncStorage.getItem(FIRST_BOOT_KEY, (value) => JSON.parse(value))
    if (value !== null) {
      console.log("isFirstBoot =", value)
      return value === "true"
    } else {
      console.log("value === null")
      setFirstBoot(true)
      return true
    }
  } catch (error) {
    console.log(error)
  }
}

export async function setFirstBoot(firstBoot) {
  try {
    return await AsyncStorage.setItem(FIRST_BOOT_KEY, JSON.stringify(firstBoot))
  } catch (error) {
    console.log(error)
  }
}