import { observable } from 'mobx';
import { HOME, GAME, GAME_OVER } from '../utils/constants';

export default class RouterStore {
  @observable currentScreen = HOME;

  routeToHome = () => {
    this.currentScreen = HOME;
  };

  routeToGame = () => {
    this.currentScreen = GAME;
  };

  routeToGameOver = () => {
    this.currentScreen = GAME_OVER;
  };
}
