// implemented by circular array
class QueueByArray {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    const len = this.items.length;
    return this.head > this.tail ? len - this.head + this.tail - 1 : this.tail - this.head;
  }

  isFull() {
    const len = this.items.length;
    return this.head > this.tail ? this.head === this.tail + 1 : this.head === 0 && this.tail === len - 1;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.error('Queue is Full.');
      return false;
    }
    this.items[this.tail] = item;
    const len = this.items.length;
    this.tail = (this.tail + 1) % len;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error('Queue is Empty.');
      return null;
    }
    const res = this.items[this.head];
    const len = this.items.length;
    this.head = (this.head + 1) % len;
    return res;
  }

  peek() {
    if (this.isEmpty()) {
      console.error('Queue is Empty.');
      return null;
    }
    return this.items[this.head];
  }
}

// implemented by two stacks
class QueueByStack {
  constructor() {
    this.front = [];
    this.end = [];
  }

  isEmpty() {
    return this.front.length === 0 && this.end.length === 0;
  }

  size() {
    return this.front.length + this.end.length;
  }

  enqueue(item) {
    this.end.push(item);
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error('Queue is Empty.');
      return null;
    }
    if (this.front.length === 0) {
      while (this.end.length !== 0) {
        this.front.push(this.end.pop());
      }
    }
    return this.front.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.error('Queue is Empty.');
      return null;
    }
    if (this.front.length === 0) {
      while (this.end.length !== 0) {
        this.front.push(this.end.pop());
      }
    }
    return this.front[this.front.length - 1];
  }
}

// implemented by Doubly Linked List
class ListNode {
  constructor(val, pre, next) {
    this.val = val;
    this.pre = pre;
    this.next = next;
  }
}

class QueueByList {
  constructor() {
    this.head = new ListNode(0, null, null);
    this.tail = this.head;
    this.length = 0;
  }
  
  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element, null, null);
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
    this.length += 1;
    return true;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      console.error('Queue is Empty.');
      return null;
    }
    const cur = this.head.next;
    if (cur === this.tail) {
      cur.pre = null;
      this.head.next = null;
      this.tail = this.head;
    } else {
      const next = cur.next;
      cur.pre = cur.next = null;
      this.head.next = next;
      next.pre = this.head;
    }
    this.length -= 1;
    return cur.val;
  }

  peek() {
    if (this.isEmpty()) {
      console.error('Queue is Empty.');
      return null;
    }
    return this.head.next.val;
  }
}