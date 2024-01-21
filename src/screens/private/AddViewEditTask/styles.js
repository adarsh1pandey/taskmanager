import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../shared/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.SPACING_HORIZONTAL * 2,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: SIZES.SPACING_HORIZONTAL,
  },
  text: {
    color: COLORS.BLACK,
  },
  errorText: {
    color: COLORS.RED,
  },
});

export default styles;
