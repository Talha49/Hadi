import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Figma Design Dimensions
const GUIDELINE_BASE_WIDTH = 402;
const GUIDELINE_BASE_HEIGHT = 874;

/**
 * Scaled width based on screen width.
 * Best for: Width, Margin, Padding Horizontal, Left, Right
 */
export const scaleWidth = (size) => (SCREEN_WIDTH / GUIDELINE_BASE_WIDTH) * size;

/**
 * Scaled height based on screen height.
 * Best for: Height, Padding Vertical, Top, Bottom, Line Height
 */
export const scaleHeight = (size) => (SCREEN_HEIGHT / GUIDELINE_BASE_HEIGHT) * size;

/**
 * Moderated scaling for font sizes and border radius.
 * factor: 0.5 (default) allows for subtle scaling that doesn't blow up on tablets.
 */
export const moderateScale = (size, factor = 0.5) => size + (scaleWidth(size) - size) * factor;

/**
 * Pixel-perfect integer scaling
 */
export const sWidth = (size) => Math.round(scaleWidth(size));
export const sHeight = (size) => Math.round(scaleHeight(size));

export { SCREEN_WIDTH, SCREEN_HEIGHT };
