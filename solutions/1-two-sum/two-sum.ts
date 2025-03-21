function twoSum(nums: number[], target: number): number[] {
  if (!nums || !nums.length || typeof target != "number") {
    return [];
  }

  const myMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const remainder = target - currentValue;

    if (myMap.has(remainder)) {
      const remainderIndex = myMap.get(remainder)!;
      return [remainderIndex, i];
    }

    myMap.set(currentValue, i);
  }

  return [];
}

function twoSum1(nums: number[], target: number): number[] {
  if (!nums || !nums.length || typeof target != "number") {
    return [];
  }

  for (let outerIndex = 0; outerIndex < nums.length; outerIndex++) {
    for (
      let innerIndex = outerIndex + 1;
      innerIndex < nums.length;
      innerIndex++
    ) {
      const value = nums[outerIndex] + nums[innerIndex];

      if (value === target) {
        return [outerIndex, innerIndex];
      }
    }
  }

  return [];
}
