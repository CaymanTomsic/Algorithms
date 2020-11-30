/**
 * Singly-Linked List Node class
 * @param {any} val
 */

class SLLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

/**
 * Singly-Linked List class
 */

class SLL {
    constructor() {
        this.head = null; // the list is initially empty
    }

    /**
     * Determines if the list is empty.
     * 
     * @returns {boolean}
     */

    isEmpty() {
        return this.head == null;
    }

    /**
     * Adds a node to the end of the list.
     * 
     * @param {any} val the value to add
     * @returns {SLL} the list
     */

    insertAtBack(val) {
        if (this.isEmpty()){
            this.head= new SLLNode(val);
        }
        else{
            let runner = this.head;
            while (runner.next != null){
                runner = runner.next;
            };
            runner.next = new SLLNode(val)
        };
        return this;
    };

    /**
     * Adds all the array values to the list.
     * 
     * @param {any[]} arr an array of values
     * @returns {SLL} the list
     */

    seedFromArr(arr) {
        for (let val of arr){
            this.insertAtBack(val);
        };
        return this;
    }

    /**
     * Prints a comma-separated list of the values.
     * 
     * @returns {void}
     */

    display() {
        let str = ""
        if (this.isEmpty()){
            console.log(str);
        }
        else{
            str += this.head.val;
            let runner = this.head;
            while (runner.next){
                runner = runner.next;
                str += ',' + runner.val;
            };
            console.log(str);
        }
    }
};

const list = new SLL();
console.log(list.isEmpty()); // should log true

list.insertAtBack(5);
list.display(); // should log 5

list.insertAtBack(6);
list.display(); // should log 5,6

list.seedFromArr([7, 8]);
list.display(); // should log 5,6,7,8

console.log(list.isEmpty()); // should log false