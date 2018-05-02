import React, { Component } from 'react';
// import { LayoutAnimation } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import CheckBox from '../../components/CheckBox';
import BaseText from '../../components/BaseText';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import BaseButton from '../../components/BaseButton';
import styles from './index.style';
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../../utils/constants';

@inject(stores => ({
  routeToGame: stores.router.routeToGame,
  toggleOperation: stores.game.toggleOperation,
  toggleDifficulty: stores.game.toggleDifficulty,
  difficulty: stores.game.difficulty,
}))
@observer
export default class Home extends Component {
  handleSymbolPress = symbol => {
    this.props.toggleOperation(symbol);
  };

  handleDifficultyPress = difficulty => {
    this.props.toggleDifficulty(difficulty);
  };

  handleStartPress = () => {
    this.props.routeToGame();
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.menuContainer}>
          <View>
            <BaseText style={styles.text}>Choose calculus</BaseText>
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
            <BaseText style={styles.text}>Choose difficulty</BaseText>
            <RadioButtonGroup
              style={styles.menuRow}
              radioButtons={[
                { text: 'Easy' },
                { text: 'Medium' },
                { text: 'Hard' },
              ]}
              selectedIndex={this.props.difficulty}
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
            isSinglePress={true}
          />
        </View>
      </View>
    );
  }
}
