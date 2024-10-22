import React from "react";
import { Link } from "react-router-dom";
import "./home_styles/specials_item.css"
import Quantity_Picker from "../quantity_picker";

function SpecialsItem({item, previousPrice, newPrice}){
    return(
        <div className="specialsItem">
            <h4>Product Name</h4>
            <div className="specialsFlex">
                <img src="/img/cheese.jpg" alt="" />
                <div className="prodInfo">
                    <div className="prodPrice">
                        <p className="origPrice">$5.99</p>
                        <p className="newPrice">$4.79</p>
                    </div>
                    <div>
                        <Quantity_Picker />
                        <label>Total Price</label>
                        <button className="btn btn-sm btn-dark">Add to Cart!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialsItem