export interface Dimensions {
  width: number;
  height: number;
}

export interface Point {
  left: number;
  top: number;
}

export enum Direction {
  BottomRight = 'BottomRight',
  BottomLeft = 'BottomLeft',
  BottomCenter = 'BottomCenter',
  TopRight = 'TopRight',
  TopLeft = 'TopLeft',
  TopCenter = 'TopCenter',
}

export interface Rectangle {
  width: number;
  height: number;
  top: number;
  left: number;
}

export type DirectionPoint = {
  [key: string]: Point;
};
