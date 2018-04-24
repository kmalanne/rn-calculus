import React, { Component } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import backgroundImg from '../../assets/images/background.jpg';
import Home from '../Home';
// import Game from '../Game';
// import GameOver from '../GameOver';
import styles from './index.style';

@inject(stores => ({
  currentScreen: stores.router.currentScreen,
}))
@observer
export default class App extends Component {
  render() {
    let content;
    switch (this.props.currentScreen) {
      case 'HOME':
        content = <Home />;
        break;
      // case 'GAME':
      //   content = <Game />;
      //   break;
      // case 'GAME_OVER':
      //   content = <GameOver />;
      //   break;
      default:
        content = <View />;
        break;
    }

    return (
      // <Text>derp</Text>
      <ImageBackground source={backgroundImg} style={styles.container}>
        <StatusBar hidden={true} />
        {content}
      </ImageBackground>
    );
  }
}
