import { Dimensions, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('screen');

export const normalize = (
  size: number,
  based: 'width' | 'height' = 'width',
) => {
  let isTab = DeviceInfo.isTablet();

  if (isTab) {
    const wscale = SCREEN_WIDTH / 600;
    const hscale = SCREEN_HEIGHT / 800;
    const normalizePixel = based === 'height' ? hscale * size : wscale * size;
    return Math.round(PixelRatio.roundToNearestPixel(normalizePixel));
  } else {
    const wscale = SCREEN_WIDTH / 375;
    const hscale = SCREEN_HEIGHT / 812;
    const normalizePixel = based === 'height' ? hscale * size : wscale * size;
    return Math.round(PixelRatio.roundToNearestPixel(normalizePixel));
  }
};
