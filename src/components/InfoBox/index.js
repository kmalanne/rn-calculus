import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseText from '../BaseText';
import styles from './index.style';

@observer
export default class InfoBox extends Component {
  static defaultProps = {
    header: '',
    text: '',
  };

  render() {
    const { header, text } = this.props;

    return (
      <View style={styles.container}>
        <BaseText style={[styles.headerText, styles.text]} shadow={true}>
          {header}
        </BaseText>
        <BaseText style={styles.text}>{text}</BaseText>
      </View>
    );
  }
}
