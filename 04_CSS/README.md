# CSS (Cascading Style Sheets)
Berfungsi untuk menghias halaman web

### 3 cara 	menambahkan file CSS ke dalam HTML
**1. External CSS**
- membuat file css sendiri
- menambahkan tag link <href> untuk merujuk pada file yang akan dimasukan 
<rel> stylesheet -> menandakan file yang dimasukan adalah file css

**2. Internal CSS**
- tidak perlu menambahkan file sendiri
- menambahkan tag style pada bagian head/body

**3. Inline CSS**
- menambahkan atribut style pada komponen atribut yang ingin diubah

Syntax CSS
- Selector: cara memilih elemen css yang akan di styling dan didalamnya terdapat atribut2 
- property:value;

### Penanda HTML ke dalam CSS dapat menggunakan selector ID dan Class
**1. ID (#)**
- setiap elemen hanya dapat memiliki satu tag id
- dalam satu halaman tidak boleh ada dua penamaan id yang berbeda
- id bersifat unik

**2. Class(.)**
- tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman
- satu elemen boleh memiliki lebih dari satu class yang berbeda
- class itu boleh lebih dari satu
contoh : div.class = my-class my-class2 -> 2 class

### CSS Grouping
- Beberapa selector dapat dikelompokkan dalam satu deklarasi style -> dipisahkan dengan koma
contoh : .my-class1, .my-class2

### CSS Font Properties
- Font
- Font-family
- Font-size
- Font-weight
- Font-style

font online : fonts.google.com

### CSS Margin dan Padding
- Membuat ruang disekitar element
- Margin : jarak yang diberikan ke bagian luar elemen
- Padding : jarak yang diberikan ke bagian dalam elemen (bikin elemen lebih lebar)

bagian : atas kanan bawah kiri

### CSS Background
- Background-color: warna background
- Background-image: gambar background
- Background-repeat: gambar background untuk diulang
- Background-size: ukuran gambar background
- Background-position: posisi awal gambar background

### CSS Link Event
- :hover: kondisi ketika mouse berada diatas elemen
- :active: style ketika link "a" ditekan
- :visited: style dimana elemen link "a" telah dikunjungi/diklik

contoh 
a:visited{
  color : #ffff;
}

a:link {} -> warna ketika link blm dikunjungi
a:visited {} -> warna ketika link udah dikunjungi

### CSS Display
-> untuk menentkan bagaimana tampilan suatu elemen
-  block : elemen memenuhi dimulai dari ujung kiri ke kanan
- inline-block: membutuhkan lebar sesuai yang diperlukan
- none: menyembunyikan elemen untuk tidak ditampilkan

### CSS Table
Membuat style pada elemen table HTML
- border -> menambahkan border pada table, th, dan td
- border-collapse : membuat border menjadi single border
- :nth-child(even) : membuat background stripe

fonts : fonts.google.com
w3school css
box shadow css : cssmatic.com/box-shadow
