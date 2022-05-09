class ListNode {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

// Singly LinkedList without Dummy Head.
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // insert node next to the tail node
  append(val) {
    const node = new ListNode(val);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  // insert node into the head node
  preappend(val) {
    const node = new ListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // search
  search(val) {
    if (this.head === null) {
      console.error('LinkedList is Empty.');
      return null;
    }
    let cur = this.head;
    while (cur !== null) {
      if (cur.val === val) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }

  insert(val, searchVal) {
    const cur = this.search(searchVal);
    if (cur === null) {
      console.error(`{node.val = ${searchVal}} doesn't exist in current LinkedList.`);
      return false;
    }
    const node = new ListNode(val, cur.next);
    cur.next = node;
    if (this.tail === cur) {
      this.tail = node;
    }
    return true;
  }

  // delete all the node.val === val in the LinkedList
  delete(val) {
    if (this.head === null) {
      console.error('LinkedList is Empty.');
      return false;
    }

    // delete the head node if head.val === val
    while (this.head && this.head.val === val) {
      this.head = this.head.next;
    }
    if (this.head === null) {
      this.tail = null;
      return true;
    }

    // iterate along the list
    let cur = this.head;
    while (cur.next !== null) {
      if (cur.next.val === val) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }

    // update the tail node if necessary
    if (this.tail.val === val) {
      this.tail = cur;
    }
  }

  toArray() {
    if (this.head === null) {
      return [];
    }
    const res = [];
    let cur = this.head;
    while (cur !== null) {
      res.push(cur.val);
      cur = cur.next;
    }
    return res;
  }
}
