Alasan menggunakan [Open.AI](http://Open.AI) adalah gratis (trial), mudah di pasang (pemasangan API yang mudah diberbagai framework), dipakai banyak user, dan jumlah parameternya sebesar 175 miliar (model davinci 03).

## Pemasangan Open AI pada React.

1. Membuat react project
2. Mengistall OpenAI package, menggunakan perintah npm install openai
3. Import module yang diperlukan seperti useState, Configuration dan OpenAIApi dari package react dan openai.
4. Deklarasi objek configurasi (melakukan konfigurasi ke openAi) dan OpenAIApi dengan menggunakan API key yang diberikan oleh openAI. Terdapat parameter yang digunakan untuk menyimpan API key pengguna dan kelas pada librari OpenAI yang berfungsi untuk mengirim permintaan ke API OpenAI.
5. Deklarasi state dengan menggunakan useState, yang terdiri dari prompt (untuk menyimpan input data user), result (untuk menyimpan hasil dari request user), dan loading (indikasi bahwa aplikasi sedang melakukan proses).
6. Deklarasi handleClick untuk melakukan request ke openAI API denga menggunakan methode createCompletion.
7. Renderinig komponen textarea, button, dan pre untuk menampilkan input dari user, tombol generate, dan hasil generate dari OpenAI API.

## Langkah mendapatkan API Keys.

1. Membuka situs openAI pada API Reference - OpenAI API.
2. Membuat atau login account OpenAI.com
3. Mencari bagian introduction dan masuk ke bagian API keys.
4. Mencari bagian bawah “user” karena page tersebut merupakan letak API keys, lalu create new secret key button
5. Konfigurasi API keys, dimana nama secret key (optional).
6. API Keys akan muuncul dan simpan link API keys tersebut.
7. Setelah mendapatkan API keys dan letakkan pada bagian API key di vscode.

---