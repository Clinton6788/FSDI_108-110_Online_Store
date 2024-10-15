import './styles/catalog.css';
import Product from '../components/product';


function Catalog(){
    return(
        <div className='catalog'>
            <h3>This is where the catalog will be</h3>

            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;