import { moderateScale, sHeight } from '../utils/responsive';

export const Typography = {
  size: {
    xss: moderateScale(10),
    xs: moderateScale(12),
    s: moderateScale(14),
    m: moderateScale(16),
    l: moderateScale(18),
    xl: moderateScale(24),
    xxl: moderateScale(28),
    xxxl: moderateScale(32),
  },
  weight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
  },
  lineHeight: {
    tight: sHeight(18),
    normal: sHeight(24),
    loose: sHeight(32),
  },
};
