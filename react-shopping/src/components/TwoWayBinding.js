import { useState } from "react";

export default function TwoWayBinding() {
    const [product, setProduct] = useState({Name: '', Price: 0, City: '', Stock: false});
    function handleName(e) {
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handlePrice(e) {
        setProduct({
            Name: product.Name,
            Price: e.target.value,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handleCity(e) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: e.target.value,
            Stock: product.Stock
        })
    }
    function handleStock(e) {
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: e.target.checked
        })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input className="form-control" onChange={handleName} type="text"  /></dd>
                        <dt>price</dt>
                        <dd><input onChange={handlePrice} className="form-control" type="text"  /></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity} className="form-select">
                                <option>Delhi</option>
                                <option >Hydrabad</option>
                                <option >Chennai</option>
                                <option >Jharkhand</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input className="form-check-input" onChange={handleStock} type="checkbox"  /> Availabe
                        </dd>
                    </dl>
                    <button className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock === true)?"Available":"Out of Stock"}</dd>
                    </dl>
                </div>
            </div>

        </div>
    )
}