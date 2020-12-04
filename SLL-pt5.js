/**
 * Singly-Linked List Node class
 */

class SLLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Singly-Linked List class
 */

class SLL {
    constructor() {
        this.head = null; // the list is initially empty
    }

    insertAtBack(val) {
        const node = new SLLNode(val);

        if (!this.head) {
            this.head = node;
        } else {
            let runner = this.head;

            while (runner.next) {
                runner = runner.next;
            }

            runner.next = node;
        }

        return this;
    }

    /**
     * Combines the list with a given list, lengthening it.
     * 
     * @param {SLL} otherList the list to concatenate it to
     * @returns {SLL} the original (lengthened) list
     */

    concat(otherList) {
        if(!this.head){
            this.head = otherList.head
        }
        else{
            let runner = this.head;
            while (runner.next) {
                runner= runner.next
            }
            runner.next = otherList.head
        }
        return this;
    };

    /**
     * Moves the minimum value to the front of the list.
     * 
     * @returns {SLL} the original (modified) list
     */

    moveMinToFront() {
        let runner = this.head;
        let min = this.head;
        let beforeMin = this.head;
        while (runner) {
            if (runner.next && runner.next.val < min.val){
                beforeMin = runner;
                min = runner.next;
            }
            runner= runner.next;
        }
        beforeMin.next = beforeMin.next.next;
        min.next = this.head;
        this.head = min;
        return this;
    };

    /**
     * Splits the list into two lists, the second starting at the given value.
     * 
     * @param {any} val the value to split on
     * @returns {SLL} the second list
     */

    splitOnVal(val) {
        let runner = this.head;
        while(runner.next){
            if (runner.next.val == val){
                let newListHead = runner.next;
                let newList = new SLL();
                newList.head = newListHead;
                runner.next = null;
                return newList;
            }
            runner = runner.next;
        }
    }
}

const list1 = new SLL();
list1.insertAtBack(1).insertAtBack(2);
// 1 - 2

const list2 = new SLL();
list2.insertAtBack(3).insertAtBack(4);
// 3 - 4

list1.concat(list2);
// 1 - 2 - 3 - 4

console.log(list1.head.next.next.next.val); // should log 4

list1.insertAtBack(0);
// 1 - 2 - 3 - 4 - 0

list1.moveMinToFront();
// 0 - 1 - 2 - 3 - 4

console.log(list1.head.val); // should log 0

const secondList = list1.splitOnVal(2);
// 0 - 1
// 2 - 3 -4

console.log(list1.head.next.next); // should log null
console.log(secondList.head.val); // should log 2