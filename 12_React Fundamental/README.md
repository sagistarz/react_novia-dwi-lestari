# React Fundamental

## JSX

**Apa itu JSX?**
- Singkatan dari Javascript XML
- Ekstensi pada jabascript 
- Menghasilkan react element

contoh
''const element = <h1> Hello world </h1>;

**Kenapa menggunakan JSX?**
- Dibutakan berdasarkan fakta kalau logika rendering sangat terikat dengn logic UI
- Separation of technology -> separation of concern (memisahkan berdasarkan kepentingan <komponen>)

**JSX vs React.createElement**
- Memudahkan kita menulis aplikasi react

**Spesifikai jenis elemen react**
- Kapitalisasi untuk komponen react (yang kita buat)
- Lowercase untuk komponen bawaan

**Menaruh expression pada JSX**
- Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal

**JSX adalah expression**
- Seteleh dikompilasi, ekspresi JSX akan menjadi panggulam fungsi JS bisa dan menjadi objek JS

**Menentukan atribut dengan JSX**
- Tanda kutip untuk menentukan string literal
- Kurung kuraawal untuk menyematkan ekspresi Javascript
- React DOM menggunakan camelCase sebagai konvensi penamaan (contoh onClick, className)

**Menspesifikasikan elemen anak dengan JSX**
- Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa saja menutupnya secara langsung dengan />
contoh : <Navbar/>, <img/>

## React Component
**Apa itu component?**
- Bagian kdoe yang dapat digunakan kembali untuk digunakan untuk menentukan tampilan, behavior, dan state sebagian UI (akan memudahkan kita)

**Membagi UI menjadi beberapa komponen**
1. Menggambar kotak kotak pada tiap komponen dan sub komponen serta memberikan nama untuk tiap komponen (bisa tanya designer)
2. Teknik single responsibility principle (satu komponen menjalankan satu tugas)

**Function and class component**
- Punya fungsionalitas yang sama

**Membuat dan merender component**
ReactDOM. render dipanggil menggunakan variabel element


## Component Composition
**Apa itu Props?**

- Singkatan dari properties, membuat kita dapat memberikan argumen/data pada komponen
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberika atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah

Props bisa apa aja (array, object, bahkan react element)

**One Way data flow**
- Data cuma punya satu cara untuk di transfer ke bagian lain dari sebuah aplikasi (melalui props). Ini dari parent ke child aja
- Children (mengimplementasikan perubahan melaui render ulang, mengoper props ke children nya)

**Komposisi komponen**
1. Kontainmen
2. Spesialisasi

## React Lifecycle
- Sederetan event dari awal komponen muncul dampe menghilang dari aplikasi kita
- Dibagi 3
- Mounting (Lahir) -> hanya terhjadi sekali
- Updating (Tumbuh) -> terjadi berkali2 (state baru, props baru, dll)
- Unmounting (Mati) -> hanya terjadi satu kali

Tiap siklus dibagi menjadi 3 fase
- Render phase
fungsi harus pure dan tidak boleh ada side effect
side effect : melakukan perubahan state pada komponen
- Pre-commit phase
membaca DOM
- Commit phase
melakukan pengolahan DOM dan melakukan side effecr

- Lifecycle method yang umum digunakan
1. render()
paling sering ditemui
ketika membuat komponen class, fungsi render adalah MANDATORY
harus mengguunakan pure function
tidak boleh ada side effect
2. componentDidMount()
- dipanggil pertama kali ketika component sudah di render/sudah di mount
- tempat yang tepat untuk pemanggilan API
- boleh ada side effect seperti melakukan perubahan state menggunakan setState()
3. componentDidUpdate()
- dipanggil ketika komponen mengalami update (props/state berubah)
- bisa ada side effect (hati2 bisa infinit loop) -> harus melakukan kondisi (if else or any)
4. componentWillUnmount()
- dipanggil ketika komponen akan dihancurkan
- cocok untukclean upactions (membatalkan pemanggilan API, menghaspus useEffect dll)

lifecycle lainnya : 
- shouldComponentUpdate()
- static getDerivedStateFromProps()
- getSnapshotBeforeUpdate()

Details
Saat pertama kali component di mounting, yang pertama terjadi ketika kita menggunakan class component, kita akan memanggil constructor.
ketika kita punya lifecycle getDerivedStateFromProps() kita akan memanggilnya juga. Selanjutnya akan dilakukan rendering, lalu react akan mengupdate DOM dan refs. Lalu setelahnya componentDidMount akan dipanggil, nah ketika terjadi perubahan pada react komponen, akan mengalami siklus updating. Ini akan memanggil kembali getDerivedStateFromProps(), lalu dipanggil shouldComponentUpdate() dan dilakukan (render atau membatalkan). Kalo dirender, lanjut ke getSnapshotBeforeUpdate() -> bisa membaca DOM. lalu DOM akan diupdate. selanjutnya dipanggil componentDidUpdate, selanjutnya kalo mau dihancurkan, dipanggil componentWillUnmount().

## Conditional
**Render Bersyarat**
Cara untuk melakukan render bersyarat :
- Menggunakan If
- Inline If dengan operator &&
- Inline If-Else dengan ternary conditional operator (conition ? true : false)
- Mencega komponen untuk rendering -> pake return null

**Render List**
Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}

**Render Komponen List**
harus pake komponen key


**Key**
Membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.
Cara untuk menentukan key -> mneggunakan string unique
Jangan gunakan indeks sebagai key (tp otomatis nya pake indeks)

**Menanamkan map() pada JSX**

## Directory Structure
- Pengelompokan berdasarkan fitur atau rute
- Pengelompokan berdasarkan jenis file
- context -> untuk state management
- hooks
- pages -> halaman yang dipunya
- routes -> routing yang dibuat menggunakan react router dom

Bagaimana cara menentukan life structure
- Hindari terlalu banyak nesting
- Dont think too much (pilih salah satu pendekatan kurang dari 5 menit)

## Styling Inline
**Classes dan CSS**
- paling simple
- bikin file.css, nanti di import di component react

**ATribut Style**
- ditempel di elemen jsx
- gaperlu punya file css external
- cara -> style={{backgroundColor : 'yellow'}} ->pake camel case bukan pake strip (cth : background-color di css jadi backgroundColor)
- di implementasi di lokal

**Modul CSS**
- menggunakan class tapi css hanya di scope tertentu
- import ./Button.module.css
- className-{style.content}
