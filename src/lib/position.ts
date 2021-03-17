import {
  calculateBestDirection,
  getDirections,
  getWindowDimensions,
} from './direction';
import { Dimensions, Point, Rectangle } from './types';

/**
 * Calculates the best position (left/top coords) for a given
 * anchor and dimensions
 *
 * ### Example (es module)
 * ```js
 * import calculateBestPosition from 'calculate-position'
 *
 * const anchor = popupAnchorElement.getBoundingClientRect()
 * const dimensions = {width: popupWidth, height: popupHeight}
 *
 * console.log(calculateBestPosition({anchor, dimensions}))
 * // => {left: 200, top: 100}
 * ```
 *
 * @param anchor - anchor position that calculations will be based of
 * @param dimensions - width/height dimensions of popup element
 * @param viewport - optional viewport rectangle (defaults to window)
 */
export const calculateBestPosition = ({
  anchor,
  dimensions,
  viewport = getWindowDimensions(),
}: {
  anchor: Rectangle;
  dimensions: Dimensions;
  viewport?: Dimensions;
}): Point => {
  const directions = getDirections({ anchor, dimensions });

  const direction = calculateBestDirection({
    anchor,
    dimensions,
    viewport,
    directions,
  });

  return directions[direction];
};
