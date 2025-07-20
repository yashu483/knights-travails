'use strict';

import { Node } from './node';

const knightTravails = function knightTravails(
  currentPosition,
  desiredPosition,
) {
  if (
    currentPosition[0] < 0 ||
    currentPosition[0] > 7 ||
    currentPosition[1] < 0 ||
    currentPosition[1] > 7
  ) {
    return 'Invalid starting position. Use value between 0 - 7 for row and column';
  }
  if (
    desiredPosition[0] < 0 ||
    desiredPosition[0] > 7 ||
    desiredPosition[1] < 0 ||
    desiredPosition[1] > 7
  )
    return 'Knight cannot move at given position. Please Use value between 0 and 7 for describing row and column';
  const root = new Node(currentPosition);
};
