import { useState, useEffect } from "react";

// https://fakestoreapi.com => provide resources
export default function ShoppingComponents() {

    const [categories, setCatagories] = useState([]);
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [ItemsCount, setItemsCount] = useState(0);

    function GetCartItemsCount() {
        setItemsCount(cartItems.length);
    }

    function LoadCatagories() {
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => {
            data.unshift('all');  // Set 'all' in lowercase for consistency
            setCatagories(data);
        })
    }

    useEffect(() => {
        LoadCatagories();
        LoadProduct('https://fakestoreapi.com/products');  // Load all products initially
    }, []);
    
    function LoadProduct(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProduct(data);
        });
    }

    function handleCategoryChange(e) {
        const selectedCategory = e.target.value;
        if (selectedCategory === 'all') {
            LoadProduct('https://fakestoreapi.com/products');  // Fetch all products when 'all' is selected
        } else {
            LoadProduct(`https://fakestoreapi.com/products/category/${selectedCategory}`);  // Fetch products by category
        }
    }

    function handleAddtoCard(e) {
        alert("Item added to cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)  // Corrected API URL for adding to cart
        .then(response => response.json())
        .then(data => {
            setCartItems(prevItems => [...prevItems, data]);  // Add item to cart
        });
        setItemsCount(ItemsCount + 1);  // Update cart item count
        GetCartItemsCount();  // Update the count display
    }

    function handleDeletetoCard(e) {
        alert("Are you Sure!..");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(responce => responce.json())
        .then(data => {
            
        })
    }
    
    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select a category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category => 
                                <option key={category} value={category}>{category.toUpperCase()}</option>  // Ensure correct option value
                                )
                            }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-6 d-flex flex-wrap" style={{overflow: 'auto', height:'100%'}}>
                    {
                        product.map(products =>
                            <div key={products.id} className="card m-2 p-2" style={{width:'200px'}}>
                                <img src={products.image} className="card-img-top" height="150" />
                                <div className="card-header" style={{height: '160px'}}>
                                    <p>{products.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{products.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {products.rating.rate} <span>[{products.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={handleAddtoCard} id={products.id} className="btn btn-danger w-100"> 
                                        <span className="bi bi-cart4"> Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
                <aside className="col-4">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3"></span> [{ItemsCount}] Your Cart Items
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>preview</th>
                                <th>Revome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50" />
                                        </td>
                                        <td>
                                            <button className="btn btn-danger">
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>
    )
}

// Create a function to delete the order
//  And create a submission to add all the price to pay the user