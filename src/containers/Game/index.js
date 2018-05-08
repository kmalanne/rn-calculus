import React, { Component } from 'react';
// import { LayoutAnimation } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import BaseText from '../../components/BaseText';
import InfoBox from '../../components/InfoBox';
import NumberBoard from '../../components/NumberBoard';
import styles from './index.style';

@inject(stores => ({
  routeToGameOver: stores.router.routeToGameOver,
  startGame: stores.game.startGame,
  handleAnswer: stores.game.handleAnswer,
  question: stores.game.question,
  answerOptions: stores.game.answerOptions,
  score: stores.game.score,
  timer: stores.game.timerValue,
}))
@observer
export default class Game extends Component {
  componentDidMount = () => {
    this.props.startGame();
  };

  handleButtonPress = number => {
    this.props.handleAnswer(number);
  };

  render() {
    const { answerOptions, question, score, timer } = this.props;

    return (
      <View style={styles.gameContainer}>
        <View style={styles.statsContainer}>
          <InfoBox header={'SCORE'} text={score} />
          <InfoBox header={'TIME LEFT'} text={timer} />
        </View>
        <View style={styles.questionContainer}>
          <View style={styles.questionTextContainer}>
            <BaseText style={styles.text}>{question}</BaseText>
          </View>
        </View>
        <View style={styles.numberBoardContainer}>
          <NumberBoard
            onPress={this.handleButtonPress}
            numbers={answerOptions.slice()}
          />
        </View>
      </View>
    );
  }
}
