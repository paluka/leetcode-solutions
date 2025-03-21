from typing import List


class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:

        if not nums or not isinstance(target, int):
            return []

        seen = {}

        for index, value in enumerate(nums):

            diff = target - value

            if diff in seen:
                return [seen[diff], index]

            seen[value] = index

        return []


class Solution1:
    def two_sum1(self, nums: List[int], target: int) -> List[int]:

        if not nums or not isinstance(target, int):
            return []

        for outer_index in range(len(nums)):

            for inner_index in range(outer_index + 1, len(nums)):

                if nums[outer_index] + nums[inner_index] == target:
                    return [outer_index, inner_index]

        return []


if __name__ == "__main__":

    solution = Solution()
    print(solution.two_sum([2, 7, 11, 15], 9))

    solution1 = Solution1()
    print(solution1.two_sum1([2, 7, 11, 15], 9))
