package main

import (
	"fmt"
)

type Solution struct {
}

func (solution *Solution) lengthOfLongestSubstring(s string) int {

	if len(s) <= 1 {
		return len(s)
	}

	left := 0
	maxCounter := 0
	seen := make(map[byte]int)

	for right := 0; right < len(s); right++ {

		if index, found := seen[s[right]]; found && index >= left {
			left = index + 1
		}

		seen[s[right]] = right
		localCounter := right - left + 1

		if localCounter > maxCounter {
			maxCounter = localCounter
		}
	}

	return maxCounter
}

func main() {
	solution := &Solution{}

	// Test Case 1: "abcabcbb" - Expected: 3 (abc)
	testStr1 := "abcabcbb"
	result1 := solution.lengthOfLongestSubstring(testStr1)
	fmt.Printf("Test Case 1: \"%s\" - Length of longest substring: %d, Expected: %d\n",
		testStr1, result1, 3)

	// Test Case 2: "bbbbb" - Expected: 1 (b)
	testStr2 := "bbbbb"
	result2 := solution.lengthOfLongestSubstring(testStr2)
	fmt.Printf("Test Case 2: \"%s\" - Length of longest substring: %d, Expected: %d\n",
		testStr2, result2, 1)

	// Test Case 3: "pwwkew" - Expected: 3 (wke)
	testStr3 := "pwwkew"
	result3 := solution.lengthOfLongestSubstring(testStr3)
	fmt.Printf("Test Case 3: \"%s\" - Length of longest substring: %d, Expected: %d\n",
		testStr3, result3, 3)

	// Test Case 4: "ababaaaab" - Expected: 2 (ab)
	testStr4 := "ababaaaab"
	result4 := solution.lengthOfLongestSubstring(testStr4)
	fmt.Printf("Test Case 4: \"%s\" - Length of longest substring: %d, Expected: %d\n",
		testStr4, result4, 2)

	// Test Case 5: "" - Expected: 0 (empty string)
	testStr5 := ""
	result5 := solution.lengthOfLongestSubstring(testStr5)
	fmt.Printf("Test Case 5: \"%s\" - Length of longest substring: %d, Expected: %d\n",
		testStr5, result5, 0)

	// Test Case 6: "abba" - Expected: 2 (ab or ba)
	testStr6 := "abba"
	result6 := solution.lengthOfLongestSubstring(testStr6)
	fmt.Printf("Test Case 6: \"%s\" - Length of longest substring: %d, Expected: %d\n",
		testStr6, result6, 2)
}
