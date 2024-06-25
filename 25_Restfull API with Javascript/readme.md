## Restfull API With JavaScript

Tujuan penggunaan MockAPI untuk mendapatkan dummy data dari endpoint dalam penggambaran penggunaan endpoint dan documentasi API yang baik.
Keuntungan saat penggunaan mock API:

- FE dan BE dapat bekerja secara bersamaan,  FE dapat langsung membuat web frontendnya dan tinggal melakukan penghubungan.
- fast feddback lopp, dapat memanfaatkan looping dengan cepat
- dapat menemukan masalah lebih awal dan cepat.
- Developing test dan API dapat berkerja secara bersamaan.

7 mock API yang dapat digunakan:

- Beeceptor
- Mockoon
- Mocki
- Stoplight
- Postman Mock Server
- Mocky
- MockAPI

---

## MockAPI

Visit [mockapi.io](http://mockapi.io) 

Untuk membuat project baru, dapat langung create new project, dapat membuat resource baru dimana nanti akan menjadikkan sebuah data dummy sesuai yang diinginkan. dan untuk mengaksesnya dapat mengklik edit untuk menampilkan article endpointnya.

Implementasi Get Data dan Render:

1. Membuat index.html dengan membuat div class container
2. Membuat script menggunakan javascript yang berisi url dari mockAPI lalu berikan try and catchnya.
3. Membuat function renderUsers dibawah script pada langkah kedua.
4. Membuat function baru deleteUser dibawah script pada langkah kedua untuk menghapus data.
5. Membuat function postUser dibawah script pada langkah kedua untuk menambahkan data baru.
6. Membuat function updateuser dibawah script pada langkah kedua untuk mengupdate data yang sudah ada.

Hal yang perlu diingat untuk insert data menggunakan POST, untuk update data menggunakan PUT, dan untuk menghapus data menggunakan DELETE.