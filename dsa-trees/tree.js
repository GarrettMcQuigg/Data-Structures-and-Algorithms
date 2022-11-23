/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return;

    let sum = this.root.val;

    function add(node) {
      for (let child of node.children) {
        sum += child.val;
        if (child.children.length > 0) {
          add(child);
        }
      }
    }

    add(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return;

    let sum = this.root.val % 2 === 0 ? 1 : 0;

    function sumEvens(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) sum++;
        if (child.children.length > 0) {
          sumEvens(child);
        }
      }
    }

    sumEvens(this.root);
    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let sum = this.root.val > lowerBound ? 1 : 0;

    function sumEvens(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) sum++;
        if (child.children.length > 0) {
          sumEvens(child);
        }
      }
    }

    sumEvens(this.root);
    return sum;
  }
}

module.exports = { Tree, TreeNode };
