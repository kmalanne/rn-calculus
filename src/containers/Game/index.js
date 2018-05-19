import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
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
  answerResult: stores.game.answerResult,
  score: stores.game.score,
  timer: stores.game.timerValue,
  isGameRunning: stores.game.isGameRunning,
}))
@observer
export default class Game extends Component {
  componentDidMount = async () => {
    if (this.containerRef) {
      this.containerRef.bounceInRight(1000).then(() => {
        LayoutAnimation.spring();
      });
    }
    this.props.startGame();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isGameRunning && !this.props.isGameRunning) {
      this.containerRef.fadeOutLeft(400).then(() => {});
      this.props.routeToGameOver();
    }
  }

  handleButtonPress = number => {
    this.props.handleAnswer(number);
  };

  render() {
    const { answerOptions, answerResult, question, score, timer } = this.props;

    let text = '';
    let textStyle = {};
    if (answerResult === undefined) {
      text = question;
    } else {
      text = answerResult ? 'CORRECT' : 'WRONG';
      textStyle = answerResult
        ? styles.correctResultText
        : styles.wrongResultText;
    }

    return (
      <View
        style={styles.gameContainer}
        ref={ref => {
          this.containerRef = ref;
        }}
      >
        <View style={styles.statsContainer}>
          <InfoBox headerText={'SCORE'} contentText={score} />
          <InfoBox headerText={'TIME LEFT'} contentText={timer} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textBoxContainer}>
            <BaseText style={[styles.text, textStyle]}>{text}</BaseText>
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
