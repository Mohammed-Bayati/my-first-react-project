import React from "react";
import reactDom from "react-dom";
import Hedaing from "./Hedaing";


function App(){
    return <div className="container">
        <h1 className="titel">Hello Leon</h1>
        <Hedaing
            name="mohammed"
            mam="332323222"
        />
        <Hedaing 
            name="ali"
            mam="5312632"
        />
    </div>
};





export default App;