class TNode {
  constructor(data, left, rigth) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    console.log('[当前节点]', this.data)
  }
}

class CompleteBinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new TNode(data, null, null)

    // 无根节点
    if (!this.root) {
      this.root = node;
      return
    }

    // 获取根节点
    var current = this.root;
    // 存放父节点
    var parent = null;
    while (current) {
      parent = current;
      if (data < parent.data) {
        current = current.left;
        if (!current) {
          parent.left = node;
          return;
        } else {
          current = current.right;
          if (!current) {
            parent.right = node;
            return;
          }
        }
      }
    }

    preOrder() {
      return
    }

    middleOrder() {

    }

    laterOrder() {

    }

    getMin() {

    }

    getMax() {

    }

    getDeep() {

    }
  }