// 递归=递推公式+终止条件
// 有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法
// 第一步走一个台阶
// f(n - 1)
// 第一步走两个台阶
// f(n - 2)
// 递推公式
// f(n) = f(n - 1) + f(n - 2)
let hashMap = new Map();

function getSteps(n) {
  console.log('当前层级', n)
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else {
    if (!hashMap.has(n)) {
      hashMap.set(n, getSteps(n - 1) + getSteps(n - 2))
    }
    return hashMap.get(n)
  }
}

console.log('--------------测试递归-----------')
// let n1 = 2;
// let n2 = 10;
let n3 = 1000;

// let answer1 = getSteps(n1)
// let answer2 = getSteps(n2)
let answer3 = getSteps(n3)

// console.log(`爬${n1}层有${answer1}种解法`)
// console.log(`爬${n2}层有${answer2}种解法`)

console.log(`爬${n3}层有${answer3}种解法`)