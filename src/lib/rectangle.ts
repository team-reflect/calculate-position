import { Rectangle } from './types';

/**
 * Calculates area overlap of two rectangles,
 *
 * ### Example (es module)
 * ```js
 * import getDirections from 'calculate-position'
 *
 * const rectA = {
 *  width: 100,
 *  height: 100,
 *  left: 0,
 *  top: 0
 * }
 *
 * const rectB = {
 *  width: 50,
 *  height: 50,
 *  left: 0,
 *  top: 0
 * }
 *
 * console.log(getRectangleOverlap(rectA, rectB)
 * // => 2500
 * ```
 *
 * @param anchor - anchor position that calculations will be based of
 * @param dimensions - width/height dimensions of popup element
 */
export const getRectangleOverlap = (
  rectangleA: Rectangle,
  rectangleB: Rectangle
) => {
  const xOverlap = Math.max(
    0,
    Math.min(
      rectangleA.left + rectangleA.width,
      rectangleB.left + rectangleB.width
    ) - Math.max(rectangleA.left, rectangleB.left)
  );

  const yOverlap = Math.max(
    0,
    Math.min(
      rectangleA.top + rectangleA.height,
      rectangleB.top + rectangleB.height
    ) - Math.max(rectangleA.top, rectangleB.top)
  );

  return xOverlap * yOverlap;
};
