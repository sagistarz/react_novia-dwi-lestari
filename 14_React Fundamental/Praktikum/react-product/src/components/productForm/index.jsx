import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../assets/css/styles.module.css";

export default function ProductForm({ onAddProduct }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const product = {
            productName: form['productName'].value,
            productCategory: form['productCategory'].value,

            productFreshness: form['productFreshness'].value,
            addDesc: form['addDesc'].value,
            productPrice: form['productPrice'].value,
        };

        // Panggil prop onAddProduct dan teruskan data produk
        onAddProduct(product);

        // Reset the form after submission
        form.reset();
    };

  
  return (
    <div>
        <h3 className="font-weight-medium color-primary">Detail Product</h3>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="row">
                <div className="form-group" style={{ width: '300px' }}>
                    <label htmlFor="productName" className="font-weight-normal text-form color-primary mt-2 mb-2">Product Name</label>
                    <input type="text" className="form-control" id="productName" name="productName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="productCategory" className="font-weight-normal text-form color-primary mt-2 mb-2">Product Category</label>
                    <select className="form-select mb-3" id="productCategory" name="productCategory" style={{ width: '244px', height: '38px' }}>
                        <option selected disabled>Choose...</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Toys">Toys</option>
                    </select>
                </div>
                <div className="col-sm-7 mb-3">
                    <label htmlFor="inputGroupFile" className="form-label">Image of Product</label>
                    <div className="input-group custom-file-button">
                        <label htmlFor="inputGroupFile" className="input-group-text bg-primary text-white">Choose File</label>
                        <input type="file" className="form-control border border-1 border-primary" id="inputGroupFile" data-name="Image Product" name='imageProduct' required />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="" className="font-weight-normal text-form color-primary mt-2 mb-2">Product Freshness</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productFreshness" id="brandNew" value="Brand New" required />
                            <label className="form-check-label" htmlFor="productFreshness">
                                Brand New
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productFreshness" id="secondHand" value="Second Hand" required />    
                            <label className="form-check-label" htmlFor="productFreshness">
                                Second hand
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="productFreshness" id="refurbished" value="Refurbished" required />
                            <label className="form-check-label" htmlFor="productFreshness">
                                Refurbished
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="addDesc" className="font-weight-normal text-form color-primary mt-2 mb-2">Additional Description</label>
                        <textarea name="addDesc" className="form-control" id="addDesc" style={{ width: '603px', height: '116px' }} required></textarea>
                    </div>
                </div>
                <div className="form-group" style={{ width: '300px' }}>
                    <label htmlFor="productPrice" className="font-weight-normal text-form color-primary mt-2 mb-2">Product Price</label>
                    <input type="text" className="form-control" id="productPrice" name='productPrice' style={{ width: '603px' }} placeholder="$1" required />
                </div>
                <div className="text-center d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-create font-weight-normal" style={{ marginTop: '113px', width: '557px', height: '48px' }}>Submit</button>
                </div>
            </div>
        </form>
    </div>
  );
}