import React, { Component } from 'react';
import { ImageBackground, StatusBar, Platform } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import bgImgIos from '../../assets/images/bg_ios.jpg';
import bgImgAndroid from '../../assets/images/bg_android.jpg';
import Home from '../Home';
import Game from '../Game';
import GameOver from '../GameOver';
import styles from './index.style';
import { HOME, GAME, GAME_OVER } from '../../utils/constants';

const bgImg = Platform.OS === 'ios' ? bgImgIos : bgImgAndroid;

@inject(stores => ({
  currentScreen: stores.router.currentScreen,
}))
@observer
export default class App extends Component {
  render() {
    let content;
    switch (this.props.currentScreen) {
      case HOME:
        content = <Home />;
        break;
      case GAME:
        content = <Game />;
        break;
      case GAME_OVER:
        content = <GameOver />;
        break;
      default:
        content = <View />;
        break;
    }

    return (
      <ImageBackground source={bgImg} style={styles.container}>
        <StatusBar hidden={true} />
        {content}
      </ImageBackground>
    );
  }
}
