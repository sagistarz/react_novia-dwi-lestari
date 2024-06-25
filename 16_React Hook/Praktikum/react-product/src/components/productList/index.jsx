import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library for generating unique IDs

function ProductList({ products, deleteProduct, editProduct, setProductEditMode }) {
    const [editProductId, setEditProductId] = useState(null); // Track the ID of the product to edit
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleDelete = (id) => {
        // Menampilkan alert sebelum konfirmasi penghapusan
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(id);
        }
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter produk berdasarkan nama jika kata kunci pencarian tidak kosong
        if (value !== '') {
            const results = products.filter(product =>
                product.productName.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            // Jika kata kunci pencarian kosong, tampilkan semua produk
            setFilteredProducts(products);
        }
    };

    const handleEdit = (id) => {
        // Panggil fungsi editProduct dari prop
        editProduct(id);
        // Set productEditMode menjadi true
        setProductEditMode(true);
    };
    
    return (
        <div>
            <section className="list" style={{ marginLeft: '22px', marginRight: '22px' }}>
                <div className="container-fluid">
                    <div className="font text-center mt-3 mb-3">
                        <h1 className="font-weight-medium color-primary fs-3">List Product</h1>
                    </div>
                    <table className="table table-striped" style={{ maxWidth: '950px' }}>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Product Freshness</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={uuidv4()}>
                                    <td>{index + 1}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productCategory}</td>
                                    <td>{product.productFreshness}</td>
                                    <td>{product.productPrice}</td>
                                    <td>
                                        <button className="btn btn-danger me-2" onClick={() => handleDelete(product.id)}>Delete</button>
                                        <button className="btn btn-success" onClick={() => handleEdit(product.id)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ marginTop: '-15px' }}>
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="Search By Product Name" 
                            className='bg-white' 
                            value={searchTerm} 
                            onChange={handleSearch} 
                            style={{ width: '194px', height: '31px' }} 
                        /><br />
                        <div className="btn-group" role="group" style={{ height: 'auto', width: '135px' }}>
                            <input type="radio" className="btn-check btn-hover-primary" name="deleteButton" id="deleteButton" autoComplete="off" checked />
                            <label className="btn btn-outline-primary btn-hover-primary" htmlFor="deleteButton">Deletion</label>
                            <input type="radio" className="btn-check" name="searchInput" id="searchInput" autoComplete="off" />
                            <label className="btn btn-outline-primary text-center" htmlFor="searchInput">Search</label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductList;
