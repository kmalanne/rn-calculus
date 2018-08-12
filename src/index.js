import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';
import SplashScreen from 'react-native-splash-screen';

import App from './containers/App';
import GameStore from './stores/game';
import RouterStore from './stores/router';

const gameStore = new GameStore();
const routerStore = new RouterStore();

class TheGame extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider game={gameStore} router={routerStore}>
        <App />
      </Provider>
    );
  }
}

export default TheGame;
