import {StyleSheet, TextBase} from 'react-native';
import {COLORS, SIZES} from '../../shared/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RED,
  },
  camera: {
    height: SIZES.HEIGHT,
    width: SIZES.WIDTH,
  },
  captureButton: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    height: SIZES.WIDTH * 0.1,
    width: SIZES.WIDTH * 0.2,
    backgroundColor: COLORS.WHITE,
    borderRadius: SIZES.SPACING_HORIZONTAL,
  },
  text: {
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  imageStyle: {
    position: 'absolute',
    height: SIZES.HEIGHT,
    width: SIZES.WIDTH,
  },
  activityIndicatorStyle: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
  },
  boldText: {
    fontSize: SIZES.font24,
    textAlign: 'center',
    fontWeight: '800',
  },
});

export default styles;
