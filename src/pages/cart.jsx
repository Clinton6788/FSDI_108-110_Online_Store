import "./styles/cart.css"
import DataContext from '../state/dataContext'; 
import { useContext } from 'react';

function Cart(){

    const cart = useContext(DataContext).cart;
    function getTotal(){
        let total = 0;
        for (let i = 0; i< cart.length; i++) {
            const prod = cart[i];
            total += (prod.price * prod.qty)
        }
        return total.toFixed(2);
    }
    function countProducts(){
        let totQty = 0
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i]
            totQty += prod.qty
        }
        return totQty
    }

    return (
        <div className="cart page">
            <h3>Are you ready to checkout with {countProducts()} item(s)?</h3>
            <div className="cartMainFlex">
                <div className="cartArea"> 
                    <div className="cartHeaders">
                        <span></span>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span> 
                        <span>Delete</span>  
                    </div>
                    
                    <div className="cartContent">
                        {cart.map((prod, index) => (
                            <div className="cartProduct" key={index}>
                                <img className="cartImg" src={prod.img}></img>
                                <span>{prod.title}</span>
                                <span>{prod.price}</span>
                                <span>{prod.qty}</span>
                                <span>{(prod.qty * prod.price).toFixed(2)}</span>
                                <span><button className="btn btn-sm btn-danger">Remove</button></span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sidebar">
                    <h4>Total</h4>
                    <h2>${getTotal()}</h2>
                    <button className="btn btn-success">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;