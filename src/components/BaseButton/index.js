import React, { Component } from 'react';
import { LayoutAnimation, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseText from '../BaseText';
import styles from './index.style';
import config from '../../utils/config';
import { shadeColor } from '../../utils/color';

@observer
export default class BaseButton extends Component {
  static defaultProps = {
    shadowDepth: 6,
    backgroundColor: '#9F6CE3',
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

  buttonRef = null;

  getbuttonRef = () => this.buttonRef;

  handlePressIn = () => {
    const { isEnabled, isSinglePress, onPressIn } = this.props;

    if (!isEnabled || (isSinglePress && this.state.isPressed)) {
      return;
    }

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
      shadowDepth,
      backgroundColor,
      text,
      style,
      textStyle,
      textShadow,
      ...otherProps
    } = this.props;

    const { isTouched } = this.state;

    const borderRadius = config.DEVICE_WIDTH * 0.028;
    const halfDepth = shadowDepth / 2;

    const buttonStyle = {
      marginTop: isTouched ? shadowDepth : halfDepth,
      backgroundColor,
      borderRadius,
    };

    const shadowDepthStyle = {
      marginTop: -borderRadius,
      height: isTouched ? halfDepth + borderRadius : shadowDepth + borderRadius,
      backgroundColor: shadeColor(backgroundColor, -0.3),
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
    };

    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        delayPressIn={0}
      >
        <View
          ref={ref => {
            this.buttonRef = ref;
          }}
          {...otherProps}
        >
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
