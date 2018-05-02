import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './constants';

export const getOperationBySymbol = symbol => {
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

const extractSymbols = operations => {
  const result = [];
  if (operations[getOperationBySymbol(ADD)]) {
    result.push(ADD);
  }

  if (operations[getOperationBySymbol(SUBTRACT)]) {
    result.push(SUBTRACT);
  }

  if (operations[getOperationBySymbol(MULTIPLY)]) {
    result.push(MULTIPLY);
  }

  if (operations[getOperationBySymbol(DIVIDE)]) {
    result.push(DIVIDE);
  }

  return result;
};

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const getRandomNumberByDifficulty = difficulty => {
  switch (difficulty) {
    case 0:
      return getRandomNumber(10);
    case 1:
      return getRandomNumber(100);
    case 2:
      return getRandomNumber(1000);
    default:
      return 0;
  }
};

export const generateFormula = (operations, difficulty) => {
  const symbols = extractSymbols(operations);

  const symbol = symbols[getRandomNumber(symbols.length - 1)];

  const firstNumber = getRandomNumberByDifficulty(difficulty);
  const secondNumber = getRandomNumberByDifficulty(difficulty);

  return `${firstNumber} ${symbol} ${secondNumber}`;
};

export default {
  getOperationBySymbol,
  generateFormula,
};
