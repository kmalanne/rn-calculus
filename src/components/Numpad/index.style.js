import { StyleSheet } from 'react-native';
import config from '../../utils/config';

const buttonSize = config.DEVICE_WIDTH * 0.22;
const fullWidth = config.DEVICE_WIDTH * 0.72;

export default StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
  },
  buttonText: {
    fontSize: 40,
  },
  buttonContainer: {
    margin: 5,
  },
  numpadContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  numpadRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lastRow: {
    width: fullWidth,
  },
});
