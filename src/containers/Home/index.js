import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import CheckBox from '../../components/CheckBox';
import BaseText from '../../components/BaseText';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import BaseButton from '../../components/BaseButton';
import styles from './index.style';
import {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  EASY,
  MEDIUM,
  HARD,
} from '../../utils/constants';

@inject(stores => ({
  routeToGame: stores.router.routeToGame,
  resetGame: stores.game.resetGame,
  toggleOperation: stores.game.toggleOperation,
  toggleDifficulty: stores.game.toggleDifficulty,
  difficulty: stores.game.difficulty,
  isOperationSelected: stores.game.isOperationSelected,
}))
@observer
export default class Home extends Component {
  componentDidMount = () => {
    this.props.resetGame();
  };

  handleSymbolPress = symbol => {
    this.props.toggleOperation(symbol);
  };

  handleDifficultyPress = difficulty => {
    this.props.toggleDifficulty(difficulty);
  };

  handleStartPress = async () => {
    if (this.containerRef) {
      await this.containerRef.fadeOutLeft(400);
    }
    this.props.routeToGame();
  };

  render() {
    const { isOperationSelected, difficulty } = this.props;

    return (
      <View style={styles.homeContainer}>
        <View style={styles.menuContainer}>
          <View>
            <BaseText style={styles.text} shadow={true}>
              Choose calculus
            </BaseText>
            <View style={styles.menuRow}>
              <CheckBox text={ADD} onChecked={this.handleSymbolPress} />
              <CheckBox text={SUBTRACT} onChecked={this.handleSymbolPress} />
            </View>
            <View style={styles.menuRow}>
              <CheckBox text={MULTIPLY} onChecked={this.handleSymbolPress} />
              <CheckBox text={DIVIDE} onChecked={this.handleSymbolPress} />
            </View>
          </View>
          <View>
            <BaseText style={styles.text} shadow={true}>
              Choose difficulty
            </BaseText>
            <RadioButtonGroup
              style={styles.menuRow}
              radioButtons={[{ text: EASY }, { text: MEDIUM }, { text: HARD }]}
              selectedIndex={difficulty}
              onChecked={this.handleDifficultyPress}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <BaseButton
            text={'Start game'}
            style={styles.button}
            textStyle={styles.buttonText}
            textShadow={true}
            onPressOut={this.handleStartPress}
            isEnabled={isOperationSelected}
          />
        </View>
      </View>
    );
  }
}
