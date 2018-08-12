import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils/dimensions';
import { TEXT_COLOR } from '../../utils/color';

const buttonWidth = DEVICE_WIDTH * 0.95;
const buttonHeight = DEVICE_HEIGHT * 0.13;

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
    justifyContent: 'flex-start',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: TEXT_COLOR,
    textAlign: 'center',
    margin: 5,
  },
});
