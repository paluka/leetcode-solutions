# leetcode-solutions

## Table of Contents

- [Repository Structure](#repository-structure)
- [Purpose](#purpose)
- [Running Solutions](#running-solutions)

To help me practice my skills in TypeScript, Python, Java, Go, and Rust, I have been working on solutions to LeetCode problems in each of those languages

Each directory in the solutions folder represents a problem in LeetCode. Each of these directories will have 5 programming language files:

- `.ts` for TypeScript
- `.py` for Python
- `.java` for Java
- `.go` for Go
- `.rs` for Rust

Each problem directory is prefixed with the problem number and uses kebab-case for problem names (e.g., `1-two-sum/`). This makes it easier to locate problems and maintain consistency.

## Repository Structure

```
leetcode-solutions/
├── solutions/
│   ├── 1-two-sum/
│   │   ├── two-sum.ts
│   │   ├── two_sum.py
│   │   ├── TwoSum.java
│   │   ├── two-sum.go
│   │   └── two-sum.rs
│   ├── 2-problem-name/
│   │   ├── problem-name.ts
│   │   └── ...
│   └── ...
└── README.md
```

## Purpose

This repository serves as a personal practice ground for algorithm and data structure problems. By implementing solutions in multiple languages, I aim to:

1. Strengthen my understanding of different programming paradigms
2. Maintain proficiency across multiple languages
3. Compare language-specific approaches to the same problems
4. Create a reference for optimal solutions to common algorithmic challenges

## Running Solutions

Each solution file can be run independently using the appropriate language compiler/interpreter. This can be used to assess whether the code will compile fully.

- TypeScript: `tsc two-sum.ts --target es2015 --lib es2015,dom && node two-sum.js`
- Python: `python two_sum.py`
- Java: `javac TwoSum.java && java TwoSum`
- Go: `go run two_sum.go`
- Rust: `rustc two_sum.rs && ./two_sum`

Erik Paluka. 2025.

## Problem Completion Status [7/50 ⭐]

| #   | Problem                                                 | Difficulty | Type                                   | TypeScript | Python | Java | Go  | Rust |
| --- | ------------------------------------------------------- | ---------- | -------------------------------------- | ---------- | ------ | ---- | --- | ---- |
| 1   | Two Sum                                                 | Easy       | Array, Hash Table                      | ✅         | ✅     | ✅   | ✅  | ✅   |
| 2   | Add Two Numbers                                         | Medium     | Linked List, Math                      | ✅         | ✅     | ✅   | ✅  | ✅   |
| 3   | Longest Substring Without Repeating Characters          | Medium     | String, Sliding Window                 | ✅         |        |      | ✅  |      |
| 4   | Median of Two Sorted Arrays                             | Hard       | Array, Binary Search                   |            |        |      |     |      |
| 5   | Longest Palindromic Substring                           | Medium     | String, Dynamic Programming            | ✅         |        |      |     |      |
| 6   | Zigzag Conversion                                       | Medium     | String                                 | ✅         |        |      |     |      |
| 7   | Reverse Integer                                         | Medium     | Math                                   | ✅         |        |      |     |      |
| 8   | String to Integer (atoi)                                | Medium     | String                                 |            |        |      |     |      |
| 9   | Palindrome Number                                       | Easy       | Math                                   |            |        |      |     |      |
| 10  | Regular Expression Matching                             | Hard       | String, Dynamic Programming, Recursion |            |        |      |     |      |
| 11  | Container With Most Water                               | Medium     | Array, Two Pointers                    |            |        |      |     |      |
| 12  | Integer to Roman                                        | Medium     | Math, String                           |            |        |      |     |      |
| 13  | Roman to Integer                                        | Easy       | Math, String                           |            |        |      |     |      |
| 14  | Longest Common Prefix                                   | Easy       | String                                 |            |        |      |     |      |
| 15  | 3Sum                                                    | Medium     | Array, Two Pointers                    |            |        |      |     |      |
| 16  | 3Sum Closest                                            | Medium     | Array, Two Pointers                    |            |        |      |     |      |
| 17  | Letter Combinations of a Phone Number                   | Medium     | String, Backtracking                   |            |        |      |     |      |
| 18  | 4Sum                                                    | Medium     | Array, Two Pointers                    |            |        |      |     |      |
| 19  | Remove Nth Node From End of List                        | Medium     | Linked List, Two Pointers              |            |        |      |     |      |
| 20  | Valid Parentheses                                       | Easy       | String, Stack                          |            |        |      |     |      |
| 21  | Merge Two Sorted Lists                                  | Easy       | Linked List                            |            |        |      |     |      |
| 22  | Generate Parentheses                                    | Medium     | String, Backtracking                   |            |        |      |     |      |
| 23  | Merge k Sorted Lists                                    | Hard       | Linked List, Heap                      |            |        |      |     |      |
| 24  | Swap Nodes in Pairs                                     | Medium     | Linked List                            |            |        |      |     |      |
| 25  | Reverse Nodes in k-Group                                | Hard       | Linked List                            |            |        |      |     |      |
| 26  | Remove Duplicates from Sorted Array                     | Easy       | Array, Two Pointers                    |            |        |      |     |      |
| 27  | Remove Element                                          | Easy       | Array, Two Pointers                    |            |        |      |     |      |
| 28  | Find the Index of the First Occurrence in a String      | Easy       | String, Two Pointers                   |            |        |      |     |      |
| 29  | Divide Two Integers                                     | Medium     | Math, Bit Manipulation                 |            |        |      |     |      |
| 30  | Substring with Concatenation of All Words               | Hard       | String, Hash Table                     |            |        |      |     |      |
| 31  | Next Permutation                                        | Medium     | Array                                  |            |        |      |     |      |
| 32  | Longest Valid Parentheses                               | Hard       | String, Dynamic Programming            |            |        |      |     |      |
| 33  | Search in Rotated Sorted Array                          | Medium     | Array, Binary Search                   |            |        |      |     |      |
| 34  | Find First and Last Position of Element in Sorted Array | Medium     | Array, Binary Search                   |            |        |      |     |      |
| 35  | Search Insert Position                                  | Easy       | Array, Binary Search                   |            |        |      |     |      |
| 36  | Valid Sudoku                                            | Medium     | Array, Hash Table                      |            |        |      |     |      |
| 37  | Sudoku Solver                                           | Hard       | Array, Backtracking                    |            |        |      |     |      |
| 38  | Count and Say                                           | Medium     | String                                 |            |        |      |     |      |
| 39  | Combination Sum                                         | Medium     | Array, Backtracking                    |            |        |      |     |      |
| 40  | Combination Sum II                                      | Medium     | Array, Backtracking                    |            |        |      |     |      |
| 41  | First Missing Positive                                  | Hard       | Array, Hash Table                      |            |        |      |     |      |
| 42  | Trapping Rain Water                                     | Hard       | Array, Two Pointers                    |            |        |      |     |      |
| 43  | Multiply Strings                                        | Medium     | Math, String                           |            |        |      |     |      |
| 44  | Wildcard Matching                                       | Hard       | String, Dynamic Programming            |            |        |      |     |      |
| 45  | Jump Game II                                            | Medium     | Array, Greedy                          |            |        |      |     |      |
| 46  | Permutations                                            | Medium     | Array, Backtracking                    |            |        |      |     |      |
| 47  | Permutations II                                         | Medium     | Array, Backtracking                    |            |        |      |     |      |
| 48  | Rotate Image                                            | Medium     | Array, Math                            |            |        |      |     |      |
| 49  | Group Anagrams                                          | Medium     | String, Hash Table                     |            |        |      |     |      |
| 50  | Pow(x, n)                                               | Medium     | Math, Recursion                        |            |        |      |     |      |
| 350 | Intersection of Two Arrays II                           | Easy       | Array, Hash Table                      | ✅         | ✅     |      |     |      |
