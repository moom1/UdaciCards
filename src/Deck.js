import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Center } from "./Center";

export default function Deck({ route, navigation }) {
  return (
    <Center>
      <Text>Number of cards {route.params.cards.length}</Text>
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
