module.exports = function reverse (n) {
//   let isNegative = false
//     if (n <0) {
//         isNegative = true; 
//     } 
  const positiveNumber = Math.abs(n); // встроенный метод, который возращает абсолютный метод числа
  const number = String(positiveNumber); // строка '123'
  const array = number.split(''); // массив строк ['1','2','3']
  const reverseArray = [];
  for (let i=0; i<array.length; i++) {
    reverseArray.unshift(array[i]) // i=0 array[0] = '1'
    // ['1']
    // i=1 array[1] = '2'
    // ['2','1']
    // i=2 array[2] = '3'
    // ['3','2','1']
  }
//   const reverseArray = array.reverse(); // массив строк ['3','2','1']
  const reverseString = reverseArray.join(''); // строка '321'
  let result = +reverseString; // приводим строку к числу 
//   if (isNegative === true){
//     result = 0 - result; 
//   }
  return result
}
