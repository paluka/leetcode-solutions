class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  const head = new ListNode();
  let currentNode = head;
  let carry = 0;

  while (l1 || l2) {
    const value1 = l1 ? l1.val : 0;
    const value2 = l2 ? l2.val : 0;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }

    const sum = value1 + value2 + carry;
    const newNodeValue = sum % 10;
    carry = Math.floor(sum / 10);

    currentNode.next = new ListNode(newNodeValue);
    currentNode = currentNode.next;
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry);
  }

  return head.next;
}

// Helper function to print linked list in a readable format
function printLinkedList(node: ListNode | null): string {
  if (!node) return "";

  let result = "";
  let current: ListNode | null = node;

  while (current) {
    result += current.val;

    if (current.next) {
      result += "->";
    }

    current = current.next;
  }

  return result;
}

// Test cases
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(`Should be 7->0->8: ${printLinkedList(addTwoNumbers(l1, l2))}`); // Should be 7->0->8

const l3 = new ListNode(0);
const l4 = new ListNode(0);
console.log(`Should be 0->0: ${printLinkedList(addTwoNumbers(l3, l4))}`); // Should be 0

const l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
console.log(
  `Should be 8->9->9->9->1: ${printLinkedList(addTwoNumbers(l5, l6))}`
); // Should be 8->9->9->9->1
