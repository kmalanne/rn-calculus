import { observable, action, computed } from 'mobx';
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../utils/constants';
import { getRandomNumber, roundToNearest, shuffleArray } from '../utils/math';

const getOperationBySymbol = symbol => {
  switch (symbol) {
    case ADD:
      return 'add';
    case SUBTRACT:
      return 'subtract';
    case MULTIPLY:
      return 'multiply';
    case DIVIDE:
      return 'divide';
    default:
      return '';
  }
};

const getSymbols = operations => {
  const symbols = [];
  if (operations.add) {
    symbols.push(ADD);
  }

  if (operations.subtract) {
    symbols.push(SUBTRACT);
  }

  if (operations.multiply) {
    symbols.push(MULTIPLY);
  }

  if (operations.divide) {
    symbols.push(DIVIDE);
  }

  return symbols;
};

const getMaxByDifficulty = difficulty => {
  switch (difficulty) {
    case 0:
      return 10;
    case 1:
      return 100;
    case 2:
      return 1000;
    default:
      return 0;
  }
};

const createNumbers = (symbol, max) => {
  const max2 =
    max === 1000 && (symbol === MULTIPLY || symbol === DIVIDE) ? 100 : max;

  let firstNumber = getRandomNumber(max);
  let secondNumber = getRandomNumber(max2);

  if (symbol === SUBTRACT && firstNumber < secondNumber) {
    const tmp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = tmp;
  }

  if (symbol === DIVIDE && firstNumber % secondNumber !== 0) {
    do {
      firstNumber = getRandomNumber(max);
      secondNumber = getRandomNumber(max2);
    } while (firstNumber % secondNumber !== 0);
  }

  return { firstNumber, secondNumber };
};

const calculateAnswer = (symbol, firstNumber, secondNumber) => {
  switch (symbol) {
    case ADD:
      return firstNumber + secondNumber;
    case SUBTRACT:
      return firstNumber - secondNumber;
    case MULTIPLY:
      return firstNumber * secondNumber;
    case DIVIDE:
      return firstNumber / secondNumber;
    default:
      return 0;
  }
};

const createAnswerOptions = answer => {
  const options = [];
  options.push(answer);

  let max = 0;
  if (answer <= 10) {
    max = 10;
  } else if (answer <= 100) {
    max = roundToNearest(answer, 10);
  } else {
    max = roundToNearest(answer, 100);
  }

  do {
    const number = getRandomNumber(max);

    if (options.indexOf(number) === -1) {
      options.push(number);
    }
  } while (options.length !== 4);

  const shuffled = shuffleArray(options);

  return shuffled;
};

export default class GameStore {
  @observable
  operations = { add: false, subtract: false, multiply: false, divide: false };
  @observable difficulty = 0; // 0: easy, 1: medium, 2: hard

  @observable question = '';
  @observable answer = 0;
  @observable answerOptions = [];
  @observable answerResult = undefined;

  @observable score = 0;

  @observable timer;
  @observable timerValue = 60;

  @observable isGameRunning = false;

  get difficulty() {
    return this.difficulty;
  }

  get operations() {
    return this.operations;
  }

  get question() {
    return this.question;
  }

  get answer() {
    return this.answer;
  }

  get answerOptions() {
    return this.answerOptions;
  }

  get answerResult() {
    return this.answerResult;
  }

  get isGameRunning() {
    return this.isGameRunning;
  }

  @computed
  get isOperationSelected() {
    const { add, subtract, multiply, divide } = this.operations;

    return add || subtract || multiply || divide;
  }

  @action
  toggleOperation = symbol => {
    const key = getOperationBySymbol(symbol);
    this.operations[key] = !this.operations[key];
  };

  @action
  toggleDifficulty = difficulty => {
    this.difficulty = difficulty;
  };

  @action
  createQuestion = () => {
    const symbols = getSymbols(this.operations);
    const symbol = symbols[getRandomNumber(symbols.length - 1)];

    const max = getMaxByDifficulty(this.difficulty);

    const { firstNumber, secondNumber } = createNumbers(symbol, max);

    this.answer = calculateAnswer(symbol, firstNumber, secondNumber);
    this.answerOptions = createAnswerOptions(this.answer);

    this.question = `${firstNumber} ${symbol} ${secondNumber}`;
  };

  @action
  startGame = () => {
    this.isGameRunning = true;
    this.timerValue = 60;
    this.score = 0;
    this.startTimer();
    this.createQuestion();
  };

  @action
  startTimer = () => {
    clearInterval(this.timer);

    this.timer = setInterval(() => {
      this.timerValue -= 1;

      if (this.timerValue <= 0) {
        clearInterval(this.timer);
        this.isGameRunning = false;
      }
    }, 1000);
  };

  @action
  handleAnswer = answer => {
    if (answer === this.answer) {
      this.score += 1;
      this.timerValue += 1;
      this.answerResult = true;
    } else {
      this.answerResult = false;
      this.timerValue -= 2;
    }

    setTimeout(() => {
      this.answerResult = undefined;
      this.createQuestion();
    }, 500);
  };

  @action
  resetGame = () => {
    this.difficulty = 0;
    this.operations = {
      add: false,
      subtract: false,
      multiply: false,
      divide: false,
    };
  };
}
