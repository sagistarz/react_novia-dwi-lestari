Router merupakan modul dalam react yang berfungsi untuk melakukan proses naviigasi pada SPA (Single Page Apllication). dalah route sendiri terdiri dari 4 komponen yaitu BrowserROuter (sebagai router menggunakan API histori dari HMTL5), Route (sebagai pengarah jalannya lalu lintas sebuah aplikasi web), switch (untuk membungkus beberapa komponen route) dan Link (untuk berpindah antar halaman properti.)

Hook routing react terdiri dari 4 hook yaitu
1. useHistory, dengan merikan sebuah akses ke instance riwayat yang dapat digunakan untuk navigasi.
2. useLocation untuk mengembalikan object lokasi yang mewakili URL saat ini.
3. useParams untuk mengembalikan objek nilai parameter URL untuk mengakses match.params dari <Route>.
4. useRouteMatch menciba mencocokan URL saat ini dengan cara yang sama seperti <Route>

Pada react router version 6 terdapat update fitur yaitu penanganan routing berbasis hook, penanganan error lebih baik, pengellaan routing yang lebih terpusat. dan perubahan pada konsep penggunaan URL.