import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';

const buttonSize = DEVICE_WIDTH * 0.23;

export default StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
  },
  buttonText: {
    fontSize: 20,
  },
  container: {
    margin: 10,
  },
});
