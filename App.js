import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import Decks from "./src/Decks";
import { NavigationContainer } from "@react-navigation/native";
import AddNewDeck from "./src/AddNewDeck";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Decks"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Decks") {
              return (
                <MaterialCommunityIcons
                  name="cards"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "New") {
              return (
                <AntDesign name={"pluscircleo"} size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Decks" component={Decks} />
        <Tabs.Screen name="New" component={AddNewDeck} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
