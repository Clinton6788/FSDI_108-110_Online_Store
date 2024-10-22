import React from "react";
import SpecialsItem from "./specials_item";
import "./home_styles/specials.css"

function Specials(){
    return(
        <div className="specials">
            <h3>On Sale Now!</h3>
            <SpecialsItem></SpecialsItem>
        </div>
        
    )
};

export default Specials;