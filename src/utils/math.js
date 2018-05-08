export const getRandomNumber = max =>
  Math.floor(Math.random() * Math.floor(max));

/* eslint-disable */
export const shuffleArray = arr => {
  const array = arr.slice(0);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
/* eslint-enable */

export const roundToNearest = (number, toRound) =>
  Math.round(number / toRound) * toRound;

export default {
  getRandomNumber,
  shuffleArray,
  roundToNearest,
};
