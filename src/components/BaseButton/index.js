import React, { Component } from 'react';
import { LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseText from '../BaseText';
import styles from './index.style';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { shadeColor, MAIN_COLOR } from '../../utils/color';
import sound from '../../utils/sound';

@observer
export default class BaseButton extends Component {
  static defaultProps = {
    shadowDepth: 6,
    backgroundColor: MAIN_COLOR,
    disabledBackgroundColor: '#9A9A9A',
    text: '',
    textShadow: false,
    isEnabled: true,
    isSinglePress: false,
    hasIcon: false,
    icon: undefined,
  };

  constructor() {
    super();
    this.state = { isTouched: false, isPressed: false };
  }

  handlePressIn = () => {
    const { isEnabled, isSinglePress, onPressIn } = this.props;

    if (!isEnabled || (isSinglePress && this.state.isPressed)) {
      return;
    }

    sound.playClickSound();
    LayoutAnimation.spring();
    this.setState({ isTouched: true });

    if (onPressIn) {
      onPressIn();
    }
  };

  handlePressOut = () => {
    const { isEnabled, isSinglePress, onPressOut } = this.props;

    if (!isEnabled || (isSinglePress && this.state.isPressed)) {
      return;
    }

    this.setState({ isTouched: false, isPressed: true });

    if (onPressOut) {
      onPressOut();
    }
  };

  render() {
    const {
      isEnabled,
      shadowDepth,
      backgroundColor,
      disabledBackgroundColor,
      text,
      style,
      textStyle,
      textShadow,
    } = this.props;

    const { isTouched } = this.state;

    const bgColor = isEnabled ? backgroundColor : disabledBackgroundColor;

    const borderRadius = DEVICE_WIDTH * 0.028;
    const halfDepth = shadowDepth / 2;

    const buttonStyle = {
      marginTop: isTouched ? shadowDepth : halfDepth,
      backgroundColor: bgColor,
      borderRadius,
    };

    const shadowDepthStyle = {
      marginTop: -borderRadius,
      height: isTouched ? halfDepth + borderRadius : shadowDepth + borderRadius,
      backgroundColor: shadeColor(bgColor, -0.3),
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
    };

    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        delayPressIn={0}
      >
        <View>
          <View style={[styles.button, style, buttonStyle]}>
            <BaseText style={[styles.text, textStyle]} shadow={textShadow}>
              {text}
            </BaseText>
          </View>
          <View style={[styles.shadowDepth, shadowDepthStyle]} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
