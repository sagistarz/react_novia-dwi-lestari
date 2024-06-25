Controlled Co mponent adalah sebauh element masukkan form yang nilainya dikontrol oleh react melalui cara penggabungan penyimanan dan memperbarui state.

Uncontrolled Component adalah input yang tidak terkontrol seperti input formulir HTML tradisional. kita kemudian dapat mendapatkan nilainya menggunakan ref. misalnya di tombol ditambahkan onClickHandler.

Controlled component berarti bahwa komponen form dapat merespon perubahan input dengan segera, seperti, umpan balik ditempat seperti validasi, menonaktifkan tombol kecuali semua field memiliki data yang valid, dan mengimplementasikan format input tertentu seperti nomor kredit.

Alasan harus menggunakan validasi form:
- mencari input data yag benar dan sesuai format. drbuah web atau aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi.
- melindungi akun pengguna. membuat pengguna untuk memasukkan data password yang aman
- melindungi sistem/aplikasi. dengan dapat meminimalisir perilaku pengguna yang ingin meretas sistem

Validasi terdapat 2 tipe yaitu client-side validation(pada sisi klien dan tidak perlu menunggu respon server untuk mengetahui validasi) dan server-side validation (pada sisi server dan harus menunggu respon server untuk mengetahui hasil validasi)

built-in form validation terdiri dari required (menentukan field form pelu diisi sebelum form dikirimkan), minlength dan maxlength (menentukan jumlah karakter min dan max), min dan max (untuk menentukan nilai min dan max angka), type (menentukan data berupa angka, email, dll) dan pattern (menentukan regular expression yang mendefinisikan pola yang boleh diinputkan).