import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseButton from '../BaseButton';
import styles from './index.style';

@observer
class NumpadButton extends Component {
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

    const backgroundColor = '#9F6CE3';

    return (
      <View style={styles.buttonContainer}>
        <BaseButton
          text={number.toString()}
          backgroundColor={backgroundColor}
          style={[styles.button, buttonStyle]}
          textStyle={[styles.buttonText]}
          textShadow={true}
          onPressOut={this.handleOnPressOut}
        />
      </View>
    );
  }
}

@observer
export default class Numpad extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: this.props.selectedIndex };
  }

  onPress = number => {
    const { onPress } = this.props;

    if (onPress) {
      onPress(number);
    }
  };

  render() {
    return (
      <View style={styles.numpadContainer}>
        <View style={styles.numpadRow}>
          <NumpadButton key={7} onPress={this.onPress} number={7} />
          <NumpadButton key={8} onPress={this.onPress} number={8} />
          <NumpadButton key={9} onPress={this.onPress} number={9} />
        </View>
        <View style={styles.numpadRow}>
          <NumpadButton key={4} onPress={this.onPress} number={4} />
          <NumpadButton key={5} onPress={this.onPress} number={5} />
          <NumpadButton key={6} onPress={this.onPress} number={6} />
        </View>
        <View style={styles.numpadRow}>
          <NumpadButton key={1} onPress={this.onPress} number={1} />
          <NumpadButton key={2} onPress={this.onPress} number={2} />
          <NumpadButton key={3} onPress={this.onPress} number={3} />
        </View>
        <View style={styles.numpadRow}>
          <NumpadButton
            key={0}
            onPress={this.onPress}
            number={0}
            buttonStyle={styles.lastRow}
          />
        </View>
      </View>
    );
  }
}
