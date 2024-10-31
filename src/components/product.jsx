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
            <h3>{props.data.title}</h3>
            <span>{props.key}</span>
            <div className='productTotal'>
                <label>Each: ${props.data.price.toFixed(2)}</label>
                <label>Total:<strong> ${getTotal()}</strong> </label>
            </div>
            <div className='btnFlex'>
                <QuantityPicker onChange={handleQuantity}></QuantityPicker>
                <button className='btn btn-sm btn-success' onClick={add}>Add</button>
            </div>


        </div>
    );
}

export default Product;