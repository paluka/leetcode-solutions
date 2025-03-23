package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func (l1 *ListNode) addTwoNumbers(l2 *ListNode) *ListNode {

	if l1 == nil {
		return l2
	} else if l2 == nil {
		return l1
	}

	head := ListNode{}
	currentNode := &head
	carry := 0

	for l1 != nil || l2 != nil {

		value1 := 0
		value2 := 0

		if l1 != nil {
			value1 = l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			value2 = l2.Val
			l2 = l2.Next
		}

		sum := value1 + value2 + carry
		newNodeValue := int(sum % 10)
		carry = sum / 10

		currentNode.Next = &ListNode{Val: newNodeValue, Next: nil}
		currentNode = currentNode.Next
	}

	if carry > 0 {
		currentNode.Next = &ListNode{Val: carry, Next: nil}
	}

	return head.Next
}

func printList(node *ListNode) {
	for node != nil {
		fmt.Print(node.Val)
		if node.Next != nil {
			fmt.Print("->")
		}
		node = node.Next
	}
	fmt.Println()
}

func main() {

	// Test Case 1: 342 + 465 = 807
	l1 := &ListNode{Val: 2, Next: &ListNode{Val: 4, Next: &ListNode{Val: 3, Next: nil}}}
	l2 := &ListNode{Val: 5, Next: &ListNode{Val: 6, Next: &ListNode{Val: 4, Next: nil}}}
	result1 := l1.addTwoNumbers(l2)
	fmt.Println("Test Case 1: 342 + 465 = 807")
	printList(result1) // Should be 7->0->8

	// Test Case 2: 0 + 0 = 0
	l3 := &ListNode{Val: 0, Next: nil}
	l4 := &ListNode{Val: 0, Next: nil}
	result2 := l3.addTwoNumbers(l4)
	fmt.Println("\nTest Case 2: 0 + 0 = 0")
	printList(result2) // Should be 0

	// Test Case 3: 9999 + 9999 = 19998
	l5 := &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: nil}}}}
	l6 := &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: nil}}}}
	result3 := l5.addTwoNumbers(l6)
	fmt.Println("\nTest Case 3: 9999 + 9999 = 19998")
	printList(result3) // Should be 8->9->9->9->1

}
