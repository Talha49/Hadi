import { sWidth, sHeight } from '../utils/responsive';

export const Spacing = {
  xs: sHeight(4),
  s: sHeight(8),
  m: sHeight(16),
  l: sHeight(24),
  xl: sHeight(32),
  xxl: sHeight(40),
  
  borderRadius: {
    s: sWidth(4),
    m: sWidth(8),
    l: sWidth(12),
    xl: sWidth(20),
    round: 999,
  },
  
  layout: {
    gutter: sWidth(20), // 20px lateral margins as per Figma
    gap: sHeight(15),    // 15px gap between elements as per Figma
  },
};
