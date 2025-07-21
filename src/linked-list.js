'use strict';

// customized linked-list for this (Knights Travails) project
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value = null) {
    this.root = new Node(value);
  }
  append(value, root = this.root) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else if (root.next === null) {
      root.next = node;
    } else {
      this.append(node, root.next);
    }
  }
  prepend(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      const tempRoot = this.root;
      this.root = node;
      this.root.next = tempRoot;
    }
  }
  get size() {
    let count = 0;
    if (this.root === null) return count;
    const loop = function loop(root = this.root) {
      count += 1;
      if (root.next === null) return count;
      else {
        return loop(root.next);
      }
    };
    return loop();
  }
  allValues(root = this.root, arr = []) {
    if (this.root === null) return null;
    if (root.next === null) {
      arr.push(root.data);
      return arr;
    } else {
      arr.push(root.data);
      return this.allValues(root.next, arr);
    }
  }
  shift() {
    let currentRoot = this.root;
    this.root = currentRoot.next;
    currentRoot.next = null;
    return currentRoot;
  }

  // customized method to use for getting route shortest path
  route(root = this.root, arr = []) {
    if (this.root === null) return null;
    if (root.next === null) {
      arr.push(root.data);
      return arr;
    } else {
      arr.push(root.data.vertex);
      return arr;
    }
  }
}

export { LinkedList };
