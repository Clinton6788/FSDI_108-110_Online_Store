import { useContext, useState } from 'react';
import QuantityPicker from './quantity_picker';
import './styles/product.css'
import DataContext from '../state/dataContext';


function Product(props){
    const [totQty, setTotQty] = useState(1);
    let addToCart = useContext(DataContext).addToCart;

    function add(){
        // Creating an obj (prod info + qty) to add to cart
        let prodForCart = {...props.data, qty:totQty};
        addToCart(prodForCart)
    }

    function handleQuantity(qty){
        console.log("quantity changed ", qty);
        setTotQty(qty);
    }

    function getTotal(){
        let total = (props.data.price * totQty);
        return total.toFixed(2);
    }
    return(
        <div className='product'>
            <img src = {props.data.img} alt=""/>
            <div className='infoSect'>
                <div className='prodTitle'>
                    <h4>{props.data.title} - ${props.data.price.toFixed(2)}</h4>
                </div>
                <span>{props.key}</span>
                <div className='qtyPick'>
                    <QuantityPicker onChange={handleQuantity}></QuantityPicker>
                </div>
                <div className='btnFlex'>
                    <div className='total'>
                        <label>${getTotal()}</label>
                    </div>
                    <button className='btn btn-sm btn-success addBtn' onClick={add}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;