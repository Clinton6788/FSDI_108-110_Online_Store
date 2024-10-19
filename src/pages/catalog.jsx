import './styles/catalog.css';
import Product from '../components/product';
import DataService from '../services/dataService';
import { useState, useEffect } from 'react';

function Catalog(){

    const[products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]);

    useEffect(function(){
        loadCatalog();
        loadCategories()
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts;
        setProducts(prods);
    }

    function loadCategories(){
        let service = new DataService();
        let cats = service.getCategories();
        setCategories(cats)
    }
    return(
        <div className='catalog'>
            <h3>We have {products.length} new products for you!</h3>
            <div className='filters'>
                {categories.map(c => <button className='btn btn-sm btn-outline-success'>{c}</button>)}
            </div>
            <br/>
            {
                products.map((item)=>(
                    <Product key={item.id} data={item} />
                ))
            }

            {/* <Product name = "Title 1" price="1.99" img=""/> */}
        </div>
    );
}

export default Catalog;