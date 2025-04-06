function reverse(x: number): number {
  const BIT_INT_RANGE = 2 ** 31;
  let newX = 0;

  while (x != 0) {
    newX = newX * 10 + (x % 10);

    if (newX < BIT_INT_RANGE * -1 || newX > BIT_INT_RANGE - 1) {
      return 0;
    }

    x = Math.trunc(x / 10);
  }

  return newX;
}

// Test Case 1: 123 - Expected: 321
const result1 = reverse(123);
const expected1 = 321;
console.assert(
  result1 === expected1,
  `Expected ${expected1} but got ${result1}`
);
console.log(`Test Case 1: 123 - Result: ${result1}, Expected: ${expected1}`);

// Test Case 2: -123 - Expected: -321
const result2 = reverse(-123);
const expected2 = -321;
console.assert(
  result2 === expected2,
  `Expected ${expected2} but got ${result2}`
);
console.log(`Test Case 2: -123 - Result: ${result2}, Expected: ${expected2}`);

// Test Case 3: 120 - Expected: 21
const result3 = reverse(120);
const expected3 = 21;
console.assert(
  result3 === expected3,
  `Expected ${expected3} but got ${result3}`
);
console.log(`Test Case 3: 120 - Result: ${result3}, Expected: ${expected3}`);

// Test Case 4: 0 - Expected: 0
const result4 = reverse(0);
const expected4 = 0;
console.assert(
  result4 === expected4,
  `Expected ${expected4} but got ${result4}`
);
console.log(`Test Case 4: 0 - Result: ${result4}, Expected: ${expected4}`);

// Test Case 5: 1534236469 - Expected: 0 (overflow)
const result5 = reverse(1534236469);
const expected5 = 0;
console.assert(
  result5 === expected5,
  `Expected ${expected5} but got ${result5}`
);
console.log(
  `Test Case 5: 1534236469 - Result: ${result5}, Expected: ${expected5} (overflow)`
);
