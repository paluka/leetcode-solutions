package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {

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

func main() {

}
