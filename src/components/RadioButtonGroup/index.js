import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { observer } from 'mobx-react/native';
import BaseButton from '../BaseButton';
import styles from './index.style';

@observer
class RadioButton extends Component {
  handleOnPressOut = () => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(this.props.index, this.props.text);
    }
  };

  render() {
    const { isSelected } = this.props;

    const backgroundColor = isSelected ? '#FFE320' : '#9F6CE3';

    const textStyle = isSelected ? styles.textSelected : styles.textUnselected;

    return (
      <View style={styles.container}>
        <BaseButton
          text={this.props.text}
          backgroundColor={backgroundColor}
          style={[styles.button]}
          textStyle={[styles.buttonText, textStyle]}
          onPressOut={this.handleOnPressOut}
        />
      </View>
    );
  }

  // render() {
  //   return (
  //     <TouchableWithoutFeedback onPress={this.handleOnPress}>
  //       <View
  //         style={[
  //           styles.radioButton,
  //           this.props.isSelected ? styles.selected : styles.unselected,
  //         ]}
  //       >
  //         <BaseText
  //           style={[
  //             styles.text,
  //             this.props.isSelected
  //               ? styles.selectedText
  //               : styles.unselectedText,
  //           ]}
  //         >
  //           {this.props.text}
  //         </BaseText>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
  // }
}

@observer
export default class RadioButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: this.props.selectedIndex };
  }

  onSelect = (index, text) => {
    this.setState({ selectedIndex: index });
    if (this.props.onSelect) {
      this.props.onSelect(index, text);
    }
  };

  render() {
    const radioButtons = this.props.radioButtons.map((radioButton, index) => (
      <RadioButton
        key={index}
        onSelect={this.onSelect}
        text={radioButton.text}
        index={index}
        isSelected={this.state.selectedIndex === index}
      />
    ));

    return <View style={this.props.style}>{radioButtons}</View>;
  }
}
