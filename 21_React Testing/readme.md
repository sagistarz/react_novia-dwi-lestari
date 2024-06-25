## Testing Introduction

Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code yang dibuat benar sepanjang masa aplikasi. 

Test assertion adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di code kita.

manfaat testing:

1. ketika aplikasi memiliki coverage yang baik (mayoritas codebase tercover oleh test), dapat percaya diri saat harus mengubah suatu bagian yang ada dan jika terjadi kesalahan dapat dipahami dengan mudah.
2. mengurangi bug pada aplikasi walaupun testing tidak dapat menjamin aplikasi bebas bug tetapi bisa mencegah hal yang berpotensi menjadi bug.

**Kategori testing :**

1. **Rendering component tress** di dalam envirotment test yang sudah disederhanakan dan ditegaskan pada keluarannya dan hanya terfokus pada bagian tersebut saja.
2. **Menjalankan aplikasi lengkap** di dalam envirotment peramban (browser) asli dan dikenal sebagai tes **end-to-end.**

Pertimbangan dalam memilih perkakas dalam proses testing:

1. **kecepatan iterasi vs environment yang realistis** dengan menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya tetapi tidak memodelkan sifat dari perambat dengan tepat. Tools lain mungkin menggunakan env peramban yang asli dengan mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.
2. **Seberapa banyak mock** dengan komponen perbedaan antara tes “unit” dan tes “integrasi” bisa tidak sesuai, sehingga dapat mempertimbangkan pemilihan perkakas untuk testing dan tentu akan dikembalikan kepada kebutuhan masing-masing.
3. **Jest**, test runner pada JavaScript yang memungkinan pengaksesan SOM menggunakan jsDOm dimana hanya memperkirakan cara kerja browser sehingga cukup baik mengetes komponen pada react. Jest memberikan kecepatan iterasi yang bagus dikomponasikan denganfitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.
4. **React Testing Library (Rekomendasi)** merupakan seperangkat helper yang memungkinkan pengetesan komponen pada React tanpa bergantung pada detail implementasinya dengen pendekatan pembuatan refactoring menjadi mudah dan mendorong kita untuk menerapkan bestt practices untuk aksesibilitas.

---

## Create basic testing with RTL

Fungsi **render** RTL akan merender file JSX yang dibutuhkan, lalu dapat mengakses komponen React yang akan ditest. 

Untuk meyakinkan bahwa file JSX sudah terender dapat menggunakan fungsi **debug** RTL.

React Testing Library digunakan untuk berinteraksi dengan komponen kita sehingga hal tersebut menjadi alasan output fungsi render dalam bentuk struktur HTML .

Pemilihan elemen pada React Testing Library menawarkan berbagai fungsi dalam pemilihan elemennya. dimana elemen tersebut akan digunakan untuk assertions atau unntuk interaksi pengguna. KIta dapat memilih elemen dengan fungsi object screen RTL. Contohnya getByText untuk memilih teks dari elemen yang sudah dipilih.

Kategori Testing:

- **LabelText**: getByLabelText: <label for=”search”/>
- **PlaceholderText**: getByPlaceeholderText: <input placeholder=”Search”/>
- **AltText**: getByAltText: <img alt=”profile”/>
- **DisplayValue**: getBy DisplayValue: <input value=”JavaScript”/>

Pada kasus pengetesan fecth abuah API dapat menggunakan handle asynchronous. Dimana hal ini diperlukan pembuatan mock untuk Axios (atau yang lain) dan dilanjutkan dengan pembuatan mock promise hasilnya ketika resolve atau reject.

---

## Testing Custom Hook

library yang digunakan untuk mengetes custom hook adalah **React Hooks Testing Library** dengan memberikan alat-alat pengetesan hooks tanpa merender satu komponen dengan menggunakan perintah “npm install -D @testing-library/react-hooks