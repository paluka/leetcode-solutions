use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<i32, usize> = HashMap::new();

        for (idx, value) in nums.iter().enumerate() {
            let diff = target - value;

            if let Some(&diff_index) = map.get(&diff) {
                return vec![diff_index as i32, idx as i32];
            }

            map.insert(*value, idx);
        }

        vec![]
    }

    pub fn two_sum1(nums: Vec<i32>, target: i32) -> Vec<i32> {
        for outer_idx in 0..nums.len() {
            for inner_idx in (outer_idx + 1)..nums.len() {
                if nums[outer_idx] + nums[inner_idx] == target {
                    return vec![outer_idx as i32, inner_idx as i32];
                }
            }
        }

        vec![]
    }
}

fn main() {
    // Test Case 1
    let nums1 = vec![2, 7, 11, 15];
    let target1 = 9;
    let expected_solution1 = vec![0, 1]; // Expected solution for nums1 and target1
    let solution1_sum = Solution::two_sum(nums1.clone(), target1);
    let solution1_sum1 = Solution::two_sum1(nums1.clone(), target1);

    assert_eq!(expected_solution1, solution1_sum);
    assert_eq!(expected_solution1, solution1_sum1);

    println!(
        "Test Case 1 - Expected Solution: {:?}, two_sum Solution: {:?}, two_sum1 Solution: {:?}",
        expected_solution1, solution1_sum, solution1_sum1
    );

    // Test Case 2
    let nums2 = vec![3, 2, 4];
    let target2 = 6;
    let expected_solution2 = vec![1, 2]; // Expected solution for nums2 and target2
    let solution2_sum = Solution::two_sum(nums2.clone(), target2);
    let solution2_sum1 = Solution::two_sum1(nums2.clone(), target2);

    assert_eq!(expected_solution2, solution2_sum);
    assert_eq!(expected_solution2, solution2_sum1);

    println!(
        "Test Case 2 - Expected Solution: {:?}, two_sum Solution: {:?}, two_sum1 Solution: {:?}",
        expected_solution2, solution2_sum, solution2_sum1
    );

    // Test Case 3
    let nums3 = vec![3, 3];
    let target3 = 6;
    let expected_solution3 = vec![0, 1]; // Expected solution for nums3 and target3
    let solution3_sum = Solution::two_sum(nums3.clone(), target3);
    let solution3_sum1 = Solution::two_sum1(nums3.clone(), target3);

    assert_eq!(expected_solution3, solution3_sum);
    assert_eq!(expected_solution3, solution3_sum1);

    println!(
        "Test Case 3 - Expected Solution: {:?}, two_sum Solution: {:?}, two_sum1 Solution: {:?}",
        expected_solution3, solution3_sum, solution3_sum1
    );

    // Test Case 4
    let nums4 = vec![1, 3, 4, 2];
    let target4 = 7;
    let expected_solution4 = vec![1, 2]; // Expected solution for nums4 and target4
    let solution4_sum = Solution::two_sum(nums4.clone(), target4);
    let solution4_sum1 = Solution::two_sum1(nums4.clone(), target4);

    assert_eq!(expected_solution4, solution4_sum);
    assert_eq!(expected_solution4, solution4_sum1);

    println!(
        "Test Case 4 - Expected Solution: {:?}, two_sum Solution: {:?}, two_sum1 Solution: {:?}",
        expected_solution4, solution4_sum, solution4_sum1
    );

    // Test Case 5
    let nums5 = vec![0, 4, 3, 0];
    let target5 = 0;
    let expected_solution5 = vec![0, 3]; // Expected solution for nums5 and target5
    let solution5_sum = Solution::two_sum(nums5.clone(), target5);
    let solution5_sum1 = Solution::two_sum1(nums5.clone(), target5);

    assert_eq!(expected_solution5, solution5_sum);
    assert_eq!(expected_solution5, solution5_sum1);

    println!(
        "Test Case 5 - Expected Solution: {:?}, two_sum Solution: {:?}, two_sum1 Solution: {:?}",
        expected_solution5, solution5_sum, solution5_sum1
    );
}
