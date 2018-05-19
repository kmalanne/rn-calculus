import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseButton from '../BaseButton';
import styles from './index.style';
import { MAIN_COLOR, SECONDARY_COLOR } from '../../utils/color';

@observer
export default class CheckBox extends Component {
  static defaultProps = {
    text: '',
  };

  constructor() {
    super();
    this.state = { isChecked: false };
  }

  handleOnPressOut = () => {
    const { onChecked, text } = this.props;

    this.setState({ isChecked: !this.state.isChecked });

    if (onChecked) {
      onChecked(text);
    }
  };

  render() {
    const { text } = this.props;
    const { isChecked } = this.state;

    const backgroundColor = isChecked ? SECONDARY_COLOR : MAIN_COLOR;

    return (
      <View style={styles.container}>
        <BaseButton
          text={text}
          backgroundColor={backgroundColor}
          style={styles.button}
          textStyle={styles.buttonText}
          textShadow={true}
          onPressOut={this.handleOnPressOut}
        />
      </View>
    );
  }
}
