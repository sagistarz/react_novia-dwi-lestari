// contoh interasi sebanyak 100 kali

function printNumberVersionOne() {
  let number = 2;
  while (number <= 100) {
    // Jika number adalah genap, maka akan ditampilkan pada console.
    if (number % 2 == 0) {
      console.log(number);
    }
    number += 1;
  }
}

// contoh interasi sebanyak 100 kali
function printNumberVersionTwo() {
  let number = 2;
  while (number <= 100) {
    console.log(number);
    // Number langsung ditambah 2
    // Otomatis angka berikutnya adalah genap.
    number += 2;
  }
}
