# Introduction Data Structures (javascript)

Kenapa harus belajar data structure?
- agar mengerti kualitas kode yang dibuat
- dapat mengefisiensi kode

**data structure**
data adalah cakupan luas merujuk semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dll)
data structure adalah bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer
data dapat dikelola dengan berbagai cara

gak efisien : declare satu value satu variabel
efisien : pake array

basic data structures
1. array
2. set

Array
kalo pengen masukin value ke index terakhir, pake "push"
array.push('value')

array = nama variabel yang dibuat, bisa bebas

Set
set mirip kyk array tapi
set gak mengizinkan duplikasi value di dalamnya
set bentukannya object
kalo pengen masukin value ke index terakhir, pake "add"
letters.add("d")

letters = nama variabel bebas

operasi data stuctures
- read : membaca -> cth : console.log (mengeluarkan value dalam suatu var)
- search : menacari value di dalam variabel/object
- insert : memasukan 1 data stcuture
- delete : menghapus 

untuk mengukur kecepatan operasi menggunakan
- **seberapa banyak langkah/steps** yang diperlukan
knp gak pake waktu? kaena waktu dapat berjalan dinamis bergantung kepada enviornment nya (entah hardware, logic, dll)

**ARRAY**
- data stucture paling sederhana
- memiliki indeks yang menidentifikasi dimana posisi elemen berada
- indeks dimulai dari 0

**Reading**
- nilai yang terkandung pada indeks tertentu di dalam array (buat liat nilai array)
- operasi yang paling dasar
- operasi yang efisien karena cuma butuh 1 step
- setiap cell pada memori memoliki alamat spesifik yang diwakili dengan angka
- angka yang dimiliki lebih besar dari cell sebelumnya (makin besar indeks, makin besar nilai cell)
misal 
indeks 0 = 1020
indeks 1 = 1021

**Searching**
- mencari apakah nilai tertentu ada datau tidak di dalam suatu array
- searching ini kebalikan dari reading
- ketika melakukan operasi searching pada array, komputer tidka memliki cara untuk melompat langsung ke nilai tertentu
- komputer tidak bsia tahu begitu saja nilai apa yang terkandung pada setiap memori

maka ketika ingin menggunakan searching	
- indeks dari array
- baru cek apakah nilau nya sama dengan value yang kita cari
- komputer perlu memeriksa setiap cell satu per satu (dari indeks pertama dari array tersebut)
- searching kurang efisien dibandingkan dengan reading (karena reading lebih cepat menemukan sesuatu)
- searching terdiri dr bbrp step, kalo reading kan cuma 1 step
- membutuhkan banyak steps sesuai dengan ukuran array atau disebut juga linear searching
- step maksimal searching tergantung dari indeks value tersebut (n steps), minimal  nya gatau tergantung metodologi yang digunakan

**Insertion**
- operasi dimana kita bisa memasukkan value baru
- efisiensi tergantung dimana kita memasukkan value nya (efisiensi tergantung dimana kita masukin value nya)
- memasukan value pada akhir aray hanya membutuhkan 1 step
- kalo masukin di awal/tengah, jumlah step nya akan berbeda ya (perlu menggerser data yang sudah ada pada array)
- worst case insertion pada array yaitu melakukannya pada awal dari sebuah array, sehingga membutuhkan N+1 steps. N untuk jumlah steps untuk menggeser, 1 steps untuk memasukkan (insertion) array

**Deletion**
- operasi menghilangkan value pada index tertentu
- membutuhkan jumlah N steps untuk array yang mengandung N data (berapa data yang perlu digeser)
- operasi deletion membutuhkan steps menghapus dan menggeser/memindahkan)

- sekario terburuk yaitu menghilangkan value pada awal sebuah awway

menghapus elemen dari array pake -> length (jumlah dr array)

**SET**
- struktur data sama seperti array tapi bedanya set tidak boleh duplikasi value
- dari keempat operasi reading, searching, insertion, dan deletion terdapat perbedaan efisiensi pada operasi insertion. sedangkan untuk operasi lainnya sama seperti array
untuk read -> pake add -> letters.add("value")
- set punya method sendiri untuk digunakan

operasi pada Set
- reading : menggunakan forEach
- searching : menggunakan has method

insertion pada set
- perlu steps tambahan untuk emmastikan bahwa value yang ingin dimasukan tidak ada di dalam set
- maka operasi searching akan dijalankan terlebih daulu untuk melihat value nya (untuk tau apakah ada value yg sama apa ngga)
- operasi searching bsia mencapai N steps

best case insertion : insertion pada akhir set, tapi tetep aja membutuhkan 6 steps pada kasus jumlah value awal 5 elemen. sedangkan array cuma 1 steps
worst case : insertion di awal

**Kesimpulan**
• Menganalisa jumlah steps adalah sangat penting untuk mengetahui performa dari sebuah data structure di suatu aplikasi 
• Reading, searching, dan deletion pada array dan set memiliki efisiensi yang sama yaitu secara berurutan 1 steps, N steps, dan N steps. 
Terdapat perbedaan pada operasi insertion, dimana skenario terbaik pada array yaitu 1 steps sedangkan pada set yaitu N + 1 steps 
• Set penting jika kita menginginkan data structure yang terbebas dari duplikasi walaupun lebih lambat dari array pada operasi insertion nya 
• Namun jika tidak membutuhkan pemeriksaan duplikasi, menggunakan array lebih disarankan


