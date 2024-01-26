import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../shared/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: SIZES.SPACING_HORIZONTAL * 2,
  },
  addIconView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: SIZES.SPACING_HORIZONTAL * 2,
  },
  cameraIconView: {
    position: 'absolute',
    bottom: SIZES.SPACING_HORIZONTAL * 6,
    right: 0,
    margin: SIZES.SPACING_HORIZONTAL * 2,
  },
});

export default styles;
