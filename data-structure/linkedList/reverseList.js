// 单链表反转
import {
  Node,
  linedList
} from './defined.js'

// 尾插法
// 1->2->3-...->4  =>  1<-2<-3...<-4  
// 需要存放前一节点的
function reverseList(list) {
  let pre = new Node('head');
  let currentNode = list.head.next;
  while (currentNode) {
    // 存放后续链表
    let next = currentNode.next;
    // 当前结点指向反转
    currentNode.next = pre.next;
    // 两个结点后移一位
    pre.next = currentNode;
    currentNode = next;
  }
  list.head = pre
}

//TEST
console.log('--------------原始----------')
reverseList(linedList)
linedList.display()