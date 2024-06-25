import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import Navbar from '../../components/navbar';

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyCKhXDpbF_2J-Q3gbA3HDO5pt9f8YbOVb8";

export default function ChatAI() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [chat, setChat] = useState(null);

    useEffect(() => {
        async function runChat() {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });

            const generationConfig = {
                temperature: 1,
                topK: 0,
                topP: 0.95,
                maxOutputTokens: 8192,
            };

            const safetySettings = [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
            ];

            const chatInstance = model.startChat({
                generationConfig,
                safetySettings,
                history: [],
            });

            setChat(chatInstance);

            sendMessageAndReceiveResponse("Hello!");
        }

        runChat();
    }, []);

    const sendMessageAndReceiveResponse = async (message) => {
        if (chat) { 
            const result = await chat.sendMessage(message);
            const response = result.response;
            const formattedResponse = response.text().replace(/\*(.*?)\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>"); // Menambahkan tag <br/> untuk setiap baris baru
            const newMessages = [...messages, { text: message, sender: 'user' }, { text: formattedResponse, sender: 'ai' }];
            setMessages(newMessages);
        } else {
            console.error("Objek chat belum diinisialisasi.");
        }
    };

    return (
        <div>
            <Navbar/>
            <h1 className='fw-bold fs-4 text-center mt-4 mb-2' style={{color: '#37517E'}}>Chat AI</h1>
            <div className="container-sm mt-5">
                <div className="card chat-window border rounded-lg p-4">
                    {messages.map((message, index) => (
                        <div key={index} className="row mb-2">
                            <div className={message.sender === 'user' ? 'col-12 ml-auto' : 'col-12 mr-auto'}>
                                <div className={message.sender === 'user' ? 'bg-primary text-white rounded p-2 text-right' : 'bg-light rounded p-2 text-left'}>
                                    <strong>{message.sender === 'user' ? 'You:' : 'AI:'}</strong> 
                                    <span dangerouslySetInnerHTML={{ __html: message.text }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="input-group mt-4">
                    <input
                        type="text"
                        id="messageInput"
                        className="form-control rounded-l-lg"
                        placeholder="Ketik pesan..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && messageInput.trim() !== '') {
                            sendMessageAndReceiveResponse(messageInput);
                            setMessageInput('');
                            }
                        }}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary rounded-r-lg"
                            type="button"
                            onClick={() => {
                            if (messageInput.trim() !== '') {
                                sendMessageAndReceiveResponse(messageInput);
                                setMessageInput('');
                            }
                            }}
                        >
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
