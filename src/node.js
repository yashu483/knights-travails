'use strict';

class Node {
  constructor(array) {
    this.vertex = array;

    // neighbors word is used for vertices describing possible positions on chessboard the knight could travel from given current position
    this.neighbors = this.#findNeighbors(this.vertex);
  }

  // private methods

  #findNeighbors(vertex) {
    let neighbors = [];
    const rowIndex = vertex[0];
    const columnIndex = vertex[vertex.length - 1];
    for (let i = 0; i < 8; i++) {
      switch (i) {
        case 0:
          {
            const traverseColumn = columnIndex + 2;
            const traverseRow = rowIndex - 1;
            if (traverseColumn > 7 || traverseRow < 0) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
        case 1:
          {
            const traverseColumn = columnIndex + 1;
            const traverseRow = rowIndex - 2;
            if (traverseColumn > 7 || traverseRow < 0) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
        case 2:
          {
            const traverseColumn = columnIndex - 1;
            const traverseRow = rowIndex - 2;
            if (traverseColumn < 0 || traverseRow < 0) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
        case 3:
          {
            const traverseColumn = columnIndex - 2;
            const traverseRow = rowIndex - 1;
            if (traverseColumn < 0 || traverseRow < 0) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
        case 4:
          {
            const traverseColumn = columnIndex - 2;
            const traverseRow = rowIndex + 1;
            if (traverseColumn < 0 || traverseRow > 7) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
        case 5:
          {
            const traverseColumn = columnIndex - 1;
            const traverseRow = rowIndex + 2;
            if (traverseColumn < 0 || traverseRow > 7) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
        case 6:
          {
            const traverseColumn = columnIndex + 1;
            const traverseRow = rowIndex + 2;
            if (traverseColumn > 7 || traverseRow > 7) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
        case 7:
          {
            const traverseColumn = columnIndex + 2;
            const traverseRow = rowIndex + 1;
            if (traverseColumn > 7 || traverseRow > 7) break;
            neighbors.push([traverseColumn, traverseRow]);
          }
          break;
      }
    }
    return neighbors;
  }
}

export { Node };
