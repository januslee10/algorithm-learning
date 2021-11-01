class ArrayStack {
  constructor() {
    this.items = [];
    this.size = this.items.length;
  }
  push(val) {
    this.items.push(val)
  }
  pop() {
    this.items.pop()
  }
}