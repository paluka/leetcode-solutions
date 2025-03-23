struct Solution;

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut head = Box::new(ListNode::new(0));
        let mut current_node = head.as_mut();
        let mut carry = 0;

        let (mut l1, mut l2) = (l1.as_ref(), l2.as_ref());

        while l1.is_some() || l2.is_some() || carry > 0 {
            let mut sum = carry;

            if let Some(l1_node) = l1 {
                sum += l1_node.val;
                l1 = l1_node.next.as_ref();
            }

            if let Some(l2_node) = l2 {
                sum += l2_node.val;
                l2 = l2_node.next.as_ref();
            }

            carry = (sum / 10) as i32;
            let new_node_value = sum % 10;

            current_node.next = Some(Box::new(ListNode::new(new_node_value)));
            current_node = current_node.next.as_mut().unwrap()
        }

        head.next
    }
}

fn print_list(first_node: Option<Box<ListNode>>) {
    let mut current_node = first_node.as_ref();
    let mut string_result = String::new();

    while let Some(node) = current_node {
        string_result.push_str(&node.val.to_string());

        if node.next.is_some() {
            string_result.push_str("-->");
        }

        current_node = node.next.as_ref();
    }

    println!("{:?}", string_result);
}

fn create_list(values: Vec<i32>) -> Option<Box<ListNode>> {
    let mut head = Box::new(ListNode::new(0));
    let mut current_node = head.as_mut();

    for val in values {
        current_node.next = Some(Box::new(ListNode::new(val)));
        current_node = current_node.next.as_mut().unwrap();
    }

    head.next
}
fn main() {
    // Test Case 1: 342 + 465 = 807
    let l1 = create_list(vec![2, 4, 3]);
    let l2 = create_list(vec![5, 6, 4]);
    let result1 = Solution::add_two_numbers(l1, l2);
    println!("Test Case 1: 342 + 465 = 807");
    print_list(result1); // Should be 7->0->8

    // Test Case 2: 0 + 0 = 0
    let l3 = create_list(vec![0]);
    let l4 = create_list(vec![0]);
    let result2 = Solution::add_two_numbers(l3, l4);
    println!("\nTest Case 2: 0 + 0 = 0");
    print_list(result2); // Should be 0

    // Test Case 3: 9999 + 9999 = 19998
    let l5 = create_list(vec![9, 9, 9, 9]);
    let l6 = create_list(vec![9, 9, 9, 9]);
    let result3 = Solution::add_two_numbers(l5, l6);
    println!("\nTest Case 3: 9999 + 9999 = 19998");
    print_list(result3); // Should be 8->9->9->9->1
}
