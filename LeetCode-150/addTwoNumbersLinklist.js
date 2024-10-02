/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let newHead = new ListNode(0);
    let temp = newHead;
    let carryBit = 0;

    while (l1 !== null || l2 !== null || carryBit !== 0) {
        let l1Value = (l1 !== null) ? l1.val : 0;
        let l2Value = (l2 !== null) ? l2.val : 0;

        let sumOfList = l1Value + l2Value + carryBit;

        carryBit = Math.floor(sumOfList / 10);
        temp.next = new ListNode(sumOfList % 10);
        temp = temp.next;

        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }

    }
    return newHead.next;
};










/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        //connect the The ones place of the number 18 is 8 (this is the value we want to store in the current node).
        // The tens place (1) will be carried over to the next addition.
        current.next = new ListNode(sum % 10);
        current = current.next;

        carry = Math.floor(sum / 10);


    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};