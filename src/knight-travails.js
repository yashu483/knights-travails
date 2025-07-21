'use strict';

import { Node } from './node';

// given a node, finds path to the starting position using creator node chain.
// creator node: every time a node will move to its neighbor so that neighbor node will be created, so who helps the creation of neighbor node is refer as creator
const path = function path(node, list = []) {
  if (node.creator === null) {
    list.unshift(node.vertex);
    return list;
  } else {
    list.unshift(node.vertex);
    return path(node.creator, list);
  }
};

// helper function to check same arrays
const sameArrays = function sameArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((item, index) => {
    return item === arr2[index];
  });
};

// given starting and ending position, returns the node for ending co-ordinates
const findEnd = function findEnd(vertex, desiredPosition) {
  const node = new Node(vertex);
  let currentRoot = node;
  let que = [currentRoot];
  const visitedNodes = [currentRoot.vertex];
  let count = 0;
  let pathFound = false;
  let endPositionNode = null;
  while (!pathFound) {
    count += 1;
    if (que[0] === null) {
      que.shift();
      currentRoot = que[0];
      continue;
    }
    currentRoot.neighborNodes = [];
    currentRoot.neighbors.forEach((item) => {
      count += 1;
      if (
        !visitedNodes.some((element) => {
          return sameArrays(element, item);
        })
      ) {
        const newNode = new Node(item, currentRoot);
        currentRoot.neighborNodes.push(newNode);
        visitedNodes.push(newNode.vertex);
        que.push(newNode);
      }
    });
    pathFound = currentRoot.neighbors.some((item) => {
      count += 1;
      return sameArrays(item, desiredPosition);
    });
    if (pathFound) {
      const desiredNode = currentRoot.neighborNodes.filter((item) => {
        count += 1;
        if (sameArrays(item.vertex, desiredPosition)) return true;
        else {
          return false;
        }
      });
      endPositionNode = desiredNode[0];
      return endPositionNode;
    } else {
      que.shift();
      currentRoot = que[0];
    }
  }
  console.log(`Total iteration: ${count}`);
  return endPositionNode;
};
const knightMoves = function knightMoves(start, end) {
  if (
    start[0] < 0 ||
    start[0] > 7 ||
    start[1] < 0 ||
    start[1] > 7 ||
    end[0] < 0 ||
    end[0] > 7 ||
    end[1] < 0 ||
    end[1] > 7
  ) {
    alert(
      `Invalid starting or ending co-ordinates. Please provide value between 0 to 7`,
    );
    return;
  }
  const getEndNode = findEnd(start, end);
  return path(getEndNode);
};

export { findEnd, path, sameArrays, knightMoves };
