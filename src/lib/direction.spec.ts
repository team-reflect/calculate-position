import test from 'ava';
import { calculateBestDirection } from './direction';
import { Dimensions, Direction, Rectangle } from './types';

test('calculateBestDirection BottomRight', (t) => {
  const viewport: Dimensions = {
    width: 800,
    height: 600,
  };

  const anchor: Rectangle = {
    left: 0,
    top: 0,
    width: 300,
    height: 300,
  };

  const dimensions: Dimensions = {
    width: 200,
    height: 200,
  };

  t.deepEqual(
    calculateBestDirection({ anchor, dimensions, viewport }),
    Direction.BottomRight
  );
});

test('calculateBestDirection BottomLeft', (t) => {
  const viewport: Dimensions = {
    width: 800,
    height: 600,
  };

  const anchor: Rectangle = {
    left: 800 - 300,
    top: 0,
    width: 300,
    height: 300,
  };

  const dimensions: Dimensions = {
    width: 200,
    height: 200,
  };

  t.deepEqual(
    calculateBestDirection({ anchor, dimensions, viewport }),
    Direction.BottomLeft
  );
});

test('calculateBestDirection TopLeft', (t) => {
  const viewport: Dimensions = {
    width: 800,
    height: 600,
  };

  const anchor: Rectangle = {
    left: 800 - 300, // Far right
    top: 600 - 300, // Far bottom
    width: 300,
    height: 300,
  };

  const dimensions: Dimensions = {
    width: 200,
    height: 200,
  };

  t.deepEqual(
    calculateBestDirection({ anchor, dimensions, viewport }),
    Direction.TopLeft
  );
});

test('calculateBestDirection TopRight', (t) => {
  const viewport: Dimensions = {
    width: 800,
    height: 600,
  };

  const anchor: Rectangle = {
    left: 0, // Far left
    top: 600 - 300, // Far bottom
    width: 300,
    height: 300,
  };

  const dimensions: Dimensions = {
    width: 200,
    height: 200,
  };

  t.deepEqual(
    calculateBestDirection({ anchor, dimensions, viewport }),
    Direction.TopRight
  );
});

test('calculateBestDirection BottomRight 2', (t) => {
  const viewport: Dimensions = {
    width: 1094,
    height: 384,
  };

  const anchor: Rectangle = {
    left: 26,
    top: 65,
    width: 10,
    height: 27,
  };

  const dimensions: Dimensions = {
    width: 208,
    height: 36,
  };

  t.deepEqual(
    calculateBestDirection({ anchor, dimensions, viewport }),
    Direction.BottomRight
  );
});
