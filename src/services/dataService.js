import axios from 'axios';

const catalog = [
    {
        "title":"Tomato",
        "img":"https://tse1.mm.bing.net/th?id=OIP.OW2lHVK5xhLOstqjjY3DPgHaHa&pid=Api&P=0&h=220",
        "price":4.99,
        "category": "Vegetable",
        "_id": "tomato_1"
    },
    {
        "title":"Potato",
        "img":"./img/potato.jpg",
        "price":2.99,
        "category": "Vegetables",
        "_id": "potato_1"
    },
    {
        "title":"Apple",
        "img":"https://tse1.mm.bing.net/th?id=OIP.zCGNC591dH3LoxJPaifAVwHaGr&pid=Api&P=0&h=220",
        "price":3.99,
        "category": "Fruit",
        "_id": "apple_1"
    },
    {
        "title":"Pepper",
        "img":"./img/pepper.jpg",
        "price":8.99,
        "category": "Vegetables",
        "_id": "pepper_1"
    },
    {
        "title":"Orange",
        "img":"./img/orange.jpg",
        "price":4.99,
        "category": "Fruit",
        "_id": "orange_1"
    },
    {
        "title":"Kiwi",
        "img":"./img/kiwi.jpg",
        "price":1.99,
        "category": "Fruit",
        "_id": "kiwi_1"
    },
    {
        "title":"Onion",
        "img":"./img/onion.jpg",
        "price":5.99,
        "category": "Vegetable",
        "_id": "onion_1"
    },
    {
        "title":"Mushrooms",
        "img":"./img/mushrooms.jpg",
        "price":6.99,
        "category": "Vegetable",
        "_id": "milk_1"
    },
    {
        "title":"Cheese",
        "img":"./img/cheese.jpg",
        "price":7.99,
        "category": "Dairy",
        "_id": "cheese_1"
    },
    {
        "title":"Grapes",
        "img":"./img/grapes.jpg",
        "price":4.99,
        "category": "Fruit",
        "_id": "grapes_1"
    },
]

class DataService{
    async getProducts(){
        //return catalog;
        let response = await axios.get("http://127.0.0.1:5001/api/products");
        return response.data;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5001/api/products", product);
        return response.data;
    }


    getCategories(){
        return ['Fruit', 'Vegetables', 'Dairy']
    }
}

export default DataService;