import { useEffect, useState } from "react";

// Nasa Api Example
export default function DataBindingComponents() {
    const [mars, setMars] = useState({ photos: [] });  // Initialize mars as an object with an empty photos array

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY") // this is the api of NASA 
            .then(response => response.json()) // to convert all the format in the json
            .then(data => { // then travese on the api of data
                setMars(data);  // Set the fetched data
            });
    }, []);

    return (
        <div className="container">
            <h2>Mars Photo</h2>
            <div className="d-flex flex-wrap">
            {
                mars.photos.map(photo=>
                    <div className="card p-2 m-2 w-25">
                        <img src={photo.img_src} className="card-img-top" heigh="150" />
                        <div className="card-header">
                            <h2>{photo.camera.fullName}</h2>
                        </div>
                        <div className="card-body">
                            <p>{photo.rover.name}</p>  
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
}


// This is the using the NASA API usese and make the column shape figure

// {/* <h2>Mars Photos</h2>
// <table className="table table-hover">
//     <thead>
//         <tr>
//             <th>Photo Id</th>
//             <th>Camera Name</th>
//             <th>Rover Name</th>
//             <th>Preview Image</th>
//         </tr>
//     </thead>
//     <tbody>
//         {
//             mars.photos.length > 0 ? (
//                 mars.photos.map((photo) => (
//                     <tr key={photo.id}>
//                         <td>{photo.id}</td>
//                         <td>{photo.camera.full_name}</td>
//                         <td>{photo.rover.name}</td>
//                         <td><img src={photo.img_src} alt="Mars" width="100" /></td>
//                     </tr>
//                 ))
//             ) : (
//                 <tr>
//                     <td colSpan="4">Loading...</td>
//                 </tr>
//             )
//         }
//     </tbody>
// </table> */}









 // use of useState


//  const [products, setProducts] = useState(["TV", "Mobile", "Shoes"]);

//  return(
//      <div className="container">
//          <ol>
//              {
//                  products.map((product) =>
//                  <li key={product}>{product}</li>
//              )
//              }
//          </ol>
//      </div>
//  )



// React is one way Binding


// var username = "John";

// return(
//     <div className="container">
//         <h2>User Details</h2>
//         User Name :
//         <input type="text" value={username} />
//         <br />
//         hello! {username};
//     </div>
// )

// It will show the nested itration to using that



// var menu = [
//     {Category: "Electronics", Products: ["Samsung TV", "MObile"]},
//     {Category: "Footwear", Products: ["Nike Casuala", "Lee Boot"]}
// ]
// return(
//     <div className="container">
//         <h2>Catogories</h2>
//         <ol>
//             {
//                 menu.map(item =>
//                     <li key={item.Category}>{item.Category}
//                     <ul>
//                         {
//                             item.Products.map(Product =>
//                                 <li key={Product}>{Product}</li>
//                             )
//                         }
//                     </ul>
//                     </li>
//                 )
//             }
//         </ol>
//         <h2>Select a Product</h2>
//         <select>
//             {
//                 menu.map(item =>
//                     <optgroup key={item.Category} label={item.Category}>
//                         {
//                             item.Products.map(product =>
//                                 <option key={product}>{product}</option>
//                             )
//                         }

//                     </optgroup>
//                 )
//             }
//         </select>
//     </div>
// )




// This will explain how the present the table

// var products = [
//     {Name: 'Samsung TV', Price: 56000.67},
//     {Name: 'Nike Casuals', Price: 73478.98}
// ];
// return(
//     <div className="container">
//         <h2>Product Name</h2>
//         <table className="table table-hover">
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 products.map(product =>
//                     <tr>
//                         <td>{product.Name}</td>
//                         <td>{product.Price}</td>
//                     </tr>
//                 )
//             }
//         </tbody>
//         </table>
//     </div>
// )






// This will show how we call binding efficiency

// var catagories = ["All", "Electronics", "Footwear", "Fashion"];
//     return(
//         <div className="container">
//             <h2>Categories</h2>
//             <ol>
//                 {
//                     catagories.map(catogary => 
//                         <li key={catogary}>{catogary}</li>
//                     )
                    
//                 }
//             </ol>
//             <h2>Select Item</h2>
//             <select>
//                 {
//                     catagories.map(category => 
//                         <option key={category} value={category}>{category}</option>
//                     )
//                 }
//             </select>

//         </div>
//     )


// This will show you how will binding is work
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