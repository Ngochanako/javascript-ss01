let a=parseFloat(prompt("Nhap diem mon vat ly:"));
let b=Number(prompt("Nhap diem mon hoa hoc:"));
let c=Number(prompt("Nhap diem mon sinh hoc:"));
let average=(a+b+c)/3
console.log("Tong diem ba mon la:"+ (a+b+c));
console.log("Diem trung binh ba mon la:"+ average.toFixed(2));