import { useState } from 'react';
import './styles/admin.css';
import DataService from '../services/dataService';
// import { useState, useEffect } from 'react';

function Admin(){ 
    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });
        
    const [product, setProduct] = useState({
        title: '',
        price: '',
        imageUrl: '',
        category: ''
    });

    function handleCoupon(e){
        const val = e.target.value;
        const name = e.target.name;

        console.log("Val Changed",val, name);
        let copy = {...coupon};
        copy[name] = val;
        setCoupon(copy);
    }
    /**
     * create a copy
     * modify the copy
     * 'set' the copy back
     */

    function handleProduct(e){
        const val = e.target.value;
        const name = e.target.name;
        console.log(val,name);
        let copy = {...product}
        copy[name] = val;
        setProduct(copy)
    }

    function saveProduct(){
        let service = new DataService();
        // Changing price to an int
        let fixedProduct = {...product};
        fixedProduct.price = parseFloat(fixedProduct.price)
        service.saveProduct(fixedProduct)
    }
    
    function saveCoupon(){
        console.log(coupon);
    }

    


    return(
        <div className='admin page'>
            <h1>Admin Page</h1>
            <div className='formFlex'>
                <div className="productEntry">
                    <h2>Product Form</h2>
                    <form className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Enter title"
                                onChange={handleProduct}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                placeholder="Enter price"
                                onChange={handleProduct}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageUrl"
                                placeholder="Enter image URL"
                                onChange={handleProduct}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input
                                type="text"
                                className="form-control"
                                name="category"
                                placeholder="Enter category"
                                onChange={handleProduct}
                            />
                        </div>
                        <div>
                            <button type='button' onClick={saveProduct} className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
                <div className='couponEntry'>
                    <h2>Coupon Form</h2>
                    <form className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="code" className="form-label">Code</label>
                            <input
                                type="text"
                                className="form-control"
                                name="code"
                                placeholder="Enter code"
                                onChange={handleCoupon}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="discount" className="form-label">Discount</label>
                            <input
                                type="number"
                                className="form-control"
                                name="discount"
                                placeholder="Enter discount"
                                onChange={handleCoupon}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={saveCoupon} >Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;