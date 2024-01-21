import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../shared/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  addIconView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: SIZES.SPACING_HORIZONTAL * 2,
  },
});

export default styles;
