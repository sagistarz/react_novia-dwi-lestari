//TIDAK EFISIEN
// function printNumberVersionOne() {
//   let number = 2;
//   while (number <= 100) {
//     if (number % 2 == 0) {
//       console.log(number);
//     }
//     number += 1;
//   }
// }

// printNumberVersionOne();

// function printNumberVersionOne() {
//   let number = 2;
//   while (number <= 100) {
//     console.log(number);
//     number += 2;
//   }
// }

// printNumberVersionOne();

//TIDAK EFISIEN
// const x = "halo,";
// const y = "selamat";
// const z = "ulang tahun.";

// console.log(x, y, z);

//EFISIEN
// const array = ["halo,", "selamat", "ulang tahun."];
// console.log(array[0], array[1], array[2])

// var array = ["anggur", "durian", "mangga"]
// var buah = array[2];
// console.log(buah);

// var array = ["anggur", "durian", "mangga", "jeruk", "belimbing"];
// // var indeksJeruk = array.indexOf("jeruk");
// // console.log(indeksJeruk);
// console.log(array)
// array.push("stroberi");

// console.log(array);

//INSERTION
// var array = ["anggur", "durian", "mangga", "jeruk", "belimbing"];
// array.splice(2, 0, "ceri");
//2 ini adalah ceri mau dimasukin ke array brp,
//0 ini adalah berapa elemen/indeks yang mau dihapus
//ceri ini value yang mau dimasukkin
// console.log(array);

//SET
// const letters = new Set(["a", "b", "c", "d", "e"]);
// console.log(letters);
// letters.add("f"); //kalo data nya sama gak error tapi gak akan ke duplikat
// console.log(letters);

// //READING
// const letters = new Set(["a", "b", "c", "d", "e"]);
// console.log("sebelum = ",letters);

// let text = "";

// letters.forEach(function(value) {
//     //logic
//     text += value + " - ";
// })

// console.log("text = ", text);
// console.log("sesudah = ", letters);

//SEARCHING
// const letters = new Set(["a", "b", "c", "d", "e"]);
// console.log(letters.has("a")); //true
// console.log(letters.has(a)); //false

//DELETION
const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 10, y: 30 });
console.log(set1.size);

set1.forEach((point) => {
  //logic
  if (point.x > 10) {
    set1.delete(point);
  }
});
