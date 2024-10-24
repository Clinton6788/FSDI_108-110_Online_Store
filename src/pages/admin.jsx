import { useState } from 'react';
import './styles/admin.css';
// import { useState, useEffect } from 'react';

function Admin(){ 
    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });
        

    function handleCoupon(e){
        const val = e.target.value;
        const name = e.target.name;

        console.log("Val Changed",val, name);
        if(name === "code"){
            // setCoupon({code: val, discount: coupon.discount})
        }

    }

    function handleProduct(e){
        const val = e.target.value;
        const name = e.target.name;
        console.log(val,name);
        
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
                                name="image"
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
                        <button type="submit" className="btn btn-primary">Save</button>
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
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;