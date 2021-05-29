import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, TextInput, Alert, Button, StyleSheet } from "react-native";

export const getDecks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("decks");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    Alert.alert(e);
    return null;
  }
};

export const getDataString = async () => {
  try {
    const value = await AsyncStorage.getItem("decks");
    if (value !== null) {
      console.log("value exists!", value);
    } else {
      console.log("doesnt exist");
    }
  } catch (e) {
    // error reading value
  }
};

export const storeDeck = async (value) => {
  const oldDecks = await getDecks();
  if (oldDecks !== null) {
    const newDeck = { ...oldDecks, ...value };
    try {
      const jsonValue = JSON.stringify(newDeck);
      await AsyncStorage.setItem("decks", jsonValue);
    } catch (e) {
      // saving error
    }
  } else {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("decks", jsonValue);
    } catch (e) {
      // saving error
    }
  }
};

export const storeCard = async (value) => {
  const oldDecks = await getDecks();
  if (oldDecks !== null) {
    const newDeck = {
      ...oldDecks,
      [value.name]: [
        ...value.cards,
        { question: value.question, answer: value.answer },
      ],
    };
    try {
      const jsonValue = JSON.stringify(newDeck);
      await AsyncStorage.setItem("decks", jsonValue);
    } catch (e) {
      // saving error
    }
  }
};

export const clearDecks = async () => {
  return AsyncStorage.removeItem("decks");
};

export function fetchDecks() {
  return AsyncStorage.getItem("decks").then();
}
export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}
