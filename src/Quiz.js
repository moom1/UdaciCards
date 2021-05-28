import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Card from "./Card";
import { Center } from "./Center";

export default class Quiz extends Component {
  state = {
    score: 0,
    cards: "",
    showAnswer: false,
  };

  componentDidMount() {
    this.setState({ cards: [...this.props.route.params.cards] });
  }

  handleCorrect = () => {
    const { cards } = this.state;
    cards.shift();
    this.setState({ score: this.state.score + 1 });
    this.setState({ showAnswer: false });
  };
  handleIncorrect = () => {
    const { cards } = this.state;
    cards.shift();
    this.setState({ score: this.state.score });
    this.setState({ showAnswer: false });
  };

  handleShowAnswer = () => {
    this.setState({ showAnswer: true });
  };

  handleReset = () => {
    this.setState({
      cards: [...this.props.route.params.cards],
      score: 0,
      showAnswer: false,
    });
  };

  render() {
    const { name } = this.props.route.params;
    const { score, cards, showAnswer } = this.state;
    return (
      <Center>
        {cards.length > 0 ? (
          <Center>
            <Text>Questions left: {cards.length} </Text>
            <Card
              question={cards[0].question}
              answer={cards[0].answer}
              showAnswer={showAnswer}
              handleAnswer={this.handleShowAnswer}
            />
            <Button title="Correct" onPress={this.handleCorrect} />
            <Button title="Incorrect" onPress={this.handleIncorrect} />
          </Center>
        ) : (
          <Center>
            <Text>
              Congrats! You answered {score}/
              {this.props.route.params.cards.length}
            </Text>

            <Button title="Reset" onPress={this.handleReset} />
            {/* <Button title="GoBack" onPress={this.handleGoBack} /> */}
          </Center>
        )}
      </Center>
    );
  }
}
