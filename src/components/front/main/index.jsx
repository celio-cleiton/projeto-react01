import React from "react";
import Products from "./Products/Products";



function Main({productItems}) {
    return (
       <main>
        <Products productItems={productItems}/>
       </main>
    )    
}



export default Main;