import { observable } from 'mobx';

export default class RouterStore {
  @observable currentScreen = 'HOME';

  routeToHome = () => {
    this.currentScreen = 'HOME';
  };

  routeToGame = () => {
    this.currentScreen = 'GAME';
  };

  routeToGameOver = () => {
    this.currentScreen = 'GAME_OVER';
  };
}
