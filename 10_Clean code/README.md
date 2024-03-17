# Clean Code

**Kenapa clean code?**
- Work collaboration
- Feature development -> mudah dibacanya
- Faster development -> mudah dimengerti akan mudah di development

### **Karakteristik clean code**
1. Penamaan mudah dipahami
2. Mudah dieja dan dicari (jangan disingkat2 gajelas)
3. Singkat namun mendeskripsikan konteks dengan jelas
4. Konsisten (camelcase, uppercase, lowercase -> dikonsistenkan)
5. Hindari penambahan konteks yang tidak perlu
6. Komentar -> berikan komentar pada block code tertentu aja, jangan tiap line dikomentarin (secukupnya aja)
Komentar selalu diatas action ya jangan setelah kode nya selesai
7. Good function
8. Gunakan konvensi (ikuti style guide dari company2 diluar. cth : Airbnb, google)
9. Formatting
- lebar baris code 80 - 120 karakter
- satu class 300 - 500 baris
- baris code yang berhubungan saling berdekatan
- dekkatkan fungsi dengan pemanggilnya
- deklarasi variabel berdekatan dengan penggunanya
- perhatikan indentasi (cth python sangat sensitif dengan indentasi)
- menggunakan prettier atau formatter

### **Clean code principle**
**1. KISS (Keep It So Simple)**
-> Hindari membuat fungsi yang melakukan lebih dari 1 hal.

**Tips untuk selalu KISS**
- fungsi/class harus kecil
- fungsi dubuat untuk melakukan stau tugas saja
- jangan gunakan terlalu banyak argumen pada fungsi
- harus diperhatikan untuk mencapai konsidi yang seibang, kecil dan jumlahnya minimal

notes : better dibikin object biar pas di fungsi, tinggal panggil object nya

**2. DTY (Dont Repeat Yourself)**
-> jangan duplikasi kode terus menerus
duplikasi code terjadi karena sering copy paste. untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang (buat satu file -> helper)

**Refactoring**
-> proses restrukrisasi kode yang dibuat dengan mengubah struktur internal. 
cara mengubah struktur internal tanpa mengubah perilaku eksternal. prinsip KISS dan DRY bisa dicapai dengan cara refcator
-> kita cuma ubah kode nya aja tanpa mengubah return.

**Teknik refactoring**
- membuat sebuah abstraksi (bikin list dari fungsi2 apa aja)
- memecah kode dengan fungsi/class
- perbaiki penamaan dan lokasi kode
- deteksi kode yang memiliki duplikasi
