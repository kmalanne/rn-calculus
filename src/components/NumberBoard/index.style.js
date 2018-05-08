import { StyleSheet } from 'react-native';
import config from '../../utils/config';

const buttonSize = config.DEVICE_WIDTH * 0.4;

export default StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
  },
  buttonContainer: {
    margin: 5,
  },
  buttonText: {
    fontSize: 40,
  },
  numberBoardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  numberBoardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
