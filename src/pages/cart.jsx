import "./styles/cart.css"
import DataContext from '../state/dataContext';
import { useContext } from 'react';

function Cart(){

    const cart = useContext(DataContext).cart;

    return (
        <div className="cart page">
            <h3>Are you ready to checkout with {cart.length} items?</h3>
            <div className="cartMainFlex">
                <div className="cartArea"> 
                    <div className="cartHeaders">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span> 
                        <span>Delete</span>  
                    </div>
                    
                    <div className="cartContent">
                        {cart.map((prod, index) => (
                            <div className="cartProduct" key={index}>
                                <span>{prod.title}</span>
                                <span>{prod.price}</span>
                                <span>{prod.qty}</span>
                                <span>{(prod.qty * prod.price).toFixed(2)}</span>
                                <span><button className="btn btn-sm btn-dark">Delete</button></span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sidebar">
                    <h4>Total</h4>
                    <h2>$156.99</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;