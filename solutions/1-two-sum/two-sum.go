package main

import "fmt"

func twoSum(nums []int, target int) []int {

	numMap := make(map[int]int)

	for idx := 0; idx < len(nums); idx++ {

		value := nums[idx]
		diff := target - value

		if diffIdx, found := numMap[diff]; found {
			return []int{diffIdx, idx}
		}

		numMap[value] = idx
	}

	return []int{}
}

func twoSum1(nums []int, target int) []int {

	for outerIdx := 0; outerIdx < len(nums); outerIdx++ {

		for innerIdx := outerIdx + 1; innerIdx < len(nums); innerIdx++ {

			if nums[outerIdx]+nums[innerIdx] == target {
				return []int{outerIdx, innerIdx}
			}
		}
	}

	return []int{}
}

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	fmt.Println(twoSum(nums, target))
}
