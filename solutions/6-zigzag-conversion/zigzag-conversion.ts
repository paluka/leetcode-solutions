function convert(s: string, numRows: number): string {
  if (!s || !s.length || numRows <= 0) {
    return "";
  } else if (s.length <= 2 || numRows === 1) {
    return s;
  }

  const stringArray = Array.from({ length: numRows }, () => "");

  let direction = -1;
  let currentRow = 0;
  let charIndex = 0;

  while (charIndex < s.length) {
    stringArray[currentRow] += s.charAt(charIndex++);

    if (direction > 0) {
      currentRow--;
    } else {
      currentRow++;
    }

    if (currentRow >= numRows) {
      currentRow = numRows - 2;
      direction = 1;
    } else if (currentRow < 0) {
      currentRow = 1;
      direction = -1;
    }
  }

  return stringArray.join("");
}

// Test Case 1: "PAYPALISHIRING" with 3 rows - Expected: "PAHNAPLSIIGYIR"
const result1 = convert("PAYPALISHIRING", 3);
const expected1 = "PAHNAPLSIIGYIR";
console.assert(
  result1 === expected1,
  `Expected "${expected1}" but got "${result1}"`
);
console.log(
  `Test Case 1: "PAYPALISHIRING" with 3 rows - Result: ${result1}, Expected: "${expected1}"`
);

// Test Case 2: "PAYPALISHIRING" with 4 rows - Expected: "PINALSIGYAHRPI"
const result2 = convert("PAYPALISHIRING", 4);
const expected2 = "PINALSIGYAHRPI";
console.assert(
  result2 === expected2,
  `Expected "${expected2}" but got "${result2}"`
);
console.log(
  `Test Case 2: "PAYPALISHIRING" with 4 rows - Result: ${result2}, Expected: "${expected2}"`
);

// Test Case 3: "A" with 1 row - Expected: "A"
const result3 = convert("A", 1);
const expected3 = "A";
console.assert(
  result3 === expected3,
  `Expected "${expected3}" but got "${result3}"`
);
console.log(
  `Test Case 3: "A" with 1 row - Result: ${result3}, Expected: "${expected3}"`
);
