function longestPalindrome(s: string): string {
  let longestLength = 0;
  let leftLongest = 0;
  let rightLongest = 0;

  for (let index = 0; index < s.length; index++) {
    const {
      passFlag: passFlagOne,
      length: lengthOne,
      left: leftOne,
      right: rightOne,
    } = expand(index, index, s);

    if (passFlagOne && lengthOne > longestLength) {
      longestLength = lengthOne;
      leftLongest = leftOne;
      rightLongest = rightOne;
    }

    const {
      passFlag: passFlagTwo,
      length: lengthTwo,
      left: leftTwo,
      right: rightTwo,
    } = expand(index, index + 1, s);

    if (passFlagTwo && lengthTwo > longestLength) {
      longestLength = lengthTwo;
      leftLongest = leftTwo;
      rightLongest = rightTwo;
    }
  }

  return s.substring(leftLongest, rightLongest + 1);
}

function expand(
  left: number,
  right: number,
  s: string
): { passFlag: boolean; length: number; left: number; right: number } {
  let passFlag = false;

  while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
    passFlag = true;
    left--;
    right++;
  }

  left++;
  right--;

  const length = right - left + 1;

  return {
    passFlag,
    length,
    left,
    right,
  };
}

// Test Case 1: "babad" - Expected: "bab" or "aba"
const result1 = longestPalindrome("babad");
const expected1a = "bab";
const expected1b = "aba";
console.assert(
  result1 === expected1a || result1 === expected1b,
  `Expected "${expected1a}" or "${expected1b}" but got "${result1}"`
);
console.log(
  `Test Case 1: "babad" - Result: "${result1}", Expected: "${expected1a}" or "${expected1b}"`
);

// Test Case 2: "cbbd" - Expected: "bb"
const result2 = longestPalindrome("cbbd");
const expected2 = "bb";
console.assert(
  result2 === expected2,
  `Expected "${expected2}" but got "${result2}"`
);
console.log(
  `Test Case 2: "cbbd" - Result: "${result2}", Expected: "${expected2}"`
);

// Test Case 3: "a" - Expected: "a"
const result3 = longestPalindrome("a");
const expected3 = "a";
console.assert(
  result3 === expected3,
  `Expected "${expected3}" but got "${result3}"`
);
console.log(
  `Test Case 3: "a" - Result: "${result3}", Expected: "${expected3}"`
);

// Test Case 4: "racecar" - Expected: "racecar"
const result4 = longestPalindrome("racecar");
const expected4 = "racecar";
console.assert(
  result4 === expected4,
  `Expected "${expected4}" but got "${result4}"`
);
console.log(
  `Test Case 4: "racecar" - Result: "${result4}", Expected: "${expected4}"`
);
