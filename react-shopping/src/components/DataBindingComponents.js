

export default function DataBindingComponents() {
    var product = {
        Name: 'Samsung TV',
        Price: 45005.54,
        stock: true
    }
    return(
        <div className="container">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dd><input type="text" value={product.Name} /></dd>
                <dt>price</dt>
                <dd>{product.Price}</dd>
            </dl>
        </div>
    )
}