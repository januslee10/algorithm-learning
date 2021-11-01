// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
// 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323

// 思路：聚焦到每两个数字，有两种组合方式ab ba 若ab>ba 则b 在 a前,简而言之：每两个数的先后顺序由他们组合而成的string决定
/**
 * 
 * @param {Array} numbers 
 */
function PrintMinNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return "";
  }
  return numbers.sort(compare).join('')
}

function compare(a, b) {
  let front = '' + a + b;
  let behind = '' + b + a;
  return front - behind
}
let arr = [3, 32, 3231]
console.log('result', PrintMinNumber(arr))