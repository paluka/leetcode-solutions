class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class AddTwoNums {

    public static void main(String[] args) {
        // Test Case 1: 342 + 465 = 807
        ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
        System.out.println("Test Case 1: 342 + 465 = 807");
        printList(addTwoNumbers(l1, l2)); // Should be 7->0->8
        
        // Test Case 2: 0 + 0 = 0
        ListNode l3 = new ListNode(0);
        ListNode l4 = new ListNode(0);
        System.out.println("\nTest Case 2: 0 + 0 = 0");
        printList(addTwoNumbers(l3, l4)); // Should be 0
        
        // Test Case 3: 9999 + 9999 = 19998
        ListNode l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
        ListNode l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
        System.out.println("\nTest Case 3: 9999 + 9999 = 19998");
        printList(addTwoNumbers(l5, l6)); // Should be 8->9->9->9->1
    }
    
    private static void printList(ListNode node) {
        // Print the linked list in a readable format
        while (node != null) {
            System.out.print(node.val);

            if (node.next != null) {
                System.out.print("->");
            }

            node = node.next;
        }

        System.out.println();
    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode head = new ListNode();
        ListNode currentNode = head;
        int carry = 0;

        while (l1 != null || l2 != null) {

            int value1 = l1 != null ? l1.val : 0;
            int value2 = l2 != null ? l2.val : 0;

            int sum = value1 + value2 + carry;

            if (l1 != null) {
                l1 = l1.next;
            }

            if (l2 != null) {
                l2 = l2.next;
            }

            int newNodeValue = sum % 10;
            carry = sum / 10;

            currentNode.next = new ListNode(newNodeValue);
            currentNode = currentNode.next;
            
            
        }

        if (carry > 0) {
            currentNode.next = new ListNode(carry);
        }
        
        return head.next;
    }
}

