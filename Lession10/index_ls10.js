function countTo100() {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}
// countTo100();

// function paraReg(width, height) {
//   //   const p = (width + height) * 2;
//   //   console.log(p);
//   return (width + height) * 2;
// }

// console.log(paraReg(50, 10));

const paraReg = (width, height) => {
  return (width + height) * 2;
};
console.log(paraReg(30, 20));
