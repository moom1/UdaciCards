import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Center } from "./Center";

export default function Deck({ route, navigation }) {
  return (
    <Center>
      <Text
        style={{
          fontSize: 60,
        }}
      >
        {route.params.name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginVertical: 20,
        }}
      >
        Number of cards: {route.params.cards.length}
      </Text>

      <View
        style={{
          marginBottom: 10,
          borderWidth: 1,
          borderBottomColor: "black",
        }}
      >
        <Button
          title="Start Quiz"
          disabled={route.params.cards.length === 0}
          onPress={() => {
            navigation.navigate("quiz", {
              name: route.params.name,
              cards: route.params.cards,
            });
          }}
        />
      </View>

      <Button
        title="Add a card"
        onPress={() => {
          navigation.navigate("addNewCard", {
            name: route.params.name,
            cards: route.params.cards,
          });
        }}
      />
    </Center>
  );
}
