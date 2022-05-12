// implemented by JS built-in array
class StackByArray {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      console.error('Stack is Empty.');
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.error('Stack is Empty.');
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// implemented by Singly LinkedList
class ListNode {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

class StackByLinkedList {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(val) {
    const node = new ListNode(val, this.top);
    this.top = node;
  }

  pop() {
    if (this.isEmpty()) {
      console.error('Stack is Empty.');
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node.val;
  }

  peek() {
    if (this.isEmpty()) {
      console.error('Stack is Empty.');
      return null;
    }
    return this.top.val;
  }
}