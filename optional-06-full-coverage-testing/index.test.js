// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum returns the correct sum for positive numbers', (t) => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 15), 25);
});

test('sum returns 0 for negative numbers', (t) => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test('sum returns 0 for non-number inputs', (t) => {
  assert.strictEqual(sum('1', 2), 0);
  assert.strictEqual(sum(1, '2'), 0);
  assert.strictEqual(sum(null, 2), 0);
  assert.strictEqual(sum(1, undefined), 0);
  assert.strictEqual(sum({}, 2), 0);
});

test('sum returns 0 when both inputs are non-numbers', (t) => {
  assert.strictEqual(sum('1', '2'), 0);
  assert.strictEqual(sum(null, undefined), 0);
});

test('sum returns 0 when one or both inputs are missing', (t) => {
  assert.strictEqual(sum(1), 0);
  assert.strictEqual(sum(), 0);
});
