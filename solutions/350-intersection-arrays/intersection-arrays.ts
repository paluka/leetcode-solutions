function intersect(nums1: number[], nums2: number[]): number[] {
  if (!nums1 || !nums1.length || !nums2 || !nums2.length) {
    return [];
  }

  const map = new Map<number, number>();
  const result: number[] = [];

  for (const value of nums1) {
    map.set(value, (map.get(value) || 0) + 1);
  }

  for (const data of nums2) {
    if (map.has(data) && map.get(data)! > 0) {
      result.push(data);
      map.set(data, map.get(data)! - 1);
    }
  }

  return result;
}

function intersect1(nums1: number[], nums2: number[]): number[] {
  if (!nums1 || !nums1.length || !nums2 || !nums2.length) {
    return [];
  }

  let shortArray = nums1.length > nums2.length ? nums1 : nums2;
  let longArray = nums1.length > nums2.length ? nums2 : nums1;

  return shortArray.filter((value) => {
    const index = longArray.indexOf(value);

    if (index >= 0) {
      longArray.splice(index, 1);
      return true;
    }

    return false;
  });
}

// Test cases
console.log("Running test cases for both intersect implementations:");

// Test Case 1: [1,2,2,1] and [2,2] - Expected: [2,2]
const nums1_1 = [1, 2, 2, 1];
const nums2_1 = [2, 2];
const resultA1 = intersect(nums1_1, nums2_1);
const resultB1 = intersect1(nums1_1, nums2_1);
console.log(`Test Case 1: [${nums1_1}] and [${nums2_1}]`);
console.log(`  Implementation 1: [${resultA1}], Expected: [2,2]`);
console.log(`  Implementation 2: [${resultB1}], Expected: [2,2]`);

// Test Case 2: [4,9,5] and [9,4,9,8,4] - Expected: [4,9] or [9,4]
const nums1_2 = [4, 9, 5];
const nums2_2 = [9, 4, 9, 8, 4];
const resultA2 = intersect(nums1_2, nums2_2);
const resultB2 = intersect1(nums1_2, nums2_2);
console.log(`Test Case 2: [${nums1_2}] and [${nums2_2}]`);
console.log(`  Implementation 1: [${resultA2}], Expected: [4,9] or [9,4]`);
console.log(`  Implementation 2: [${resultB2}], Expected: [4,9] or [9,4]`);

// Test Case 3: Empty arrays - Expected: []
const nums1_3: number[] = [];
const nums2_3: number[] = [];
const resultA3 = intersect(nums1_3, nums2_3);
const resultB3 = intersect1(nums1_3, nums2_3);
console.log(`Test Case 3: [${nums1_3}] and [${nums2_3}]`);
console.log(`  Implementation 1: [${resultA3}], Expected: []`);
console.log(`  Implementation 2: [${resultB3}], Expected: []`);

// Test Case 4: No intersection - Expected: []
const nums1_4 = [1, 2, 3];
const nums2_4 = [4, 5, 6];
const resultA4 = intersect(nums1_4, nums2_4);
const resultB4 = intersect1(nums1_4, nums2_4);
console.log(`Test Case 4: [${nums1_4}] and [${nums2_4}]`);
console.log(`  Implementation 1: [${resultA4}], Expected: []`);
console.log(`  Implementation 2: [${resultB4}], Expected: []`);

// Test Case 5: Duplicate elements - Expected: [1,1]
const nums1_5 = [1, 1, 1, 2];
const nums2_5 = [1, 1, 3, 4];
const resultA5 = intersect(nums1_5, nums2_5);
const resultB5 = intersect1(nums1_5, nums2_5);
console.log(`Test Case 5: [${nums1_5}] and [${nums2_5}]`);
console.log(`  Implementation 1: [${resultA5}], Expected: [1,1]`);
console.log(`  Implementation 2: [${resultB5}], Expected: [1,1]`);
