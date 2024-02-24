# HTML

Front end : bagian website yang membbuat tampilan yang menarik kepada user.

**3 bahasa yang digunakan**
- HTML : struktur yang membangun komponen website
- CSS : membuat tampilan website menarik
- Javascript : website interaktif

## HTML
HTML (Hypertext Markup  Language) : standar yang digunakan secara luas untuk menampilkan halaman web

**Kegunaan HTML** :
- Membuat struktur dari halaman website
- Mengatur tampilan dan isi dari halaman web
- Membuat tabel dengan tag HTML table
- Membuat form HTML
- Membuat gambar dengan canvas
- Memublikasikan halaman website secara online

### 2 Tools untuk membantu proses development HTML
**HTML Editors/Teks Editor** 
- notepad, vscode, sublime, atom

## Syntax HTML
HTML selalu menggunakan tag untuk membangun website
- <!DOCTYPE html> : mendefinisikan dokumen ini sebagai HTML5
- <html> : elemen root dari halaman HTML
- <head> : berisi informasi meta tentang dokumen
- <title> : menentukan judul untuk dokumen di browser
- <body> : berisi konten halaman yang terlihat di browser

- <div> : menandakan sekelompok elemen, biasanya akan berisi elemen lain
- <heading> : h1 - h6 : hasil beda-beda
- <p> : paragraf
- <strong> : teks jadi bold
- <em> : italic
- <s> : garis kecoret
- <u> : underline
- <br/> : pindah ke baris baru
- <a> : link (jika di klik maka akan mengarahkan ke halama tertentu) digunakan href : kemana kita akan tertuju jika kita klik.
href itu kalo dipencet akan kebuka link nya di tab itu juga.
pertanyaan : gimana kalo kita mau buka link tersebut di new tab? tambahkan atribut <target="_blank">
contoh : <a href="http://www.alterra.id" target="_blank"></a>

- <img> : menampilkan gambar pada web
ada 2 cara : pake link atau pake file dari local
alt : untuk alternatif kalo file kita ga valid. jadi kalo gambar gamuncul, alt (teks) ini yang akan muncul

- list
ada 2 jenis list : 
1. ordered list <ol>
2. unordered list <ul>

tiap item pada <ol> atau <ul> itu digunain tag <li> dulu sebelumnya

- table
- <table> : bikin table pada HTML
- <tr> : table untuk baris
- <td> : table untuk kolom
- <th> : table untuk kolom pada header

- form : untuk membuat formulir
- <form> -> hasil tergantung input type (text/password/email/radio/dll)

- fieldset : membuat kelompok dari inputan
- legend : informasi tentang judul
- label : melabeli kotak input


3 cara menambahkan file CSS kedalam HTML : 
- Internal CSS
- Inline CSS
- External CSS
