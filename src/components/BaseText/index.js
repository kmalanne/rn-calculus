import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-animatable';
import styles from './index.style';
import config from '../../utils/config';

const BaseText = props => {
  const { style, shadow, ...otherProps } = props;
  const fontSize = StyleSheet.flatten(style).fontSize || 20;
  const scaledFontSize = Math.round(fontSize * config.DEVICE_WIDTH / 375);

  const shadowStyle = shadow
    ? {
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowRadius: 0,
        textShadowOffset: { height: 3, width: 0 },
      }
    : {};

  return (
    <Text
      style={[styles.text, style, shadowStyle, { fontSize: scaledFontSize }]}
      {...otherProps}
    >
      {props.children}
    </Text>
  );
};

export default BaseText;
