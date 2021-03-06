import { Dimensions, Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const { height, width } = Dimensions.get('window');

const ANDROID_STATUSBAR = 24;
export const DEVICE_HEIGHT = IS_ANDROID ? height - ANDROID_STATUSBAR : height;
export const DEVICE_WIDTH = width;

export default {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
};
