import React, { useState } from 'react';

export default function ProductList({ products }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

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

    const handleDelete = () => {
        // Hapus produk terakhir dari filteredProducts
        const updatedProducts = [...filteredProducts];
        updatedProducts.pop();
        setFilteredProducts(updatedProducts);

        // Tambahkan logika untuk mengupdate state products jika diperlukan
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
                            <th scope="col">Image of Product</th>
                            <th scope="col">Product Freshness</th>
                            <th scope="col">Additional Description</th>
                            <th scope="col">Product Price</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.productName}</td>
                                <td>{product.productCategory}</td>
                                <td>{product.imageProduct}</td>
                                <td>{product.productFreshness}</td>
                                <td>{product.addDesc}</td>
                                <td>{product.productPrice}</td>
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
                            <label className="btn btn-outline-primary btn-hover-primary" htmlFor="deleteButton" onClick={handleDelete}>Deletion</label>
                            <input type="radio" className="btn-check" name="searchInput" id="searchInput" autoComplete="off" />
                            <label className="btn btn-outline-primary text-center" htmlFor="searchInput">Search</label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
