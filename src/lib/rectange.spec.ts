import test from 'ava';
import { getRectangleOverlap } from './rectangle';
import { Rectangle } from './types';

test('rectange non-overlap', (t) => {
  const rectangeA: Rectangle = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  };

  const rectangeB = {
    left: 0,
    top: 100,
    width: 100,
    height: 100,
  };

  t.is(getRectangleOverlap(rectangeA, rectangeB), 0);
});

test('rectange negative non-overlap', (t) => {
  const rectangeA: Rectangle = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  };

  const rectangeB = {
    left: -100,
    top: 0,
    width: 100,
    height: 100,
  };

  t.is(getRectangleOverlap(rectangeA, rectangeB), 0);
});

test('rectange overlap', (t) => {
  const rectangeA: Rectangle = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  };

  const rectangeB = {
    left: 0,
    top: 50,
    width: 100,
    height: 100,
  };

  t.is(getRectangleOverlap(rectangeA, rectangeB), 50 * 100);
});

test('rectange negative overlap', (t) => {
  const rectangeA: Rectangle = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  };

  const rectangeB = {
    left: -50,
    top: 0,
    width: 100,
    height: 100,
  };

  t.is(getRectangleOverlap(rectangeA, rectangeB), 50 * 100);
});
