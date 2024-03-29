import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../shared/utils';
import {STRINGS} from '../../shared/constants';

const styles = StyleSheet.create({
  container: (priority: any) => ({
    backgroundColor:
      priority == STRINGS.HIGH
        ? COLORS.HIGH
        : priority == STRINGS.MEDIUM
        ? COLORS.MEDIUM
        : COLORS.LOW,
    marginTop: SIZES.SPACING_HORIZONTAL,
    marginBottom: SIZES.SPACING_VERTICAL,
    borderRadius: SIZES.SPACING_HORIZONTAL,
    borderWidth: 1,
  }),
  title: {
    color: COLORS.BLACK,
    fontSize: SIZES.font24,
    fontWeight: '600',
  },
  description: {
    color: COLORS.BLACK,
    fontSize: SIZES.font15,
    width: SIZES.WIDTH * 0.6,
    fontWeight: '400',
  },
  descriptionOverDue: {
    color: COLORS.RED,
    fontSize: SIZES.font15,
    width: SIZES.WIDTH * 0.6,
    fontWeight: '400',
  },
  iconStyle: {
    margin: 0,
    paddingTop: SIZES.SPACING_HORIZONTAL / 2,
  },
  leftStyle: {
    width: SIZES.SPACING_HORIZONTAL * 2.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SIZES.SPACING_HORIZONTAL,
  },
  dateAndCategory: {
    marginHorizontal: SIZES.SPACING_HORIZONTAL * 4.6,
    marginBottom: SIZES.SPACING_VERTICAL * 2,
  },
  dateAndOverDue: {
    flexDirection: 'row',
  },
});

export default styles;
