import React, { useState, useEffect } from 'react';
import styles from "./assets/css/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header';
import ProductForm from './components/productForm';
import ProductList from './components/productList';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [products, setProducts] = useState([]);
    const [productsEditing, setProductsEditing] = useState(null);
    const [productEditMode, setProductEditMode] = useState(false);

    const addProduct = (product) => {
        const newProduct = { id: uuidv4(), ...product };
        setProducts([...products, newProduct]);
    };

    const deleteProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    const editProduct = (productId) => {
        const productToEdit = products.find(product => product.id === productId);
        setProductsEditing(productToEdit);
        setProductEditMode(true);
    };

    useEffect(() => {
        if (window.location.pathname === '/') {
            alert('Welcome to the app!');
        }
    }, []);

    const saveEditedProduct = (editedProduct) => {
        // Melakukan penyimpanan perubahan produk yang diedit
        // Implementasi penyimpanan Anda di sini
        // Kemudian atur kembali state productEditMode dan productsEditing
        setProductEditMode(false);
        setProductsEditing(null);
    };

    return (
        <div className={styles.body}>
            <Navbar />
            <section className="mt-5">
                <div className="container" style={{ maxWidth: '936px', height: 'auto' }}>
                    <div className="row justify-content-center">
                        <Header />
                        <div className="font col-xl-12 mt-5">
                            <div className="container" style={{ maxWidth: '656px', height: 'auto' }}>
                                <ProductForm onAddProduct={addProduct} productsEditing={productsEditing} productEditMode={productEditMode} saveEditedProduct={saveEditedProduct} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct} setProductEditMode={setProductEditMode} />
        </div>
    );
}

export default App;
