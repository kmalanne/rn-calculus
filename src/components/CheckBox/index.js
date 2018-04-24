import React, { Component } from 'react';
import { LayoutAnimation, TouchableWithoutFeedback, Text } from 'react-native';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import styles from './index.style';

@observer
export default class CheckBox extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  handleOnPress = () => {
    const { onChecked } = this.props;
    LayoutAnimation.spring();
    this.setState({ checked: !this.state.checked });
    if (onChecked) {
      onChecked(this.props.text);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handleOnPress}>
        <View
          style={[
            styles.checkBox,
            this.state.checked ? styles.checked : styles.unchecked,
          ]}
        >
          <Text
            style={[
              styles.text,
              this.state.checked ? styles.checkedText : styles.uncheckedText,
            ]}
          >
            {this.props.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
