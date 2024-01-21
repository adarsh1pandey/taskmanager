import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../shared/utils';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.HEIGHT * 0.37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.BLACK,
    fontSize: SIZES.font16,
    fontWeight: '600',
  },
});

export default styles;
