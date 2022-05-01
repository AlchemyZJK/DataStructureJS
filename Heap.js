class Heap {
  constructor(data) {
    this.data = data;
    this.heapify();
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

	getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

	isEmpty() {
		return this.data.length === 0;
	}

  heapifyUp() {
    let cur = this.data.length - 1;
    let parent = this.getParentIndex(cur);
    while (parent >= 0 && cur >= 0) {
      if (this.data[parent] < this.data[cur]) {
        this.swap(parent, cur);
        cur = parent;
        parent = this.getParentIndex(cur);
      } else {
        break;
      }
    }
  }

  heapifyDown(i) {
    if (this.data.length === 0 || this.data.length === 1) {
      return;
    }
    let cur = i;
    let left = this.getLeftChildIndex(cur);
    let right = this.getRightChildIndex(cur);
    while (left < this.data.length) {
      let largerChildIndex = left;
      if (right < this.data.length && this.data[right] > this.data[left]) {
        largerChildIndex = right;
      }
      if (this.data[largerChildIndex] > this.data[cur]) {
        this.swap(largerChildIndex, cur);
        cur = largerChildIndex;
        left = this.getLeftChildIndex(cur);
        right = this.getRightChildIndex(cur);
      } else {
        break;
      }
    }
  }

  heapify() {
    for (let i = Math.floor(this.data.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  peek() {
		if (this.isEmpty()) {
			console.error('Heap is Empty.');
			return null;
		}
    return this.data[0];
  }

  push(item) {
    this.data.push(item);
    this.heapifyUp();
  }

  poll() {
    if (this.isEmpty()) {
      return null;
    }
    const res = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    if (this.data.length > 0) {
      this.heapifyDown(0);
    }
    return res;
  }
}