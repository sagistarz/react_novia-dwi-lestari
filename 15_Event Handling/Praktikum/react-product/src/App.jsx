import React, { useState } from 'react';
import styles from "./assets/css/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header';
import ProductForm from './components/productForm';
import ProductList from './components/productList';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };


  return (
    <div className={styles.body}> 
      <Navbar />
      <section className="mt-5">
        <div className="container" style={{ width: '936px', height: 'auto' }}>
          <div className="row justify-content-center">
            <Header />
            <div className="font col-xl-12 mt-5">
              <div className="container" style={{ width: '656px', height: 'auto' }}>
                <ProductForm onAddProduct={addProduct} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductList products={products} />     
    </div>
  );
}

export default App;
