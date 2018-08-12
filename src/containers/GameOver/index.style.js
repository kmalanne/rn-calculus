import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { TEXT_COLOR } from '../../utils/color';

const buttonSize = DEVICE_WIDTH * 0.23;

export default StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
  },
  buttonContainer: {
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  scoreText: {
    fontSize: 30,
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
    marginBottom: 100,
  },
  text: {
    fontWeight: 'bold',
    color: TEXT_COLOR,
  },
  titleText: {
    fontSize: 45,
  },
});
