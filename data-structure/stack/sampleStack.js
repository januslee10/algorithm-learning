// 基于浏览器实现前进后退
class Browser {
  constructor() {
    this.current = [];
    this.history = [];
  }

  // 正常浏览
  open(page) {
    this.current.push(page)
  }

  // 前进
  goto() {
    if (this.history.length === 0) {
      console.log('无历史记录')
      return
    }
    let currentpPage = this.history[this.history.length - 1]
    this.current.push(currentpPage)
    this.history.pop()
  }

  // 后退
  back() {
    let currentpPage = this.current[this.current.length - 1];
    this.history.push(currentpPage)
    this.current.pop()
  }

  display() {
    console.log('浏览页')
    this.current.forEach((val, index) => {
      console.log(`[${index}]:${val}`)
    })
    console.log('后退页')
    this.history.forEach((val, index) => {
      console.log(`[${index}]:${val}`)
    })
  }
}

console.log('-----------测试浏览器-----------')
let bs = new Browser();
console.log('-----------打开三次-----------')
bs.open('a')
bs.open('b')
bs.open('c')
bs.display()
console.log('-----------后退一次-----------')
bs.back()
bs.display()
console.log('-----------后退两次-----------')
bs.back()
bs.display()
console.log('-----------前进一次-----------')
bs.goto()
bs.display()