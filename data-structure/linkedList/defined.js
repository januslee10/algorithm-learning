// 定义节点
class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

// 单链表
class SingleLinkedList {
  constructor() {
    this.head = new Node('head')
  }

  // 根据value查找
  findByValue(val) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.data !== val) {
      currentNode = currentNode.next;
    }
    console.log('[当前节点]', currentNode.data);
    return currentNode || -1
  }

  // 根据下标查找
  findByIndex(idx) {
    let currentNode = this.head;
    let pos = 0;
    while (currentNode !== null && pos !== idx) {
      currentNode = currentNode.next;
      pos++
    }
    console.log('[当前节点]', currentNode);
    return currentNode || -1
  }

  // 链表末尾添加结点
  append(val) {
    let newNode = new Node(val);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  // 指定元素向后插入
  insert(val, target) {
    let newNode = new Node(val);
    let currentNode = this.findByValue(target);
    if (!currentNode) {
      console.log('[未找到插入位置]')
      return
    }
    // 注意此处操作，避免内存泄漏
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 查找前一项
  findPrev(val) {
    let currentNode = this.head;
    while (currentNode && currentNode.next.data !== val) {
      currentNode = currentNode.next
    }
    return currentNode || -1
  }

  // 根据值删除
  remove(val) {
    let preNode = this.findPrev(val);
    if (!preNode) {
      console.log('未找到元素')
      return
    }
    preNode.next = preNode.next.next
  }

  // 遍历显示所有节点
  display() {
    let currentNode = this.head;
    while (currentNode) {
      console.log('[结点]', currentNode.data)
      currentNode = currentNode.next
    }
  }

  // 反转链表
  reverseList() {
    let pre = new Node('head');
    let currentNode = this.head.next;
    while (currentNode) {
      // 务必先存放Next
      let next = currentNode.next;
      currentNode.next = pre;
      pre = currentNode;
      currentNode = next
    }
    this.head = pre
  }

  isEmpty() {
    if (!this.head) {
      return true
    }
  }
  // 判断是否环
  // 快慢指针
  isCircle() {
    // 判空
    if (this.isEmpty()) {
      return false
    }
    // 定义快慢指针
    let fast = this.head.next
    let slow = this.head
    // 如果无环则一定会终结，否则会一直循环
    while (fast !== null && fast.next !== null) {
      // 每一次快指针多走一步，但是因为环的存在，必将与慢指针相遇
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) return true
    }
    return false
  }

  // 删除链表中倒数第k个节点
  removeByIndexFromEnd(inedx) {
    // 思路：快慢指针，当快指针指向尾结点时，慢指针此时指向目标节点
    let slow = this.head;
    let fast = this.head;
    let count = 0;
    // 推移快指针指向
    while (count < inedx) {
      fast = fast.next;
      count++
    }
    // 同步移动
    while (fast.next) {
      fast = fast.next
      slow = slow.next
    }
    // 此时慢指针即为目标节点前一个
    let next = slow.next.next;
    slow.next = next;
  }

  // 返回链表中间节点
  getMiddle() {
    // 思路：快慢指针，慢指针每走一步，快指针走两步，当快指针到头的时候，慢指针位置即为中间节点
    let slow = this.head;
    let fast = this.head;
    let pos = 0;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next
      pos++
    }
    console.log('[middle position]', pos)
    return pos
  }
}

// Test
let linedList = new SingleLinkedList();
linedList.append('secend');
linedList.append('third');
linedList.append('fouth');
linedList.append('fifth');
linedList.display();
// console.log('-------------insert item------------')
// linedList.insert('insert1', 'secend');
// linedList.insert('insert2', 'fifth');
// linedList.display()
// console.log('-------------remove item------------')
// linedList.remove('insert1')
// linedList.display()
// console.log('-------------remove------------')
// linedList.remove('insert2')
// linedList.display()
// console.log('-------------findByIndex------------')
// linedList.findByIndex(2)
// console.log('-------------与头结点同值元素测试------------')
// linedList.insert('head', 'third')
// linedList.display() // chen -> qian -> sang -> head -> zhao -> zhou
// linedList.findPrev('head') // sang
// linedList.remove('head')
// linedList.display() // chen -> qian -> sang -> zhao -> zhou
// console.log('-------------reverse------------')
// linedList.reverseList();
// linedList.display()
// console.log('-------------check circle------------')
// console.log(linedList.isCircle())
// console.log('-------------removeByIndexFromEnd------------')
// linedList.removeByIndexFromEnd(1)
// linedList.display()
console.log('-------------getMiddle------------')
linedList.getMiddle()

export {
  Node,
  SingleLinkedList,
  linedList
}