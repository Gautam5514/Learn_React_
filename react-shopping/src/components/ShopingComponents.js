import { useState, useEffect } from "react";

// https://fakestoreapi.com => provide resources
export default function ShoppingComponents() {
    const [categories, setCatagories] = useState([]);
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [ItemsCount, setItemsCount] = useState(0);

    // Load categories
    function LoadCatagories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift('all');  // Adding 'all' category
                setCatagories(data);
            });
    }

    // Load products
    useEffect(() => {
        LoadCatagories();
        LoadProduct('https://fakestoreapi.com/products');  // Load all products initially
    }, []);

    // Fetch products by URL
    function LoadProduct(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            });
    }

    // Handle category change
    function handleCategoryChange(e) {
        const selectedCategory = e.target.value;
        if (selectedCategory === 'all') {
            LoadProduct('https://fakestoreapi.com/products');
        } else {
            LoadProduct(`https://fakestoreapi.com/products/category/${selectedCategory}`);
        }
    }

    // Add item to cart
    function handleAddtoCard(e) {
        const itemId = e.target.id;
        fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then(response => response.json())
            .then(data => {
                setCartItems(prevItems => {
                    // Check if item is already in cart to prevent duplicates
                    if (!prevItems.find(item => item.id === data.id)) {
                        setItemsCount(prevCount => prevCount + 1); // Update item count
                        return [...prevItems, data]; // Add item to cart
                    }
                    return prevItems; // If already in cart, return previous items without changes
                });
            });
        alert("Item added to cart");
    }

    // Delete item from cart
    function handleDeletetoCard(e) {
        const itemId = parseInt(e.target.id);
        setCartItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== itemId); // Filter out item by id
            setItemsCount(updatedItems.length); // Update item count
            return updatedItems;
        });
        alert("Item removed from cart");
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
                                {categories.map(category =>
                                    <option key={category} value={category}>{category.toUpperCase()}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-6 d-flex flex-wrap" style={{ overflow: 'auto', height: '100%' }}>
                    {product.map(products =>
                        <div key={products.id} className="card m-2 p-2" style={{ width: '200px' }}>
                            <img src={products.image} className="card-img-top" height="150" alt={products.title} />
                            <div className="card-header" style={{ height: '160px' }}>
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
                    )}
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
                                <th>Preview</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item =>
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <img src={item.image} width="50" height="50" alt={item.title} />
                                    </td>
                                    <td>
                                        <button onClick={handleDeletetoCard} id={item.id} className="btn btn-danger">
                                            <span className="bi bi-trash"></span>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>
    )
}
