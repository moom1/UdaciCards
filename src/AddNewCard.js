import React, { Component } from "react";

import { Text, View, TextInput, Alert, Button, StyleSheet } from "react-native";
import { getDecks, getDataString, storeCard, clearDecks } from "../utils/api";
import { Center } from "./Center";

export default class AddNewCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  onCreateCard = () => {
    const { question, answer } = this.state;
    const card = {
      question,
      answer,
      name: this.props.route.params.name,
      cards: this.props.route.params.cards,
    };
    storeCard(card);
    Alert.alert("Card added successfully! 👍");
    this.props.navigation.navigate("deck", {
      name: this.props.route.params.name,
      cards: [...this.props.route.params.cards, { question, answer }],
    });
  };

  render() {
    return (
      <Center>
        <TextInput
          value={this.state.question}
          onChangeText={(question) => this.setState({ question })}
          placeholder={"Question"}
          style={styles.input}
        />
        <TextInput
          value={this.state.answer}
          onChangeText={(answer) => this.setState({ answer })}
          placeholder={"Answer"}
          style={styles.input}
        />

        <Button
          title={"Add a new card"}
          style={styles.input}
          onPress={this.onCreateCard}
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
});
