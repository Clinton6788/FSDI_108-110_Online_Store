import DataContext from "./dataContext";
import { useState } from "react";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name:"Clint", id:123456})

    function addToCart(product){
        const copy = [...cart];
        let found = false;
        for (let i = 0; i < copy.length; i++) {
            let cartProd = copy[i];
            if (cartProd._id === product._id){ 
                cartProd.qty += product.qty;
                found = true;
            }
        }
        if (!found){
            copy.push(product);
        }
        setCart(copy);
    }

    function removeFromCart(){

    } 

    function clearCart(){

    }

    return(
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;