/**
 * A queue is a FIFO (first in, first out) data structure
 */

class Queue {
    constructor() {
        this.values = [];
    }

    /**
     * Adds a value and returns the new size.
     * 
     * @param {any} val
     * @returns {number} the new size
     */

    enqueue(val) {
        if (this.values.length >= 5) {
            let sorryfull = "Sorry the Queue is full"
            return sorryfull
        }
        this.values.push(val);
        return this.values.length;
    }
    //looks good! nice work guys!
    /**
     * @returns {any} the removed (front) value
     */

    dequeue() {
        return this.values.splice(0, 1)
    }

    /**
     * @returns {boolean}
     */

    isEmpty() {
        if (this.values.length < 1) {
            return true
        }
        return false
    }

    /**
     * @returns {number}
     */

    size() {
        return this.values.length;
        // or
        //   let count = 0
        //   for (var val of this.values){
        //     count ++
        //   }
        //   return count;
    }
}
const queue = new Queue();

console.log(queue.enqueue(1)); // should log 1
console.log(queue.enqueue(2)); // should log 2
console.log(queue.enqueue(0)); // should log 2
console.log(queue.enqueue(9)); // should log 2
console.log(queue.enqueue(9)); // should log 2
console.log(queue.enqueue(9)); // should log 2
console.log(queue.enqueue(9)); // should log 2

console.log(queue.dequeue()); // should log 1
//   console.log(queue.dequeue()); // should log 0

console.log(queue.size()); // should log 1 (undefined when empty)

console.log(queue.isEmpty()); // should log false