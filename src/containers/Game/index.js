import React, { Component } from 'react';
import { LayoutAnimation, Text } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import BaseText from '../../components/BaseText';
// import BaseButton from '../../components/BaseButton';
import Numpad from '../../components/Numpad';
import styles from './index.style';
import { generateFormula } from '../../utils/math';

@inject(stores => ({
  routeToGameOver: stores.router.routeToGameOver,
  difficulty: stores.game.difficulty,
  operations: stores.game.operations,
}))
@observer
export default class Game extends Component {
  constructor() {
    super();
    this.state = { answerText: '', formula: '' };
  }

  componentDidMount = () => {
    const { operations, difficulty } = this.props;
    this.setState({ formula: generateFormula(operations, difficulty) });
  };

  handleNumpadPress = number => {
    const { answerText } = this.state;

    if (answerText.length > 8) {
      return;
    }

    this.setState({
      answerText: this.state.answerText.concat(number.toString()),
    });
  };

  render() {
    return (
      <View style={styles.gameContainer}>
        <View style={styles.formulaContainer}>
          <BaseText style={styles.text}>{this.state.formula}</BaseText>
        </View>
        <View style={styles.answerContainer}>
          <BaseText style={styles.text}>{'Your answer:'}</BaseText>
          <Text style={styles.answerTextContainer}>
            <BaseText style={styles.text}>{'= '}</BaseText>
            <BaseText style={styles.text}>{this.state.answerText}</BaseText>
          </Text>
        </View>
        <View style={styles.numpadContainer}>
          <Numpad onPress={this.handleNumpadPress} />
        </View>
      </View>
    );
  }
}
