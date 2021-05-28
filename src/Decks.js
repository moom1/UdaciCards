import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  Component,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createStackNavigator } from "@react-navigation/stack";
import { Center } from "./Center";
import { Text, TouchableOpacity, FlatList, Button, View } from "react-native";
import faker from "faker";
import { addProductRoutes } from "./addProductRoutes";
import { getDecks } from "../utils/api";
import Deck from "./Deck";
import AddNewCard from "./AddNewCard";
import Quiz from "./Quiz";

const Stack = createStackNavigator();

function Feed({ navigation }) {
  const [decks, setDecks] = useState("");
  useEffect(() => {
    getDecks().then((data) => {
      setDecks(data);
    });
  }, [getDecks()]);

  return (
    <Center>
      <FlatList
        //TODO retrieve actual lists
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              title={`${item} \n ${decks[item].length} Cards`}
              onPress={() => {
                navigation.navigate("deck", {
                  name: item,
                  cards: decks[item],
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={decks ? Object.keys(decks) : null}
      />
    </Center>
  );
}

export default function HomeStack({}) {
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addProductRoutes(Stack)}
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Deck: ${route.params.name}`,
        })}
        name="deck"
        component={Deck}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Add Cards to: ${route.params.name}`,
        })}
        name="addNewCard"
        component={AddNewCard}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Quiz: ${route.params.name}`,
        })}
        name="quiz"
        component={Quiz}
      />
    </Stack.Navigator>
  );
}
