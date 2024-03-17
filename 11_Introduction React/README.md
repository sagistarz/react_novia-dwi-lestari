# Intoduction React

**What is React?**
- Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile (bukan framework)
- Open source yang di maintain oleh Facebook 
- Pada arsitektur MVC (Model - View - Controller), Reactjs hanya akan mengambil peran pada layer View saja. 

library : jQuery, reactJS
framework : angularJS, vueJS, nextJS, gasby?

library -> fungsi yang ngikutin kode kita
framework -> kode kita yang ikutin fungsi mereka

UI : dimana user bisa berinteraksi dengan website

**Kenapa menggunakan react?**
1. declarative
pendekatan yang berfokus kepada "what" -> apa yang sebenarnya ingin kita capai
lawan nya adalah interaktif, berfokus pada "how" -> gimana capai tujuan itu
2. component base
membagi bagian2 menjadi kecil yang punya fungsi masing2 jadi gak campur aduk
3. Learn once, write anywhere (belajar sekali, tulis dimana saja0 -> react native sangat mirip
4. Teknologi yang popular
manfaat? ketika ketemu kesulitan kita bisa nemuin solver nya lebih mudah. lowongan pekerjaan lebih banyak	

**Virtual DOM (VDOM)**
Representasi dari UI berbentuk Javascript Object yang disimpan pada memori 
Dom manipulasi adalah kunci dari web yang modern dan interaktif

Namun dalam realita nya, dom manipulasi mengalami beberapa masalah
1. DOM manipulation secara manual dapat membuat code berantakan
2. SUlit untuk mengingat DOM state sebelumnya
3. Jauh lebih lambat daripada operasi javascript pada umumnya

VDOM Representasi dari UI berbentuk javascript object yang disimpan pada memori
-> menggunakan fungsi aja

- memanipulasi dom yang emang harus ada perubahan aja
- efisiensi akan lebih baik

**COMMAND**
ls = list ada file/folder apa aja di directory
mkdir = make directory (bikin directory)
cd = change directory -> pindah folder
mv = memindahkan/merename folder/file
rename : mv earth world (ubah nama earth menjadi world)
pindah : mv earth world/earth (file earth dipindahin ke dalem world)
cek nya pake ls ya
rm : delete file/folder

node js : compile dan optimasi kode kita
package.json = berisi informasi mengenai project kita
script = untuk melakukan perintah
nama
dependencies = library2 yang dipake, ini di manage oleh npm, ini di install di node_modules

public
index.html = file html yang pertama kali di load. disini ada div dengan id root
untuk memuat semua apliasi react kita disini

src
menyompan source code aplikasi kita
index.js -> render code kita

#### INTSALL REACT : npx create-react-app [nama project] ####

## VITE + REACT ##
Vite : alat build yang menggunakan bundler rollup (menggabungkan file js menjadi 1 file untuk meningkatkan performa)
vite menawarkan bbrp keunggulan
1. startup yang lebih cepat
2. hmr yang lebih cepat (memungkinkan merender pada komponen tertentu aja)
3. ukuran build yang lebih kecil

**Mengapa menggunakan vite untuk react?**
- pengalaman pengembangan yang lebih cepat
- performa yang lebih baik
- kemudahan penggunaan

**Set up with vite**
INSTALL : npm install -g vite
-g itu maksudnya global
npm cretae vite [nama project]
npm install -> install semua package yang dibutuhkan (node_modules)
npm run dev (ni berdasarkan package.json)


