class TreeNode {
  constructor(val, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

// Binary Tree Traversal (Recursive version)
class BinaryTreeTraversalRecursive {
  constructor(root) {
    this.preOrder(root);
    this.inOrder(root);
    this.postOrder(root);
  }

  preOrder(node) {
    if (node === null) {
      return [];
    }
    const res = [node.val];
    res.push(...this.preOrder(node.left));
    res.push(...this.preOrder(node.right));
  }

  inOrder(node) {
    if (node === null) {
      return [];
    }
    const res = [];
    res.push(...this.inOrder(node.left));
    res.push(node.val);
    res.push(...this.inOrder(node.right));
  }

  postOrder(node) {
    if (node === null) {
      return [];
    }
    const res = [];
    res.push(...this.postOrder(node.left));
    res.push(...this.postOrder(node.right));
    res.push(node.val);
  }
}

// Binary Tree Traversal (Iterative version)
class BinaryTreeTraversalIterative {
  constructor(root) {
    this.preOrder(root);
    this.inOrder(root);
    this.postOrder(root);
  }

  preOrder(root) {
    const stack = [];
    let cur = root;
    while (cur !== null) {
      console.log(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    while (stack.length !== 0) {
      cur = stack.pop();
      cur = cur.right;
      while (cur !== null) {
        console.log(cur.val);
        stack.push(cur);
        cur = cur.left;
      }
    }
  }

  inOrder(root) {
    const stack = [];
    let cur = root;
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    while (stack.length !== 0) {
      cur = stack.pop();
      console.log(cur.val);
      cur = cur.right;
      while (cur !== null) {
        stack.push(cur);
        cur = cur.left;
      }
    }
  }

  postOrder(root) {
    const stack = [];
    let pre = null;
    let cur = root;
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    while (stack.length !== null) {
      cur = stack[stack.length - 1];
      if (cur.right === null || cur.right === pre) {
        console.log(cur.val);
        pre = cur;
        stack.pop();
      } else {
        cur = cur.right;
        while (cur !== null) {
          stack.push(cur);
          cur = cur.left;
        }
      }
    }
  }
}