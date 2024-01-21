import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../shared/utils';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: SIZES.SPACING_HORIZONTAL,
    paddingVertical: SIZES.SPACING_VERTICAL,
    paddingHorizontal: SIZES.SPACING_HORIZONTAL,
    borderColor: COLORS.BORDER_COLOR,
  },
  text: {
    color: COLORS.BLACK,
  },
});

export default styles;
