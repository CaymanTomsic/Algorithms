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

    isEmpty() {
        // your code here
        // if there is no head, there is no list
        return !this.head ? true : false;
    }

    insertAtBack(val) {
        let newNode = new DLLNode(val);
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

    insertAfter(targetVal, val) {
        let runner = this.head;
        let newNode = new DLLNode(val);
        while (runner != null){
            if (runner.val == targetVal){
                newNode.next = runner.next;
                newNode.prev = runner;
                if(runner.next == null){
                    runner.next = newNode;
                    this.tail = newNode;
                    return this;
                }
                runner.next.prev = newNode;
                runner.next = newNode;
                return this;
            }
            runner = runner.next;
        }
        return null;
    }

    insertBefore(targetVal, val) {
        let runner = this.head;
        let newNode = new DLLNode(val);
        while (runner != null){
            if (runner.val == targetVal){
                if(runner == this.head){
                    newNode.next = runner;
                    runner.prev = newNode;
                    this.head = newNode;
                    return this;
                }
                newNode.prev = runner.prev;
                newNode.next = runner;
                runner.prev.next = newNode;
                runner.prev = newNode;
                return this;
            }
            runner = runner.next;
        }
        return null;
    }
}

const dll = new DLL();

dll
    .insertAtBack(1)
    .insertAtBack(2)
    .insertAtBack(3)
    .insertAtBack(4);
// 1 <-> 2 <-> 3 <-> 4

dll.insertAfter(4, 6);
// 1 <-> 2 <-> 3 <-> 4 <-> 6

dll.insertBefore(6, 5);
// 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6

console.log(dll.tail.val); // should log 6
const inserted = dll.tail.prev;

console.log(inserted.val); // should log 5
console.log(inserted.prev.val); // should log 4

let runner = dll.head;
let newArr = [];

while(runner != null){
    newArr.push(runner.val)
    runner = runner.next;
}

console.log(newArr);