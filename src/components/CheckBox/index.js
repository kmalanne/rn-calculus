import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseButton from '../BaseButton';
import styles from './index.style';

@observer
export default class CheckBox extends Component {
  constructor() {
    super();
    this.state = { isChecked: false };
  }

  handleOnPressOut = () => {
    const { onChecked } = this.props;
    this.setState({ isChecked: !this.state.isChecked });
    if (onChecked) {
      onChecked(this.props.text);
    }
  };

  render() {
    const { isChecked } = this.state;

    const backgroundColor = isChecked ? '#FFE320' : '#9F6CE3';

    const textStyle = isChecked ? styles.textChecked : styles.textUnisChecked;

    return (
      <View style={styles.container}>
        <BaseButton
          text={this.props.text}
          backgroundColor={backgroundColor}
          style={[styles.button]}
          textStyle={[styles.buttonText, textStyle]}
          textShadow={true}
          onPressOut={this.handleOnPressOut}
        />
      </View>
    );
  }
}
