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
  
      if(!this.head) {
        this.head = node;
      } else {
        let runner = this.head;
  
        while(runner.next) {
          runner = runner.next;
        }
  
        runner.next = node;
      }
  
      return this;
    }
  
    /**
     * Determines whether the given value is in the list.
     * BONUS: Create a recursive version.
     * 
     * @param {any} val the value to find
     * @returns {boolean}
     */
  
    contains(val) {
        let runner = this.head;
        while (runner){
            if (runner.val == val){
                return true
            }
            runner = runner.next;
        };
        return false;
    }

    containsRecursive(val, runner=this.head) {
        if (!runner){
            return false;
        }
        if (runner.val == val){
            return true;
        }
        return this.containsRecursive(val, runner.next);
    }

    /**
     * Removes the last node and returns its value (or null if list is empty).
     * 
     * @returns {any|null}
     */
  
    removeBack() {
        if (this.head == null){
            return null;
        }
        else{
            let last = this.head;
            let secondLast;
            while (last.next != null){
                secondLast = last;
                last = last.next;
            };
            secondLast.next = null;
            return last.val;
        };
    }
  
    /**
     * Finds and returns the maximum value (or null if list empty) recursively.
     * 
     * @param {SLLNode} node
     * @param {SLLNode} maxNode
     * @returns {any|null}
     */
    
    recursiveMax(node = this.head, maxNode = this.head) {
        if(!node.next){
            if (node.val > maxNode.val){
                maxNode = node;
            };
                return maxNode.val;
        }
        else if(node.val > maxNode.val) {
            maxNode = node;
            return this.recursiveMax(node.next, maxNode);
        }
        else{
            return this.recursiveMax(node.next, maxNode);
        }
    }
}

  const list = new SLL();
  
  list.insertAtBack(5);
  list.insertAtBack(7);
  list.insertAtBack(6);
  
  console.log(list.containsRecursive(6)); // should log true
  console.log(list.containsRecursive(10)); // should log false
  
  console.log(list.removeBack()); // should log 6
  list.insertAtBack(20);
  
  console.log(list.recursiveMax()); // should log 20