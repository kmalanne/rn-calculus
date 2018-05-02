import { observable, action } from 'mobx';
import { getOperationBySymbol } from '../utils/math';

export default class GameStore {
  @observable
  operations = { add: false, subtract: false, multiply: false, divide: false };
  @observable difficulty = 0; // 0: easy, 1: medium, 2: hard
  @observable score = 0;
  @observable isGameRunning = false;
  @observable isGameOver = false;

  @action
  toggleOperation = symbol => {
    const key = getOperationBySymbol(symbol);
    this.operations[key] = !this.operations[key];
  };

  @action
  toggleDifficulty = difficulty => {
    this.difficulty = difficulty;
  };

  get difficulty() {
    return this.difficulty;
  }

  get operations() {
    return this.operations;
  }
}
