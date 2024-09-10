

export default function DataBindingComponents() {
    var catagories = ["All", "Electronics", "Footwear", "Fashion"];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    catagories.map(catogary => 
                        <li key={catogary}>{catogary}</li>
                    )
                    
                }
            </ol>
            <h2>Select Item</h2>
            <select>
                {
                    catagories.map(category => 
                        <option key={category} value={category}>{category}</option>
                    )
                }
            </select>

        </div>
    )
}




// var product = {
//     Name: 'Samsung TV',
//     Price: 45005.54,
//     stock: true
// }
// return(
//     <div className="container">
//         <h2>Product Details</h2>
//         <dl>
//             <dt>Name</dt>
//             <dd>{product.Name}</dd>
//             <dd><input type="text" value={product.Name} /></dd>
//             <dt>price</dt>
//             <dd>{product.Price}</dd>
//             <dt>Stocks</dt>
//             <dd>{(product.stock == true) ? "Available" : "Out of"}</dd>
//         </dl>
//     </div>
// )