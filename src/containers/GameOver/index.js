import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import BaseText from '../../components/BaseText';
import BaseButton from '../../components/BaseButton';
import styles from './index.style';

@inject(stores => ({
  routeToGame: stores.router.routeToGame,
  routeToHome: stores.router.routeToHome,
  score: stores.game.score,
}))
@observer
export default class Home extends Component {
  handleHomePress = () => {
    this.props.routeToHome();
  };

  handleRetryPress = () => {
    this.props.routeToGame();
  };

  render() {
    const { score } = this.props;

    return (
      <View style={styles.gameOverContainer}>
        <BaseText style={[styles.text, styles.titleText]} shadow={true}>
          GAME OVER
        </BaseText>
        <BaseText style={[styles.text, styles.scoreText]} shadow={true}>
          Your score: {score}
        </BaseText>
        <View style={styles.actionContainer}>
          <View style={styles.buttonContainer}>
            <BaseButton
              text={'Retry'}
              style={styles.button}
              textStyle={styles.buttonText}
              textShadow={true}
              onPressOut={this.handleRetryPress}
            />
          </View>
          <View style={styles.buttonContainer}>
            <BaseButton
              text={'Home'}
              style={styles.button}
              textStyle={styles.buttonText}
              textShadow={true}
              onPressOut={this.handleHomePress}
            />
          </View>
        </View>
      </View>
    );
  }
}
