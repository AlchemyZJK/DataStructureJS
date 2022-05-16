class TreeNode {
  constructor(val, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor(root=null) {
    this.root = root;
  }

  insert(val) {
    const node = new TreeNode(val);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let cur = this.root;
    while (cur !== null) {
      if (val < cur.val) {
        if (cur.left === null) {
          cur.left = node;
          break;
        } else {
          cur = cur.left;
        }
      } else {
        if (cur.right === null) {
          cur.right = node;
          break;
        } else {
          cur = cur.right;
        }
      }
    }
  }

  search(val) {
    let cur = this.root;
    while (cur !== null) {
      if (cur.val === val) {
        return cur;
      } else if (val < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return null;
  }

  delete(val) {
    let pre = null;
    let cur = this.root;
    let pos = 0;  // -1 for left, 1 for right.
    while (cur !== null) {
      if (cur === val) {
        break;
      }
      pre = cur;
      if (val < cur.val) {
        cur = cur.left;
        pos = -1;
      } else {
        cur = cur.right;
        pos = 1;
      }
    }

    if (cur === null) {
      console.error(`TreeNode.val = ${val} Not Found.`);
      return false;
    }

    const isRootDeleted = pre === null;
    if (isRootDeleted) {
      if (cur.left === null) {
        this.root = cur.right;
        return true;
      } else if (cur.right === null) {
        this.root = cur.left;
        return true;
      }
    } else {
      if (cur.left === null) {
        if (pos === -1) {
          pre.left = cur.right;
        } else {
          pre.right = cur.right;
        }
        return true;
      } else if (cur.right === null) {
        if (pos === -1) {
          pre.left = cur.right;
        } else {
          pre.right = cur.right;
        }
        return true;
      }
    }
    let preRightMin = null;
    let rightMin = cur.right;
    while (rightMin.left !== null) {
      preRightMin = rightMin;
      rightMin = rightMin.left;
    }
    cur.val = rightMin.val;
    if (preRightMin === null) {
      cur.right = rightMin.right;
    } else {
      preRightMin.left = rightMin.right;
    }
    
    return true;
  }
}