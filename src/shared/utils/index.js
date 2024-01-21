import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;
const scaleVertical = SCREEN_HEIGHT / 812;

export function getNormalizedSizeWithPlatformOffset(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export function getNormalizedVerticalSizeWithPlatformOffset(size) {
  const newSize = size * scaleVertical;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export function isTablet() {
  if (SCREEN_WIDTH > 550) {
    return true;
  } else {
    return false;
  }
}

export function isScreenHeight770() {
  if (SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760) {
    return true;
  } else {
    return false;
  }
}
const tablet = isTablet();
export const SIZES = {
  SPACING_VERTICAL: getNormalizedVerticalSizeWithPlatformOffset(
    tablet ? 7 : 12,
  ),
  SPACING_HORIZONTAL: getNormalizedSizeWithPlatformOffset(tablet ? 7 : 12),
  WIDTH: SCREEN_WIDTH,
  HEIGHT: SCREEN_HEIGHT,

  font12: getNormalizedSizeWithPlatformOffset(12),
  font13: getNormalizedSizeWithPlatformOffset(13),
  font14: getNormalizedSizeWithPlatformOffset(14),
  font15: getNormalizedSizeWithPlatformOffset(15),
  font16: getNormalizedSizeWithPlatformOffset(16),
  font17: getNormalizedSizeWithPlatformOffset(17),
  font18: getNormalizedSizeWithPlatformOffset(18),
  font24: getNormalizedSizeWithPlatformOffset(24),
};

export const COLORS = {
  WHITE: '#fff',
  RED: '#f00',
  BLACK: '#000',
  BORDER_COLOR: '#8956ff',
  BACKGROUND_COLOR: '#e7ddff',
  GREEN: '#0f0',
  HIGH: '#f56d52',
  MEDIUM: '#52F59B',
  LOW: '#E6C28F',
};
