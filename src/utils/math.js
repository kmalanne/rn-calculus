export const getRandomNumber = max =>
  Math.floor(Math.random() * Math.floor(max));

export const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

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
