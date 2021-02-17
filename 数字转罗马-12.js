
// 1. 
// let obj = {
//   1: "I",
//   4: "IV",
//   5: "V",
//   9: "IX",
//   10: "X",
//   40: "XL",
//   50: "L",
//   90: "XC",
//   100: "C",
//   400: "CD",
//   500: "D",
//   900: "CM",
//   1000: "M",
// };
// let num = 2000 + "",
//   result = "";
// for (let i = 0; i <= num.length - 1; i++) {
//   let place = num[i] * Math.pow(10, num.length - i - 1);
//   if (obj[place] != undefined) {
//     result += obj[place];
//   } else {
//     let arr = Object.keys(obj).map(Number),min;

//     while (place != 0) {
//       if (place >= arr[arr.length - 1]) {
//         min = arr[arr.length - 1];
//       } else {
//         min = arr.find((item, index) => {
//           return item <= place && arr[index + 1] > place;
//         });
//       }
      
//       result += obj[min];
//       place = place - min;
//     }
//   }
// }
// console.log(result);

// 2. 
let dic = [
  { s: "I", n: 1 },
  { s: "IV", n: 4 },
  { s: "V", n: 5 },
  { s: "IX", n: 9 },
  { s: "X", n: 10 },
  { s: "XL", n: 40 },
  { s: "L", n: 50 },
  { s: "XC", n: 90 },
  { s: "C", n: 100 },
  { s: "CD", n: 400 },
  { s: "D", n: 500 },
  { s: "CM", n: 900 },
  { s: "M", n: 1000 },
];
let num = 299;
let res = "";
while (num > 0) {
  for (let i = dic.length - 1; i >= 0; --i) {
    if (num - dic[i].n >= 0) {
      res += dic[i].s;
      num -= dic[i].n;
      break;
    }
  }
}