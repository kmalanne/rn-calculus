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

export default {
  getOperationBySymbol,
};
