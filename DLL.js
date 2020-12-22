class DLLNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Determines whether the list is empty.
     * 
     * @returns {boolean}
     */

    isEmpty() {
        // your code here
        // if there is no head, there is no list
        return !this.head ? true : false;
    }

    /**
     * Gathers the values into a new array.
     * 
     * @returns {any[]} the array of values
     */
    //

    toArray() {
        let runner = this.head;
        let newArr = [];
        while (runner != null) {
            newArr.push(runner.val);
            runner = runner.next;
        }
        return newArr;
    }

    /**
     * Adds values from an array to the list.
     * 
     * @param {any[]} arr an array of values
     * @returns {DLL} the list
     */

    seedFromArray(arr) {
        // your code here
        if (!this.head) {
            let newNode = new DLLNode(arr.shift());
            this.head = newNode;
            this.tail = newNode;
        }
        while (arr.length > 0) {
            // make a new node from the first item in the list
            let newNode = new DLLNode(arr.shift());
            // set the next node after the tail to the new node
            this.tail.next = newNode;
            // set the previous node for the new node to the tail
            newNode.prev = this.tail;
            // set this.tail to new node
            this.tail = newNode;
        }
        return this;
    }

    /**
     * Inserts a value at the front of the list.
     * 
     * @returns {DLL} the list
     */

    insertAtFront(val) {
        // your code here
        // make a new node
        var newNode = new DLLNode(val);
        // if there is nothing at the head
        // newNode is the head AND the tail
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            // make the new nodes next value point to the node at the head
            newNode.next = this.head;
            // make the node at the head's previous value point to our new node
            this.head.prev = newNode;
            // make the new node the head
            this.head = newNode;
        }
        return this;
    }


    /**
     * Inserts a value at the and of the list.
     * 
     * @returns {DLL} the list
     */

    insertAtBack(val) {
        newNode = new DLLNode(val);
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
        return this;
    }

    /**
     * Removes and returns the middle value from the list.
     * 
     * @returns {any|null} the removed value or null if there is no middle value
     */

    removeMiddleNode() {
        if (this.isEmpty()) {
            return null;
        }
        var runner = this.head;
        var backwards = this.tail;
        while (runner && backwards) {
            if (runner.next == backwards.prev) {
                let middle = runner.next.val;
                runner.next = backwards;
                backwards.prev = runner;
                return middle;
            };
            runner = runner.next;
            backwards = backwards.prev;
        }
        return null
    }
}

const dll = new DLL();

dll.seedFromArray([1, 2, 3, 4]);
// 1 <-> 2 <-> 3 <-> 4
console.log(dll.head.val);
console.log(dll.head.next.val);
console.log(dll.head.next.next.val);
console.log(dll.head.next.next.next.val);

console.log(dll.isEmpty()); // should log false

dll.insertAtFront(10);
// 10 <-> 1 <-> 2 <-> 3 <-> 4
console.log(dll.head)

console.log(dll.removeMiddleNode()); // should log 2
// 10 <-> 1 <-> 3 <-> 4
console.log(dll.head.next.next.val); // should log 3
