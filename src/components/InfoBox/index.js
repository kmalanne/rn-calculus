import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseText from '../BaseText';
import styles from './index.style';

@observer
export default class InfoBox extends Component {
  static defaultProps = {
    headerText: '',
    contentText: '',
  };

  render() {
    const { headerText, contentText } = this.props;

    return (
      <View style={styles.container}>
        <BaseText style={[styles.headerText, styles.text]} shadow={true}>
          {headerText}
        </BaseText>
        <BaseText style={styles.text}>{contentText}</BaseText>
      </View>
    );
  }
}
