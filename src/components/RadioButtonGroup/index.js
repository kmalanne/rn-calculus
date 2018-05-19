import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseButton from '../BaseButton';
import styles from './index.style';
import { MAIN_COLOR, SECONDARY_COLOR } from '../../utils/color';

@observer
class RadioButton extends Component {
  static defaultProps = {
    isSelected: false,
    text: '',
  };

  handleOnPressOut = () => {
    const { index, onPress } = this.props;

    if (onPress) {
      onPress(index);
    }
  };

  render() {
    const { isSelected, text } = this.props;

    const backgroundColor = isSelected ? SECONDARY_COLOR : MAIN_COLOR;

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

@observer
export default class RadioButtonGroup extends Component {
  static defaultProps = {
    radioButtons: [],
  };

  constructor(props) {
    super(props);
    this.state = { selectedIndex: this.props.selectedIndex };
  }

  handleRadioButtonPress = index => {
    const { onChecked } = this.props;

    this.setState({ selectedIndex: index });

    if (onChecked) {
      onChecked(index);
    }
  };

  render() {
    const { radioButtons, style } = this.props;

    const buttons = radioButtons.map((radioButton, index) => (
      <RadioButton
        key={index}
        onPress={this.handleRadioButtonPress}
        text={radioButton.text}
        index={index}
        isSelected={this.state.selectedIndex === index}
      />
    ));

    return <View style={style}>{buttons}</View>;
  }
}
