import { StyleSheet } from 'react-native';
import config from '../../utils/config';

const buttonSize = config.DEVICE_WIDTH * 0.23;

export default StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
  },
  buttonText: {
    fontSize: 40,
  },
  container: {
    margin: 10,
  },
  textChecked: {
    color: '#9F6CE3',
  },
  textUnchecked: {
    color: '#FFE320',
  },
});
