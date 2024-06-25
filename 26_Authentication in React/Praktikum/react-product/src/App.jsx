import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import LandingPage from './page/landing';
import Product from './page/product';
import ProductDetail from './page/product/productDetail';
import Login from './page/login';
import Register from './page/register';
import Guard from './components/guard';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            {/* Gunakan <Guard> sebagai komponen pembungkus di sekitar <Route> yang membutuhkan autentikasi */}
            <Route path="/" element={<Guard><LandingPage /></Guard>} />
            <Route path="/create-product" element={<Guard><Product /></Guard>} />
            <Route path="/:id" element={<Guard><ProductDetail /></Guard>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
        <ToastContainer /> 
      </Provider>
    </div>
  );
}

export default App;