  // 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
  // -----------------------------
  // 输入：l1 = [1,2,4], l2 = [1,3,4]
  // 输出：[1,1,2,3,4,4]
  // --------------------
  // 输入：l1 = [], l2 = []
  // 输出：[]
  // ---------------------
  // 输入：l1 = [], l2 = [0]
  // 输出：[0]

  import {
    Node,
    SingleLinkedList
  } from './defined.js'

  let list1 = new SingleLinkedList();
  list1.append('1')
  list1.append('2')
  list1.append('4')
  let list2 = new SingleLinkedList();
  list2.append('1')
  list2.append('3')
  list2.append('4')
  console.log('---------------- data ---------------')
  list1.display()
  list2.display()

  /**
   * 
   * @param {Node} list1 
   * @param {Node} list2 
   */
  function mergeTwoLists(list1, list2) {
    // 思路1：基于其中一个链表的进行插入
    // 创建头结点
    const preN = new Node('head');
    // pre 指向头结点
    let pre = preN
    let l1 = list1.head;
    let l2 = list2.head;
    while (l1 && l2) {
      if (l1.data >= l2.data) {
        pre.next = l2
        l2 = l2.next
      } else {
        pre.next = l1
        l1 = l1.next
      }
      pre = pre.next;
    }
    pre.next = l1 || l2
    return preN
  }