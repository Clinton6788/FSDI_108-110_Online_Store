import DataContext from "./dataContext";
import { useState } from "react";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name:"Clint", id:123456})

    function addToCart(product){
        const copy = [...cart];
        copy.push(product);
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