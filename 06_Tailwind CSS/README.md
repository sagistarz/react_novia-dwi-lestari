# Tailwind

### Kenapa Tailwind?
- Banyak digunakan di industri
- Fitur lengkap
- Skill yang dibutuhkan oleh FE engineer

Framework CSS akan memudahkan dalam mengembangkan front end menjadi lebih cepat

### Tailwind CSS
-> Sebuah framework CSS yang memanfaatkan class utility dalam mengembangkan tampilan web dengan lebih mudah dan cepat

### Install Tailwind
1. npm init
2. npm install -D tailwindcss
3. npx tailwindcss init

### Tailwind CSS Setup in React
1. npm create vite@latest tailwind-css-react -- --template react
2. cd tailwind-css-react
3. npm install -D tailwind postcss autoprefixer
4. npx tailwindcss init -p

### Tailwind CSS Setup in Reeact - Start dev server
1. npm run dev

### Mengatur Margin di Tailwind CSS
m -> margin semua sisi
mt -> margin sisi atas
mb -> margin sisi bawah
mr -> margin kanan
ml -> margin kiri
mx -> margin kanan kiri (sumbu x)
my -> margin atas bawah (sumbu y)

pemakaian : m-2; mt-10; mr-3; my-4
padding sama aja cuma m nya diganti p

### Ukuran Teks di Tailwind
text-sm -> teks berukuran kecil
text-base -> teks berukuran sedang
text-lg -> teks berukuran besar
text-xl -> teks berukuran lebih besar
text-3xl -> teks berukuran lebih besar 3x

### Pseudo Class di Tailwind
hover -> ngubah style ketika kursor diatas elemen 
cth : hover:bg-blue-200

focus -> ubah style ketika elemen dalam kondisi fokus
cth : focus-ring-violet-400

active -> ubah style ketika elemen kondisi aktif
cth : active:bg-blue-700

invalid -> ubah elemen ketika nilai yang dimasukin gak sesuai
cth : invalid:text-pink-600

### Dark mode   
cara :
- menggunakan pefiks dark
- tambahkan utility class yang ingin digunain

### Directives
Dapat digunakan untuk menyimpan sekumpulan utility class menjadi satu class utuh yang nantinya dapat digunakan, dapat digunakan untuk mengurangi duplikasi penggunaan utility class sehingga ketika da perubahan style cukup diubah di satu tempat saja, dapat digunakan bersama dengan utility class lainnya


### Responsive Design
-> menggunakan breakpoint yang udah tersedia