from typing import Counter, List


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:

        if nums1 is None or len(nums1) == 0 or nums2 is None or len(nums2) == 0:
            return []

        result = []
        counter = Counter(nums1)

        for value in nums2:
            if value in counter and counter[value] > 0:
                result.append(value)
                counter[value] = counter[value] - 1

        return result
