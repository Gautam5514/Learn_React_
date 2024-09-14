import { useState, useEffect } from "react";

export default function ShoppingComponents() {

    const [categories, setCatagories] = useState([]);
    const [product, setProduct] = useState([]);

    function LoadCatagories() {
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => {
            data.unshift('All');
            setCatagories(data);
        })
    }

    useEffect(() => {
        LoadCatagories();
        LoadProduct();
    }, [])
    
    function LoadProduct() {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            setProduct(data);
        })
    }

    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1> <span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <label>Select a category</label>
                        <div>
                            <select className="form-select">
                            {
                                categories.map(category => 
                                <option key="{category}">{category.toUpperCase()}</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap" overflow="auto" style={{height: '100%'}}>
                        {
                            product.map(products =>
                                <div key={products.id} className="card m-2 p-2 w-25">
                                    <img src={products.image} className="card-img-top" 
                                    height="150" />
                                    <div className="card-header">
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
                                </div>
                            )
                        }
                </main>
            </section>
        </div>
    )
}

