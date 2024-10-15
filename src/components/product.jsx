import Quantity_Picker from './quantity_picker';
import './styles/product.css'


function Product(){
    function addToCart(){
        console.log('Adding to cart');
        
    }



    return(
        <div className='product'>
            <img src = "https://picsum.photos/250/200" alt=""/>
            <h3>Product Name</h3>
            <Quantity_Picker></Quantity_Picker>
            <label>Total</label>
            <label>Price</label>
            <button className='btn btn-sm btn-success' onClick={addToCart}>Add</button>
            {/* Title */}
            {/* Image */}
            {/* Price */}
            {/* Category */}
            {/* ID */}
        </div>
    );
}

export default Product;