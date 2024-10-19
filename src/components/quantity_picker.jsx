import { useState } from 'react';
import './styles/quantity_picker.css'

function Quantity_Picker(props){
    const [quantity, setQuantity] = useState(1);

    function increase_qty(){
        const val = quantity +1;
        setQuantity(val);
        props.onChange(val); //Notify Listener
    }
    function decrease_qty(){
        if (quantity==1) return;

        const val = quantity -1;
        setQuantity(val);
        props.onChange(val); //Notify Listener
        }
        
    return(
        <div className = 'qtyPicker'>
            <button className='btn btn-sm btn-outline-dark' onClick={decrease_qty} disabled={quantity ==1}>-</button>
            <label id='qty'>{quantity}</label>
            <button className='btn btn-sm btn-outline-dark' onClick={increase_qty}>+</button>
        </div>
    );
}

export default Quantity_Picker;