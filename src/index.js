'use strict';

import { Node } from './node';

import { knightTravails } from './knight-travails';

const node = new Node([3, 3]);
window.myNode = node;
window.Node = Node;
window.knightTravails = knightTravails;
