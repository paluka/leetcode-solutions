use std::collections::HashMap;

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map: HashMap<i32, usize> = HashMap::new();

    for (idx, value) in nums.iter().enumerate() {
        let diff = target - value;

        if let Some(&diff_index) = map.get(&diff) {
            return vec![diff_index as i32, idx as i32];
        }

        map.insert(*value, idx);
    }

    return vec![];
}

fn two_sum1(nums: Vec<i32>, target: i32) -> Vec<i32> {
    for outer_idx in 0..nums.len() {
        for inner_idx in (outer_idx + 1)..nums.len() {
            if nums[outer_idx] + nums[inner_idx] == target {
                return vec![outer_idx as i32, inner_idx as i32];
            }
        }
    }

    return vec![];
}

fn main() {
    let nums = vec![2, 7, 11, 15];
    let nums_clone = nums.clone();
    let target = 9;

    println!("{:?}", two_sum(nums, target));
    println!("{:?}", two_sum1(nums_clone, target));
}
