import { observable, action } from 'mobx';
import math from '../utils/math';

export default class RouterStore {
  @observable
  symbols = { plus: false, minus: false, obelus: false, times: false };
  @observable score = 0;
  @observable isGameRunning = false;
  @observable isGameOver = false;

  @action
  toggleSymbol = symbol => {
    const key = math.getOperationBySymbol(symbol);
    this.symbols[key] = !this.symbols[key];
  };
}
