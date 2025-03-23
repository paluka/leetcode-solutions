function lengthOfLongestSubstring(s: string): number {
  if (!s || !s.length) {
    return 0;
  } else if (s.length === 1) {
    return 1;
  }

  let left = 0;
  let maxLength = 0;
  let seen = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (seen.has(char) && seen.get(char)! >= left) {
      left = seen.get(char)! + 1;
    }

    seen.set(char, right);
    const length = right - left + 1;

    maxLength = Math.max(length, maxLength);
  }

  return maxLength;
}

// Test cases
console.log("Running test cases for lengthOfLongestSubstring:");

// Test Case 1: "abcabcbb" - Expected: 3 (abc)
const testStr1 = "abcabcbb";
const result1 = lengthOfLongestSubstring(testStr1);
console.log(
  `Test Case 1: "${testStr1}" - Length of longest substring: ${result1}, Expected: 3`
);

// Test Case 2: "bbbbb" - Expected: 1 (b)
const testStr2 = "bbbbb";
const result2 = lengthOfLongestSubstring(testStr2);
console.log(
  `Test Case 2: "${testStr2}" - Length of longest substring: ${result2}, Expected: 1`
);

// Test Case 3: "pwwkew" - Expected: 3 (wke)
const testStr3 = "pwwkew";
const result3 = lengthOfLongestSubstring(testStr3);
console.log(
  `Test Case 3: "${testStr3}" - Length of longest substring: ${result3}, Expected: 3`
);

// Test Case 4: "ababaaaab" - Expected: 2 (ab)
const testStr4 = "ababaaaab";
const result4 = lengthOfLongestSubstring(testStr4);
console.log(
  `Test Case 4: "${testStr4}" - Length of longest substring: ${result4}, Expected: 2`
);

// Test Case 5: "" - Expected: 0 (empty string)
const testStr5 = "";
const result5 = lengthOfLongestSubstring(testStr5);
console.log(
  `Test Case 5: "${testStr5}" - Length of longest substring: ${result5}, Expected: 0`
);

// Test Case 6: "abba" - Expected: 2 (ab or ba)
const testStr6 = "abba";
const result6 = lengthOfLongestSubstring(testStr6);
console.log(
  `Test Case 6: "${testStr6}" - Length of longest substring: ${result6}, Expected: 2`
);
