import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'; // Import axios

function ProductList({ hapusProduk, editProduk }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // State untuk menyimpan data produk
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fungsi untuk mengambil data produk dari endpoint MockAPI menggunakan axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6624041b04457d4aaf9b7041.mockapi.io/products');
        setProducts(response.data); // Menyimpan data produk yang diterima dalam state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Panggil fungsi fetchData saat komponen dimuat

    // Cleanup function
    return () => {
      // Cleanup (opsional)
    };
  }, []); // Empty dependency array, useEffect akan dijalankan sekali saat komponen dimuat

  const konfirmasiHapus = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      hapusProduk(id);
    }
  };

  const handleEdit = (id) => {
    editProduk(id);
  };

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                {/* <th scope="col">Product Image</th> */}
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={uuidv4()}>
                  <td>
                    <button onClick={() => navigate(`/product/${product.id}`)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>{index + 1}</button>
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  {/* <td>
                    <img src={product.imageProduct} alt={product.productName} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                  </td> */}
                  <td>{product.productFreshness}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <button type="button" className="btn btn-danger me-2" onClick={() => konfirmasiHapus(product.id)}>Delete</button>
                    <button type="button" className="btn btn-success" onClick={() => handleEdit(product.id)}>Edit</button>
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
              style={{ width: '194px', height: '31px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
