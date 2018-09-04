import { StyleSheet, Platform } from 'react-native';
import { TEXT_COLOR } from '../../utils/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentText: {
    ...(Platform.OS === 'android' && { color: '#000000' }),
  },
  headerText: {
    color: TEXT_COLOR,
  },
});
