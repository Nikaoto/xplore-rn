import { AsyncStorage } from "react-native"

// Stores and remembers preferences along with experience

const FIRST_BOOT_KEY = "@Xplore:first_boot"

export async function isFirstBoot() {
  try {
    console.log("isFirstBoot()")
    const value = await AsyncStorage.getItem(FIRST_BOOT_KEY, (value) => JSON.parse(value))
    if (value !== null) {
      return value
    } else {
      console.log("value === null")
      setFirstBoot(false)
      return false
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