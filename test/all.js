// -*- coding: utf-8, tab-width: 2 -*-
'use strict';

const deq = require('equal-pmb').deepEq;
const cc = require('../cc.js');

deq(cc([
  ['red', 'green', 'blue'],
  [' '],
  ['', 'fluffy '],
  ['circle', 'square'],
]), [
  'red circle',
  'red square',
  'red fluffy circle',
  'red fluffy square',
  'green circle',
  'green square',
  'green fluffy circle',
  'green fluffy square',
  'blue circle',
  'blue square',
  'blue fluffy circle',
  'blue fluffy square',
]);

deq(cc([
  [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3],
    [3.1, 3.2, 3.3],
  ],
  ['circle', 'square'],
  [
    [7.1, 7.2, 7.3],
    [8.1, 8.2, 8.3],
    [9.1, 9.2, 9.3],
  ],
]), [
  [1.1, 1.2, 1.3, 'circle', 7.1, 7.2, 7.3],
  [1.1, 1.2, 1.3, 'circle', 8.1, 8.2, 8.3],
  [1.1, 1.2, 1.3, 'circle', 9.1, 9.2, 9.3],
  [1.1, 1.2, 1.3, 'square', 7.1, 7.2, 7.3],
  [1.1, 1.2, 1.3, 'square', 8.1, 8.2, 8.3],
  [1.1, 1.2, 1.3, 'square', 9.1, 9.2, 9.3],
  [2.1, 2.2, 2.3, 'circle', 7.1, 7.2, 7.3],
  [2.1, 2.2, 2.3, 'circle', 8.1, 8.2, 8.3],
  [2.1, 2.2, 2.3, 'circle', 9.1, 9.2, 9.3],
  [2.1, 2.2, 2.3, 'square', 7.1, 7.2, 7.3],
  [2.1, 2.2, 2.3, 'square', 8.1, 8.2, 8.3],
  [2.1, 2.2, 2.3, 'square', 9.1, 9.2, 9.3],
  [3.1, 3.2, 3.3, 'circle', 7.1, 7.2, 7.3],
  [3.1, 3.2, 3.3, 'circle', 8.1, 8.2, 8.3],
  [3.1, 3.2, 3.3, 'circle', 9.1, 9.2, 9.3],
  [3.1, 3.2, 3.3, 'square', 7.1, 7.2, 7.3],
  [3.1, 3.2, 3.3, 'square', 8.1, 8.2, 8.3],
  [3.1, 3.2, 3.3, 'square', 9.1, 9.2, 9.3],
]);






console.info('+OK all tests passed.');
