import { getRectangleOverlap } from './rectangle';
import { Dimensions, Direction, DirectionPoint, Rectangle } from './types';

/**
 * Calculates the coords for all the available directions to a given
 * anchor and dimensions.
 *
 * ### Example (es module)
 * ```js
 * import getDirections from 'calculate-position'
 *
 * const anchor = popupAnchorElement.getBoundingClientRect()
 * const dimensions = {width: popupWidth, height: popupHeight}
 *
 * console.log(getDirections({anchor, dimensions}))
 * // => {Direction.BottomRight: {left: 100, top: 100}...}
 * ```
 *
 * @param anchor - anchor position that calculations will be based of
 * @param dimensions - width/height dimensions of popup element
 */
export const getDirections = ({
  anchor,
  dimensions,
}: {
  anchor: Rectangle;
  dimensions: Dimensions;
}): DirectionPoint => {
  return {
    [Direction.BottomRight]: {
      left: anchor.left + anchor.width,
      top: anchor.top + anchor.height,
    },
    [Direction.BottomLeft]: {
      left: anchor.left - dimensions.width,
      top: anchor.top + anchor.height,
    },
    [Direction.TopRight]: {
      left: anchor.left + anchor.width,
      top: anchor.top - dimensions.height,
    },
    [Direction.TopLeft]: {
      left: anchor.left - dimensions.width,
      top: anchor.top - dimensions.height,
    },
  };
};

/**
 * Returns the current window's dimensions. If it's unavilable returns 0
 *
 * ### Example (es module)
 * ```js
 * import getWindowDimensions from 'calculate-position'
 * *
 * console.log(getWindowDimensions()
 * // => {width: 800, height: 600}
 * ```
 */
export const getWindowDimensions = (): Dimensions => {
  if (typeof window == 'undefined') {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

/**
 * Calculates the best direction (e.g. BottomLeft) for a given
 * anchor and dimensions
 *
 * ### Example (es module)
 * ```js
 * import calculateBestDirection from 'calculate-position'
 *
 * const anchor = popupAnchorElement.getBoundingClientRect()
 * const dimensions = {width: popupWidth, height: popupHeight}
 *
 * console.log(calculateBestDirection({anchor, dimensions}))
 * // => Direction.TopLeft
 * ```
 *
 * @param anchor - anchor position that calculations will be based of
 * @param dimensions - width/height dimensions of popup element
 * @param viewport - (optional) viewport rectangle (defaults to window)
 */
export const calculateBestDirection = ({
  anchor,
  dimensions,
  viewport = getWindowDimensions(),
  directions = getDirections({
    anchor,
    dimensions,
  }),
}: {
  anchor: Rectangle;
  dimensions: Dimensions;
  viewport?: Dimensions;
  directions?: DirectionPoint;
}) => {
  const viewportRectangle: Rectangle = {
    ...viewport,
    left: 0,
    top: 0,
  };

  let bestDirection: Direction = Direction.BottomLeft;
  let bestArea = 0;

  for (const direction in directions) {
    const directionRectangle: Rectangle = {
      ...directions[direction],
      ...dimensions,
    };

    const area = getRectangleOverlap(directionRectangle, viewportRectangle);

    if (area > bestArea) {
      bestArea = area;
      bestDirection = direction as Direction;
    }
  }

  return bestDirection;
};
