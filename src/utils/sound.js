const Sound = require('react-native-sound');

const initializeSound = sound =>
  new Sound(sound, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.warn('Failed to load the sound', error); // eslint-disable-line no-console
    }
  });

const playSound = sound => {
  sound.getCurrentTime(currentTime => {
    if (currentTime === 0) {
      sound.play();
    } else {
      sound.stop();
      sound.play();
    }
  });
};

const clickSound = initializeSound('click.wav');
const correctAnswerSound = initializeSound('correct.wav');
const wrongAnswerSound = initializeSound('wrong.wav');

export default {
  playClickSound: () => playSound(clickSound),
  playCorrectAnswerSound: () => playSound(correctAnswerSound),
  playWrongAnswerSound: () => playSound(wrongAnswerSound),
};
