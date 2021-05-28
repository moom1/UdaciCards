import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Center } from "./Center";

export default class Card extends Component {
  render() {
    const { question, answer } = this.props;
    return (
      <Center>
        <Text> {question} </Text>

        {this.props.showAnswer ? (
          <Text> {answer} </Text>
        ) : (
          <Button title="Show answer" onPress={this.props.handleAnswer} />
        )}
      </Center>
    );
  }
}
