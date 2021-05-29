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
    storeDeck(deck);
    this.setState({ name: "" });
    Alert.alert("Deck added successfully! 👍");
    // this.props.navigation.navigate("Feed");
    this.props.navigation.navigate("deck", {
      name,
      cards: [],
    });
  };

  //Extra feature to delete everything just because
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

        <View style={styles.btn}>
          <Button
            title={"Create a new Deck"}
            style={styles.input}
            onPress={this.onCreateDeck}
          />
        </View>

        <Button
          title={"Clear EVERYTHING"}
          style={styles.clear}
          onPress={this.onClear}
        />
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
  btn: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
});
