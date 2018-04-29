import { observable, action } from 'mobx';

const getOperationBySymbol = symbol => {
  switch (symbol) {
    case '+':
      return 'plus';
    case '-':
      return 'minus';
    case 'x':
      return 'times';
    case '÷':
      return 'obulus';
    default:
      return '';
  }
};

export default class GameStore {
  @observable
  symbols = { plus: false, minus: false, obelus: false, times: false };
  @observable difficulty = 0;
  @observable score = 0;
  @observable isGameRunning = false;
  @observable isGameOver = false;

  @action
  toggleSymbol = symbol => {
    const key = getOperationBySymbol(symbol);
    this.symbols[key] = !this.symbols[key];
  };

  @action
  toggleDifficulty = difficulty => {
    this.difficulty = difficulty;
  };
}
