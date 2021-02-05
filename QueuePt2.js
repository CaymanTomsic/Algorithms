class SLQNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLQueue {
  constructor() {
    this.head = this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new SLQNode(val);

    if(!this.head) {
      this.head = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    return this.size;
  }

  dequeue() {
    if(!this.head) return null;
    const { val } = this.head;

    // point front to the next node
    this.head = this.head.next;
    return val;
  }

  size() {
    if(!this.head) return 0;
    let count = 0, runner = this.head;
    while(runner) {
      count++;
      runner = runner.next;
    }
    return count;
  }

  front() {
    return this.head ? this.head.val : null;
  }

  /**
   * Determines whether the queues have the same values in the same order.
   * 
   * Use ONLY the provided queue methods, do not manually index the queue items, no extra array or objects
   * restore the queues to their original state
   * 
   * @returns {boolean}
   */

  compare(otherQueue) {
    let tempQueue1 = this;
    let tempQueue2 = otherQueue;
    let temp1 = tempQueue1.dequeue();
    let temp2 = tempQueue2.dequeue();
    while(tempQueue1.head || tempQueue2.head){
      if ( temp1 != temp2){
        return false;
      }
      temp1 = tempQueue1.dequeue();
      temp2 = tempQueue2.dequeue();
    }
    return true;
    
    // tempQueue1
    // let runner1 = this.head;
    // let runner2 = otherQueue.head;
    // while(runner1 || runner2){
    //   if (runner1.val != runner2.val){
    //     return false;
    //   }
    //   runner1 = runner1.next;
    //   runner2 = runner2.next;
    // }
    // return true;
  }

  /**
   * Determines whether the queue is a palindrome.
   * 
   * use only 1 stack as additional storage (no additional arrays / objects)
   * do not manually index the queue, use the provided queue methods and stack methods, restore the queue to original state when done
   * 
   * @returns {boolean}
   */
  isPalindrome() {
    let reverseStack = new SLQueue();
    let runner = this.head;
    while(runner){
      reverseStack.enqueue(runner.val);
      runner= runner.next;
    }
    return this.compare(reverseStack);
  }
}
