Keuntungan belajar model OpenAI dan Prompt Engineer:

- Meningkatkan penggunaan model OpenAI seusai kebutuhan.
- Mengoptimalkan ouput model AI, mendapatkan output yang sesuai keinginan dan kebutuhan jika memahami model AI nya.
- Menjadi bagian dari komunitas AI secara global.
- Membangun aplikasi AI yang lebih relevan dengan targetnya.
- Meningkatkan daya saing di bidang AI

## Basic Model Open AI

Model OpenAI pada platform [OpenAI.com](http://OpenAI.com) adalah sebuah sistem kecerdasaan buatan (AI) yang dapat digunakan untuk mempelajari pola-pola dari data dan menghasilkan output yang sesuai dengan data yang diberikan.

OpenAI telah membuat beberapa AI, dimana beberapa itu disebut dengan model OpenAI.

Contoh model dari OpenAI:

### 1. GPT 4

adalah model bahasa alami (NLP) generasi baru yang dikembangkan oleh OpenAI setelah GPT-3 dan diharapkah memiliki lebih dari 10 triliun parameter (data yang diinputkan).

### 2. GPT 3.5

adalah model bahasa alami (NLP) generasi baru yang dikemabngkan oleh OpenAI setelah GPT-3, memiliki lebih dari 6 miliar parameter, memiliki beberapa fitur baru seperti kemampuan untuk mengenali bahasa kode dan kemampuan untuk menyelesaikan masalah matematika.

### 3. DALL-E

adalah model pembangkit gambar generatif yang dikembangkan oleh Open AI dan memiliki lebih dari 12 miliar parameter.

### 4. Whisper

adalah model pengenalan suara untuk kepentingan umum dengan menggunakan Phyton 3.9.9 dan PyTorch 1.10.1.

### 5. Embeddings

mengukur keterkaitan antara dua bagian teks, dan digunakan untuk mencari (search), kelompokan (clustering), rekomendasi (recommendations), deteksi anomali (Anomaly Detection), pengukuran keagamaan (Diversity Measurement), dan Klasifikasi (Classification).

### 6. Moderation

Moderation model adalah model pembelajaran mesin yang dirancang untuk memeriksa apakah konten sesuai dengan kebijakan pengaturan OpenAI .

### 7. GPT-3

Model generasi bahasa alami berbasis transformer yang dikembangkan oleh OpenAI.

### 8. Codex

Model yang telah usang dan kemampuannya disepurnakan melwalui GPT-3

---

## Basic Prompt Engineer

Kompetensi yang mucul saat AI mulai digunakan.

Prompt Engineering adalah teknik yang digunakan untuk mengoptimalkan output dari model AI dengan memberikan prompt atau instruksi pada model tersebut.

Penggunaan prompt engineer pada AI dapat memberikan batasan dan apa yang ingin dicari sehingga memberikan output yang lebih spesifik.

Untuk penggunaaan Text Classification, prompt engineer akan melakukan pengelompokkan. seperti menyebutkan label, data yang diberikan dan pertanyaannya sehingga AI dapat mengenerate nya menjadi lebih baik.

Untuk penggunaan questin answering, dapat menjawab pertanyaan umum dengan detail dataset dari AI yang digunakan. 

Untuk penggunaan summarization, dapat disimpulkan dari link atau text yang diinputkan.

Untuk penggunaan dialogue systems dengan memberikan propt saat menggunakan openai dengan melakukan setting pertanyaan dan jawabannya dengan batasan.

Best practioce for Prompt Engineering :

1. Prompt relevan dengan output
2. Berikan contoh keluaran yang diinginkan
3. Dapatkan informasi dari berbagai sumber
4. Berikan data yang jumlah yang besar.

---

## Implementasi

1. Settings API pada OpenAI
    
    settings 
    
    Engine : text-davinci-003 (model yang digunakan)
    
    Max tokens : 100 (token berhubungan dengan kapasitas atau quota dalam 1 request)
    
    Temperature : 0 (memiliki skala 0-1, dimana 0 model akan menghasilkan output yang lebih deterministik dan konservatif dengan sedikit variasi dalam teks yang dihasilkan, sedangkan 1 model akan menghasilkan output yang lebih variatif dan kreatif).
    
    Top p : 1.0 (memiliki skala 01-, dimana jika skala terlalu besar, mdoel akan menghasilkan output teks yang semakin tidak terkendali dan semakin acak, sehingga cocok untuk random angka. sedangkan unuk nilai p terlalu kecil model akna menghasilkan output teks  yang kurang variasi dan terlalu konservatif)
    
    Frequency penalty : 0.0 (memiliki skala 0-1 yang menentukan seberapa besar pinalty yang diberikan pada penggunaan token yang sering muncul dalam output teks.
    
    Presence penalty : 0.0 (memiliki skala 0-1) untuk menentukan seberapa besar pinalti yang diberikan pada penggunaan token yang tidak ada dalam input).
    
2. Pemasangan prompt API dalam function handleClick dengan terdapat prompt default dan juga prompt dari user.