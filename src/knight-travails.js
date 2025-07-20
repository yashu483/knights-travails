'use strict';

import { Node } from './node';

// pathFound will be used for stopping recursion being used on all the other neighbor nodes to find a shortest path after any of the neighbor has already find the shortest path.
let pathFound = false;

// given multiple arrays, returns shortest one
function shortestArray(...arrays) {
  console.log(arrays);
  return arrays.reduce((shortest, current) =>
    current.length < shortest.length ? current : shortest,
  );
}
// traverseChessBoard is helper function for knightTravails(), created to avoid extra checking that knightTravails() could do at the beginning on each iteration.
const traverseChessBoard = function traverseChessBoard(root, desiredPosition) {
  if (pathFound === true) return;
  const path = [];
  if (root.vertex === desiredPosition) {
    path.push(root.vertex);
    pathFound = true;
    return path;
  }
  const neighbors = {};
  const allPaths = [];
  for (let i = 0; i < root.neighbors.length; i++) {
    neighbors[0] = new Node(root.neighbors[i]);
  }

  for (const [key, vertex] of Object.entries(neighbors)) {
    allPaths.push(traverseChessBoard(vertex));
  }
  const concatenatedArr = path.concat(shortestArray(allPaths));
  return concatenatedArr;
};

// knightTravails() takes two args. First for current position  and second for where to travel. Returns an array containing shortest path.
const knightTravails = function knightTravails(
  currentPosition,
  desiredPosition,
) {
  // reset pathFound to false if its true due to previous use
  pathFound = false;
  if (
    currentPosition[0] < 0 ||
    currentPosition[0] > 7 ||
    currentPosition[1] < 0 ||
    currentPosition[1] > 7
  ) {
    return 'Invalid starting position. Use value between 0 - 7 for describing row and column';
  }
  if (
    desiredPosition[0] < 0 ||
    desiredPosition[0] > 7 ||
    desiredPosition[1] < 0 ||
    desiredPosition[1] > 7
  ) {
    return 'Knight cannot move at given position. Please Use value between 0 and 7 for describing row and column';
  }
  if (currentPosition === desiredPosition) return currentPosition;
  const root = new Node(currentPosition);
  return traverseChessBoard(root, desiredPosition);
};

export { knightTravails };
