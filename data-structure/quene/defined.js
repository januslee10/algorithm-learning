class Node {
  constructor(el) {
    this.val = el;
    this.next = null;
  }
}

// 队列
class Quene {
  constructor() {
    // 定义头尾两个指针
    this.head = null;
    this.tail = null;
  }

  // 入队
  enquene(val) {
    if (this.head === null) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next
    }
  }

  // 出队
  dequeue() {
    if (this.head === null) {
      console.log('当前队列为空')
      return -1
    } else {
      let v = this.head.val;
      this.head = this.head.next;
      console.log('出队参数', v)
      return v
    }
  }

  // 展示
  display() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val)
      currentNode = currentNode.next;
    }
  }

}

//TEST
console.log('----------------测试堆栈--------------')
let quene = new Quene();
quene.enquene(1);
quene.enquene(2);
quene.enquene(3);
quene.display();
quene.dequeue();
quene.dequeue();
quene.display();