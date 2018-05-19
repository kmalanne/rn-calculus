import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseButton from '../BaseButton';
import styles from './index.style';
import { MAIN_COLOR } from '../../utils/color';

@observer
class NumberButton extends Component {
  static defaultProps = {
    number: 0,
  };

  handleOnPressOut = () => {
    const { number, onPress } = this.props;

    if (onPress) {
      onPress(number);
    }
  };

  render() {
    const { buttonStyle, number } = this.props;

    const backgroundColor = MAIN_COLOR;

    return (
      <View style={styles.buttonContainer}>
        <BaseButton
          text={number.toString()}
          backgroundColor={backgroundColor}
          style={[styles.button, buttonStyle]}
          textStyle={styles.buttonText}
          textShadow={true}
          onPressOut={this.handleOnPressOut}
        />
      </View>
    );
  }
}

@observer
export default class NumberBoard extends Component {
  onPress = number => {
    const { onPress } = this.props;

    if (onPress) {
      onPress(number);
    }
  };

  render() {
    const { numbers } = this.props;

    return (
      <View style={styles.numberBoardContainer}>
        <View style={styles.numberBoardRow}>
          <NumberButton onPress={this.onPress} number={numbers[0]} />
          <NumberButton onPress={this.onPress} number={numbers[1]} />
        </View>
        <View style={styles.numberBoardRow}>
          <NumberButton onPress={this.onPress} number={numbers[2]} />
          <NumberButton onPress={this.onPress} number={numbers[3]} />
        </View>
      </View>
    );
  }
}
