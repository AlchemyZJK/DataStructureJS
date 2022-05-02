class Stack {
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