import { StyleSheet, Platform } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';

const buttonSize = DEVICE_WIDTH * 0.4;
const numberBoardContainerBottomMargin = Platform.OS === 'ios' ? 0 : 10;

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
    marginBottom: numberBoardContainerBottomMargin,
  },
  numberBoardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
