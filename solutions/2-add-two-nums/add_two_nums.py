from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def add_two_numbers(self, l1:  Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        head = ListNode()
        current_node = head
        carry = 0

        while l1 or l2 or carry > 0:
            value1 = l1.val if l1 else 0
            value2 = l2.val if l2 else 0

            sum = value1 + value2 + carry
            new_node_value = sum % 10
            carry = sum // 10

            if l1:
                l1 = l1.next

            if l2:
                l2 = l2.next

            current_node.next = ListNode(val=new_node_value)
            current_node = current_node.next

        return head.next


def print_linked_list(node):
    """Helper function to print linked list in a readable format"""

    if not node:
        return ""

    result = ""
    current = node

    while current:
        result += str(current.val)

        if current.next:
            result += "->"

        current = current.next

    return result


if __name__ == "__main__":

    # Test case 1: 2->4->3 + 5->6->4 = 7->0->8
    l1 = ListNode(2, ListNode(4, ListNode(3)))
    l2 = ListNode(5, ListNode(6, ListNode(4)))
    solution = Solution()
    result = solution.add_two_numbers(l1, l2)
    # Expected answer: 7->0->8 (342 + 465 = 807)
    print(
        f"Test Case 1: 2->4->3 + 5->6->4 = {print_linked_list(result)} (Expected: 7->0->8)")

    # Test case 2: 0 + 0 = 0
    l3 = ListNode(0)
    l4 = ListNode(0)
    result = solution.add_two_numbers(l3, l4)
    # Expected answer: 0 (0 + 0 = 0)
    print(f"Test Case 2: 0 + 0 = {print_linked_list(result)} (Expected: 0)")

    # Test case 3: 9->9->9->9 + 9->9->9->9 = 8->9->9->9->1
    l5 = ListNode(9, ListNode(9, ListNode(9, ListNode(9))))
    l6 = ListNode(9, ListNode(9, ListNode(9, ListNode(9))))
    result = solution.add_two_numbers(l5, l6)
    # Expected answer: 8->9->9->9->1 (9999 + 9999 = 19998)
    print(
        f"Test Case 3: 9->9->9->9 + 9->9->9->9 = {print_linked_list(result)} (Expected: 8->9->9->9->1)")
