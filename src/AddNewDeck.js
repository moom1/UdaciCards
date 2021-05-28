import React, { Component } from "react";

import { Text, View, TextInput, Alert, Button, StyleSheet } from "react-native";
import { getDecks, getDataString, storeDeck, clearDecks } from "../utils/api";
import { Center } from "./Center";

export default class AddNewDeck extends Component {
  state = {
    name: "",
  };

  onCreateDeck = () => {
    const { name } = this.state;
    const deck = { [name]: [] };
    // console.log("new deck:", deck);
    storeDeck(deck);
    this.setState({ name: "" });
    Alert.alert("Deck added successfully! 👍");
    this.props.navigation.navigate("Feed");
    // addDeck(name);
    // const decks = getDecks();
  };
  onReadDecks = () => {
    // addDeck(name);
    getDecks();
    // const decks = getDecks();
    // console.log(this.state);
  };

  onClear = () => {
    clearDecks();
  };

  render() {
    return (
      <Center>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={"Deck name"}
          style={styles.input}
        />

        <Button
          title={"Create a new Deck"}
          style={styles.input}
          onPress={this.onCreateDeck}
        />

        <Text>Remove these buttons on submittion</Text>
        <Button
          title={"check deck"}
          style={styles.input}
          onPress={this.onReadDecks}
        />
        <Button title={"clear"} style={styles.input} onPress={this.onClear} />
      </Center>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
