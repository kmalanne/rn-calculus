import { StyleSheet } from 'react-native';
import config from '../../utils/config';

const buttonWidth = config.DEVICE_WIDTH * 0.95;
const buttonHeight = config.DEVICE_HEIGHT * 0.13;

export default StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonHeight,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 40,
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  menuContainer: {
    flexDirection: 'column',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    margin: 5,
  },
});
