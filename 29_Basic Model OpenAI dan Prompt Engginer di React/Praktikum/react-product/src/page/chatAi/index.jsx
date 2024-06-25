import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';

export default function ChatAI() {
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState([]);
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    const faqData = {
        "Bagaimana cara melakukan login?": "Untuk melakukan login, ikuti langkah-langkah berikut:\n1. Buka halaman login di situs web kami.\n2. Masukkan nama pengguna (username) dan kata sandi (password) Anda.\n3. Klik tombol 'Login' atau tekan tombol 'Enter' pada keyboard Anda.\n4. Anda akan diarahkan ke halaman utama setelah berhasil login.",
        "Bagaimana cara mengakses situs web?": "Anda dapat mengakses situs web kami dengan mengunjungi URL www.example.com melalui peramban web (browser) di perangkat Anda. Pastikan untuk terhubung ke internet sebelum mengakses situs web kami.",
        "Apakah saya perlu login untuk mengakses situs web?": "Ya, untuk keamanan dan pengalaman pengguna yang lebih baik, Anda harus login untuk mengakses situs web kami. Jika Anda belum memiliki akun, Anda dapat mendaftar untuk membuat akun baru.",
        "Bagaimana cara membuat akun baru?": "Untuk membuat akun baru, ikuti langkah-langkah berikut:\n1. Buka halaman pendaftaran di situs web kami.\n2. Isi formulir pendaftaran dengan informasi yang diperlukan, seperti nama lengkap, alamat email, dan kata sandi.\n3. Klik tombol 'Daftar' atau 'Buat Akun'.\n4. Setelah itu, Anda akan menerima email verifikasi untuk mengaktifkan akun Anda.",
        "Bagaimana kebijakan pengembalian barang?": "Kebijakan pengembalian barang kami memungkinkan Anda untuk mengembalikan produk yang tidak sesuai atau rusak dalam waktu 30 hari setelah pembelian. Silakan hubungi layanan pelanggan kami untuk mendapatkan informasi lebih lanjut dan prosedur pengembalian.",
        "Berapa lama waktu pengiriman pesanan?": "Waktu pengiriman pesanan Anda tergantung pada lokasi Anda dan jenis produk yang Anda pesan. Namun, secara umum, kami berusaha untuk mengirim pesanan Anda dalam waktu 3-5 hari kerja setelah pembelian. Anda akan diberi nomor pelacakan untuk memantau status pengiriman pesanan Anda.",
        "Apa yang harus dilakukan jika pesanan tidak sampai?": "Jika pesanan Anda belum sampai dalam waktu yang dijanjikan, silakan hubungi layanan pelanggan kami dengan menyebutkan nomor pesanan Anda. Kami akan melakukan pengecekan dan memberikan informasi terkini tentang status pengiriman pesanan Anda.",
        "Bagaimana cara menghubungi layanan pelanggan?": "Anda dapat menghubungi layanan pelanggan kami melalui email di customer.service@example.com atau melalui telepon di nomor 123-456-789. Tim layanan pelanggan kami siap membantu Anda dengan segala pertanyaan atau masalah yang Anda hadapi.",
        "Apakah ada biaya pengiriman untuk setiap pesanan?": "Biaya pengiriman pesanan dapat bervariasi tergantung pada lokasi pengiriman, ukuran, dan berat paket. Namun, kami sering menawarkan pengiriman gratis untuk pembelian di atas jumlah tertentu. Silakan cek informasi pengiriman pada halaman pembayaran sebelum menyelesaikan pembelian Anda.",
    };

    async function generateAnswer(e) {
        e.preventDefault();
        setGeneratingAnswer(true);

        try {
            let foundAnswer = null;
            const questionWords = question.toLowerCase().split(" ");

            // Search for answers based on keywords
            Object.keys(faqData).forEach(keyword => {
                // Split keyword into array of words
                const keywordWords = keyword.toLowerCase().split(" ");
                // Check if every word in the keyword is in the question
                const keywordFound = keywordWords.every(word => questionWords.includes(word));
                if (keywordFound) {
                    foundAnswer = faqData[keyword];
                }
            });

            if (foundAnswer) {
                addMessage('You', question);
                addMessage('AI', foundAnswer);
            } else {
                // If question is not found in dataset, use Google AI
                const response = await axios({
                    url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCKhXDpbF_2J-Q3gbA3HDO5pt9f8YbOVb8',
                    method: 'post',
                    data: {
                        contents: [{ parts: [{ text: question }] }]
                    }
                });
                addMessage('You', question);
                addMessage('AI', response.data.candidates[0].content.parts[0].text);
            }
            setQuestion('');
        } catch (error) {
            console.log(error);
            addMessage('AI', "Something went wrong. Please try again!");
        }
        setGeneratingAnswer(false);
    }

    function addMessage(sender, text) {
        const newMessage = { sender, text };
        setMessages(prevMessages => [...prevMessages, newMessage]);
    }

    return (
        <div>
            <Navbar/>
            <h1 className='fw-bold fs-4 text-center mt-4 mb-2' style={{color: '#37517E'}}>Chat AI</h1>
            <div className="container-sm mt-5">
                <div className="card chat-window border rounded-lg p-4">
                    {messages.map((message, index) => (
                        <div key={index} className="row mb-2">
                            <div className={message.sender === 'You' ? 'col-12 ml-auto' : 'col-12 mr-auto'}>
                                <div className={message.sender === 'You' ? 'bg-primary text-white rounded p-2 text-right' : 'bg-light rounded p-2 text-left'}>
                                    <strong>{message.sender}:</strong> 
                                    <span>{message.text}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {generatingAnswer &&
                        <div className="row mb-2">
                            <div className="col-12 mr-auto">
                                <div className="bg-light rounded p-2 text-left">
                                    <strong>AI:</strong> 
                                    <span>Loading...</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="input-group mt-4">
                    <input
                        type="text"
                        className="form-control rounded-l-lg"
                        placeholder="Ketik pertanyaan..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && question.trim() !== '') {
                                generateAnswer(e);
                            }
                        }}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary rounded-r-lg"
                            type="button"
                            onClick={generateAnswer}
                        >
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
