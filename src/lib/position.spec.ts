import test from 'ava';
import { calculateBestPosition } from './position';

test('calculateBestPosition 1', (t) => {
  const viewport = {
    width: 800,
    height: 600,
  };

  const anchor = {
    left: 0,
    top: 0,
    width: 300,
    height: 300,
  };

  const dimensions = {
    width: 200,
    height: 200,
  };

  t.deepEqual(calculateBestPosition({ anchor, dimensions, viewport }), {
    left: 300,
    top: 300,
  });
});

test('calculateBestPosition 2', (t) => {
  const viewport = {
    width: 400,
    height: 600,
  };

  const anchor = {
    left: 200,
    top: 100,
    width: 0,
    height: 30,
  };

  const dimensions = {
    width: 300,
    height: 200,
  };

  t.deepEqual(calculateBestPosition({ anchor, dimensions, viewport }), {
    left: 50,
    top: 130,
  });
});
