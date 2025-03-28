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
