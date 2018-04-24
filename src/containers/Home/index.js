import React, { Component } from 'react';
// import { LayoutAnimation } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import CheckBox from '../../components/CheckBox';
import styles from './index.style';

@inject(stores => ({
  routeToGame: stores.router.routeToGame,
  toggleSymbol: stores.game.toggleSymbol,
  symbols: stores.game.symbols,
}))
@observer
export default class Home extends Component {
  handleCheckBoxPress = symbol => {
    this.props.toggleSymbol(symbol);
  };
  // _handleButtonPress = async () => {
  //   this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
  //   if (this._headerRef && this._bodyRef) {
  //     await Promise.all([
  //       this._headerRef.fadeOutLeft(400),
  //       this._bodyRef.fadeOutRight(400),
  //     ]);
  //   }
  //   this.props.navigateToPlayground();
  // };

  render() {
    return (
      <View style={styles.symbols}>
        <View style={styles.symbolRow}>
          <CheckBox text={'+'} onChecked={this.handleCheckBoxPress} />
          <CheckBox text={'-'} onChecked={this.handleCheckBoxPress} />
        </View>
        <View style={styles.symbolRow}>
          <CheckBox text={'x'} onChecked={this.handleCheckBoxPress} />
          <CheckBox text={'÷'} onChecked={this.handleCheckBoxPress} />
        </View>
      </View>
    );
  }
}
