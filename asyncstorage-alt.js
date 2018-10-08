import { AsyncStorage } from "react-native";

export async function setItem(key, value = null) {
  if (typeof key === "object") {
    await Object.keys(key).map(async k => {
      await AsyncStorage.setItem(k, JSON.stringify(key[k]));
    });
  } else {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
}

export async function getItem(key) {
  let values = null;

  if (typeof key === "object" && key.constructor === Array) {
    values = {};
    key.map(async k => {
      const value = await AsyncStorage.getItem(k);
      values[k] = JSON.parse(
        typeof value !== "object"
          ? value
          : JSON.parse(await AsyncStorage.getItem(k))
      );
    });
  } else {
    const value = await AsyncStorage.getItem(key);
    values = JSON.parse(
      typeof value !== "object"
        ? value
        : JSON.parse(await AsyncStorage.getItem(key))
    );
  }

  return values;
}
