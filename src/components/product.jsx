import { useState } from 'react';
import QuantityPicker from './quantity_picker';
import './styles/product.css'


function Product(props){
    const [totQty, setTotQty] = useState(1);

    function addToCart(){
        console.log('Adding to cart');
        
    }

    function handleQuantity(qty){
        console.log("quantity changed ", qty);
        setTotQty(qty);
    }

    function getTotal(){
        let total = (props.data.price * totQty).toFixed(2);
        return total;
    }
    return(
        <div className='product'>
            <img src = {props.data.img} alt=""/>
            <h3>{props.data.title}</h3>
            <span>{props.key}</span>
            <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <div className='productPriceArea'>
                <div className='flexWidth'></div>
                <div className='productTotal flexWidth'>
                    <label>Each: {props.data.price.toFixed(2)}</label>
                    <label>Total: {getTotal()} </label>
                </div>
                <div className='flexWidth btnFlex'>
                    <button className='btn btn-sm btn-success' onClick={addToCart}>Add</button>
                </div>
            </div>

        </div>
    );
}

export default Product;