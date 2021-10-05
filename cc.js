// -*- coding: utf-8, tab-width: 2 -*-
'use strict';

const cartesian = require('fast-cartesian-latest-cjs-pmb');


function conc(parts) {
  const p1 = parts[0];
  if (p1.concat) { return p1.concat(...parts.slice(1)); }
  if (Buffer.isBuffer(p1)) { return Buffer.concat(...parts); }
  throw new TypeError('Unsupported element type in first list: ' + p1);
}


function ensureArray(list) { return (Array.isArray(list) ? list : [list]); }


const EX = function fastCartesianConcat(inputs) {
  return cartesian(inputs.map(ensureArray)).map(conc);
};


// NB: We keep traditional CJS style as long as ESlint configs need it,
//     to allow package `eslint-config-nodejs-pmb` to require() this.
module.exports = EX;
