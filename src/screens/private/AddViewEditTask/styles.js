import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../shared/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.SPACING_HORIZONTAL * 2,
    backgroundColor: COLORS.WHITE,
    paddingTop: SIZES.SPACING_VERTICAL * 2,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: SIZES.SPACING_HORIZONTAL,
    marginBottom: SIZES.SPACING_VERTICAL * 2,
  },
  text: {
    color: COLORS.BLACK,
    marginBottom: SIZES.SPACING_VERTICAL / 2,
  },
  errorText: {
    color: COLORS.RED,
  },
  picker: {
    color: COLORS.BLACK,
  },
  buttonStyle: {
    marginTop: SIZES.SPACING_VERTICAL * 2,
    paddingVertical: SIZES.SPACING_VERTICAL / 2,
  },
});

export default styles;
