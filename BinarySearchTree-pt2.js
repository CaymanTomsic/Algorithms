class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    print(node = this.root) {
        if (!node) return;

        if (node.left) {
            this.print(node.left);
        }

        console.log(node.val);

        if (node.right) {
            this.print(node.right);
        }
    }

    /**
     * Determines if the value is in the tree.
     * Stretch for recursion if you can.
     * 
     * @returns {boolean}
     */

    contains(val) {
        let runner = this.root;
        while (runner != null) {
            if (runner.val == val)
                return true;
            if (val > runner.val)
                runner = runner.right;
            else
                runner = runner.left;
        }
        return false;
    }

    containsRecursive(val, node = this.root) {
        if (node == null) {
            return false;
        }
        if (node.val == val) {
            return true;
        }
        if (node.val > val) {
            return this.contains(val, node.left);
        }
        return this.contains(val, node.right);
    }

    /**
     * Determines the difference between the max and the min values.
     * 
     * @param {BSTNode} node the starting node
     * @returns {number|null} an integer or
     */

    range(node = this.root) {
        if (!this.root) {
            return null;
        }
        let minNode, maxNode, runner;
        // Find the max by seeking the rightmost node
        runner = this.root;
        while (runner.right != null) {
            runner = runner.right
        }
        maxNode = runner;
        // Find the min by seeking the leftmost node
        runner = this.root;
        while (runner.left != null) {
            runner = runner.left
        }
        minNode = runner;
        // return difference
        return maxNode.val - minNode.val;
    }
}

const bst = new BST();

const root = bst.root = new BSTNode(20);

console.log(bst.isEmpty()); // should log false

root.left = new BSTNode(10);

root.right = new BSTNode(30);

root.left.left = new BSTNode(5);

root.right.left = new BSTNode(25);
root.right.right = new BSTNode(40);

console.log(bst.contains(2)); // should log false
console.log(bst.contains(25)); // should log true

console.log(bst.range()); // should log 35 (40 - 5)

  //      20
  //     /  \
  //   10   30
  //  /    /  \
  // 5    25  40