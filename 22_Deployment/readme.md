## Link deploy vercel 
https://encome-deploy.vercel.app

---

## Build React App

Secara default, React mengandung banyak pesan peringatan-peringatan yang sangat berguna dalam pengembangan aplikasi. Namun penggunaan peringatan ini membuat React menjadi lebih besar dan lambat, oleh karena itu diharuskan mengunakan versi produksi ketika men-deploy aplikasi. 

Dengan tujuan agar aplikasi kita menjadi versi production sehingga performanya lebih ringan.

Karena proyek yang dibangun menggunakan Create React App dengan perintah npm run build dimana akan membuat versi produksi untuk aplikasi dalam folder build/. 

Hal ini hanya diperlukan sebelum mendeploy ke produksi .

Untuk pengembangan normal hanya menggunakan npm start.

 Setelah melakukan build appnya, untuk menjalankan aplikasi dengan optimal pada lokal komputer menggunakan serve.

untuk menginstallnya dapat menggunakan npm install -g serve “serve -s build” dan akan muncul link localnya. 

untuk dokumentasi deployment dapat melihat pada link https://cra.link/deployment 

---

## Deployment

Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Dengan harapan aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya kita sendiri.

### Deployment with surge

**Surge** adalah layanan penerbit website statik (static web publishing) gratis untuk Front-End Developers. Dimana penggunaan web statik ini akan memiliki subdomain *.surge.sh

Surge sendiri dapat menerima file HTML, CSS, dan JS.

Untuk penggunaan surge dengan menggunakan Node terbaru dan mengintsall surge dengan perintah npm install —global surge

Lalu untuk mendeploy dapat ketikan surge dan isi email dan paddword dan mengisi alamat build dari proyek surge.

Teardown surge dilakukan untuk membuat proyek offline dengan melalui surge CLI dengan perintah surge teardown (halaman web)

### Deployment with Netlify CLI

Netlify adalah salah satu platform penyedia layanan build tools sekaligus *Continous Deployment* untuk mempublish website statis secara gratis dan teintegrasi dengan git host seperti github, gitlab dan bitbucket.

Dengan membuat akun netlify pada [www.netlify.com](http://www.netlify.com) dan verify lalu menginstallnya pada terminal dengan perintah npm install netlify-cli -g dan perintah netlify deploy. Kita dapat create dan configure a new site dan pilih lokasi deploy pada folder ./deploy

---

### Deployment with Vercel

Vercel adalah end to end platform untuk developers yang memungkinkan untuk membuat deployment we aplication yang dimiliki.

Dengan memiliki keunggulan:

1. Dapat melakukan deployment
2. Dapat melakukan CI/CD untuk pengupdate an data pada github.
3. Monitoring project 
4. Custom domain, sesuai yang diinginkan.

Vercel dapat dimanfaatkan untuk bekerja personal dan team account.

Cara melakukan deploy pada vercel dengan menggunakan github

1. membuka halaman dashboard dan pilih create project
2. click import pada repository yang diinginkan jika tidak menemukan repository, dapat inputkan link repo github.
3. masukkan nama untuk deploy dan create, tunggu hingga selesai.