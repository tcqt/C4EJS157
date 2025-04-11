// let Tong = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     Tong = Tong + i;
//   }
// }
// console.log("Tong cac so tu 1 den 100: " + Tong);

// // let soLuong = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0 || i % 9 == 0) {
//     console.log(i);
//   }
// }
// // console.log("So luong cac so chia het 3 va 5 (1-100): " + soLuong);

// let giaiThua = 1;
// let coSo = 5;
// for (let i = 1; i <= coSo; i++) {
//   giaiThua = giaiThua * i;
// }
// console.log("Giai thua cua " + coSo + " : " + giaiThua);

// let cuuChuong = 9;
// for (let i = 1; i <= 10; i++) {
//   console.log(cuuChuong + " x " + i + " = " + cuuChuong * i);
// }

// let coSo = 4;
// let S = 1;
// for (let i = 2; i <= coSo; i++) {
//   S = Math.sqrt(i + S);
// }
// console.log("Kết quả biểu thức với cơ số " + coSo + " : " + S);

// let coSo = 7;
// let S = 7;
// for (let i = coSo; i >= 1; i = i - 1) {
//   S = Math.sqrt(i + S);
// }
// console.log("Kết quả biểu thức với cơ số " + coSo + " : " + S);

let number = 18;
let binary = "";
console.log("Dạng nhị phân của ", number, " là : ");
while (number > 0) {
  let remainder = number % 2;
  binary = remainder + binary;
  number = Math.floor(number / 2);
}

console.log(binary);
