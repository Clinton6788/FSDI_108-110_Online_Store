import { useState } from 'react';
import './styles/quantity_picker.css'

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);

    function increaseQty(){
        const val = quantity +1;
        setQuantity(val);
        props.onChange(val); //Notify Listener
    }
    function decreaseQty(){
        if (quantity==1) return;

        const val = quantity -1;
        setQuantity(val);
        props.onChange(val); //Notify Listener
        }
        
    return(
        <div className = 'qtyPicker'>
            <button className='btn btn-sm btn-outline-dark' onClick={decreaseQty} disabled={quantity ==1}>-</button>
            <label id='qty'>{quantity}</label>
            <button className='btn btn-sm btn-outline-dark' onClick={increaseQty}>+</button>
        </div>
    );
}

export default QuantityPicker;