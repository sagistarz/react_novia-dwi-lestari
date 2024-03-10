# Javascript Refreshment

**1. Explaination**
   Javascript adalah bahasa pemrograman yang high-level, scripting, untyped, dan intrepreted.

    Kenapa JS?
    - High level (mudah dimengerti orang)
    - Scripting (dibuat untuk berinteraksi dengan web)
    - Untyped (tidak berpengaruh dengan tipe data)
    - Intrepreted (selama mempunyai web browser, JS akan bisa digunakan)
    - Punya banyak framework

**2. Values**
    Declaration = proses pembuatan variabel untuk menyimpan data.
    Cara pendeklarasian variabel
    Var = umunnya jarang digunakan, namun kegunaan seperti let
    Let = digunakan saat kita membutuhkan nilai yang dapat diubah
    Const = dugunakan ektika kita membutuhkan nilai yang tidak bisa di reassign/nilai nya tidak bisa diganti

    Saat kita mendeklarasikan variabel const, kita harus memberi nilai pada variabel tersebut (gaboleh kosong).

    BISA
    Var num1
    Let num2

    GABISA
    Const num3 --> bakal error
    Harusnya Const num3 = 0

    Redeclaration
    -> mendeklarasikan variabel dengan nama yang sama
    Var -> bisa deklarasi ulang
    Let dan Const -> tidak bisa deklarasi ulang

    Contoh
    BISA
    Var num1
    Var num1

    GABISA
    Let num2
    Let num2

    Const num3 = 1
    Const num3 = 1

    Reassignment
    -> memberikan nilai baru kepada variabel yang sudah ada nilai sebelumnya
    Var dan let bisa
    Const gabisa

    Scoping
    = menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variabl dikendalikan oleh lokasi deklarasi variabel.

    3 macam scoping
    1. global = variabel dapat diakses untuk semua kondisi
    2. function = deklarasi varibel di dala =m function dan hanya bisa diakses didalam function
    3. block = berkaitan dengan tanda kurung kurawal. Jika di block scope, hanya variabel Var yang dapat diakses di semua program.

    Hoisting
    = membuat beberapa jenis variabel atau fungsi yang dapat diakses atau digunakan dalam kode sebelum di deklarasikan (jadi kasih nilai variabel dulu baru nanti dipanggil).
    Let dan const tidak hoisted

**3. Understanding variable**
    Values & References
    JS punya 2 kategoru tipe data
    Primitive -> meneruskan nilai (elemen paling sederhana)
    Tipe data : string, boolean, number, bigInt, undefined, null, symbol
    Objects -> disebut juga sebagai collection/reference type (unit yang menyimpan property/method)

    Tipe data : object, array, function, date, set, map, weak set, weak map

**4.  Destructuring**
    = ekspresi dari javascript yang memungkinkan untuk menyalin nilai dari array atau properti dari object, ke dalam variabel yang berbeda

    Jadi tugas destructuring adalah MENYALIN

    Spread
    = spread syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar
    Spread syntax dilambangkan dengan titik 3 lalu dilanjutkan dengan nama variabel yang akan kita salin

**5. Method**
	= merupakan sebuah fungsi yang terkait dengan object, membuat programnya se sederhana mungkin sesuai kegunaan masing-masing.
	(shortcut pada code kita)
	
	Concat
	Mirip spread syntax tapi ini lebih ke pemakaiannya
	Untuk menyalin lebih baik pake sprad syntax, tapi untuk menggabungkannya pake concat aja

    Map	
    Hasil dari method map adalah sebuah ARRAY

	Foreach
	Bedanya map sama foreach?
	Map -> untuk melooping sebuah array dan menghaslkan array
    Foreach -> melakukan looping dan di dalam loopingan nya kita melakukan operasi atau melanjutnya fungsi di dalamnya

    Reduce
	Accumulator = hasil proses yang akan dilakukan
    Currentvalue = elem2 yang ada di array 1

**6. Control flow**
	Normal flow
	Pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan
	
	Control flow
	Mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita
	- Pengulangan
	Loop/iterasi -> for, while, do while
	- Pengkondisioan
    Percabangan -> if...else, switch, block, try…catch, break, continue, throw (kalo kita pilih statement a, maka statemet b gadipake)

**7. Function**
	Function di dalam JS adalah sebuah object karena mmeiliki properti dan juga method
    Digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali

**8. Class**
	Class 
	Adalah prototpe dari suatu object yang akan kita buat
	
	Constructor
	Adalah method di dalam class yang akan selalu terpanggil pertama kali ketika membuat object
	
	Method
	Fungsi yang ada di dalam class (cth : perkenalan).
	Method akan dipanggil ketika dipanggil
	
	Attributes
	Kumpulan variabel yang membentuk object yang dimiliki oleh suatu class (mewakilkan apa yang dipunyai oleh class)
	
	Extend
    Untuk membuat kelas anak dari kelas induk. Kelas anak akan mewarisi semya atribut dan metode dari kelas induk.

	Super -> digunakan untuk mendapatkan atribut pada kelas nduk yang sudah dideklarasikan sebelumnya
	
**9. Async wait**
    Synchronus = mengeksekusi setiap perintah satu eprsatu sesuai urutan kode yang dituliskan.
	Asynchronus = hasil dari eksukusi/output yang tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses
	Callback = fungsi yang dikirimkan sebagai parameter pada fungsi lain/ fungsi yang diseksekusi setelah fungsi lain selesai dijalankan
	
	Panggil function lain di dalam function lain
	Promise = objek yang merepresentasikan keberhasilan/kegagalan pada sebuah event yang asynchronus dimasa mendatag

	Asynchronus function
	= sebuah fungsi yang bekerja secara secara asynchronus yang menghasilkan promise sebagai return value nya, tetapi cara penulisan code nya menggunakan penulisan yang synchronus (standar)
	
	Await
    = sebuah keyword yang terdapat pada asyn function yang tujuannya menghentikan eksekusi sambil menunggu promise nya selesai

**10. DOM (Document Object Model)**
	= API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjasi sebuah object
	
	Jadi kita bisa bikin komponen2 yang bisa diakses krn ada dom ini

    DOM Event
	Inline = otak atik halaman hhtml dan kita otak atik juga di js nya
	Element method = Kita gak otak atik html nya (kita pake DOM buat meklakukan event pada html tsb di js)
    Addeventlisetener = Sm kyk elmenet method Cuma beda penulisan code


