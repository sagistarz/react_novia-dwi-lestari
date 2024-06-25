## Global State Management

Dapat dicontohkan dengan component count yang terdapat APP, Title, button +, jumlah count dan button - dengan menggunakan props onCLick menggunakan handleClick() pada App.

Dengan menggunakan React redux dalam penggunaan Global State Management, karena global state yang populer pada tahun 2020.

Penggunaan redux yang tepat saat:

1. banyak state yang perlu ditaruh di banyak tempat
2. state pada app sering berubah
3. logic untuk mengubah state kompleks
4. ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang.
5. perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu.

Redux libraries dan tools yang digunakan yaitu react-redux, redux toolkkit, redux devtools extension.

3 komponen penting yang ada pada Redux

1. actions, digunakan untuk memberikan informasi dari aplikasi ke store.
2. reducer, pure javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru.
3. store, objek sentral yang menyimpan state pada aplikasi. Penggunaan redux store dapat digunakan dengan menambahkan Provider pada App.jsx

bagaimana cara menggunakan dan mengubah state dengan menggunakan Hooks ataupun connect.

**Hooks**, merupakan cara yang lebih simple daripada connect dengan hanya perlu import hooks yang akan digunakan.

**connect**
cara kerja connect adalah dimana connect yang berisi states dan dispatchers akan membungkus komponen didalamnya yang disebut dengan Higher Order Component (HOC).

Redux adalah sebuah lubrary untuk manajemen state global dengan menggunakan struktur one-way data flow dan menggunakan beberapa tipe code.

---

## Redux Thunk

adalah thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

Diperlukan redux thunk untuk menghandle side effect logic synchronous kopleks yang perlu mengakses store dan logic async seperti request data.

terdapat asynchronous dispatch, conditional dispatch.

---

## Menyimpan State ke Storage

dengan menggunakan redux-persist.

untuk implementasikannya, diperlukan import storage pada redux-persist dengan menambhakan const persistCOnfig

---

## Data Fetching

Penghubungan App pada react dengan server disebut dengan data fetching karena akan merequest data pada server.

Cara-cara untuk fetching data pada react:

1. fetch API
2. Axios
3. React Query library

build set up apa yang digunakan untuk melakukan data fetching

1. method - GET, POST, PUT, DELETE, HEAD
2. url - URL dari request
3. body - body dari request
4. headers - objek headers
5. referrer - referrer dari request
6. mode - cors, no cors, some origin
7. credentials - amit, some origin
8. redirect - follow, error, manual
9. integrity - subresource integrity value
10. cache - chahe mode (default, reload)

Response yang diberikan saat dilakukannya data fetching

type (basic, cors), url, useFInalURL, status code (ex, 200, 404), ok (boolean untuk respon sukses dengan status code 200-299) status text (status code = OK), dan headers (headers object dari respon.

Terdapat method yaitu clone(), error(),, redirect(), arrayBuffer(), blob(), formData(), json(), text().