import './styles/catalog.css';
import Product from '../components/product';
import DataService from '../services/dataService';
import React, { useState, useEffect } from 'react';

function Catalog(){ 

    const[products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]);
    const[filter,setFilter] = useState("")


    useEffect(function(){
        loadCatalog();
        loadCategories()
    },[]);

    async function loadCatalog(){
        let service = new DataService();
        let prods = await service.getProducts();
        setProducts(prods);
    }

    function loadCategories(){
        let service = new DataService();
        let cats = service.getCategories();
        setCategories(cats)
    }

    function applyFilter(category){
        setFilter(category);
    } 

    function clearFilter(){
        setFilter("")
    }

    return(
        <div className='catalog page'>
            <h3>We have {products.length} new products for you!</h3>
            <div className='filters'>
                <button className='btn btn-sm btn-success' onClick={clearFilter}>All</button>
                {categories.map(c => <button onClick={() => applyFilter(c)} className='btn btn-sm btn-success'>{c}</button>)}
            </div>
            <br/>
            {
                products.filter(prod => prod.category === filter || !filter).map((item)=>(
                    <Product key={item.id} data={item} />
                ))
            }

            {/* <Product name = "Title 1" price="1.99" img=""/> */}
        </div>
    );
}

export default Catalog;