import React from "react";

export default class TwoWayClassDemo extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            UserName: 'gautam'
        }
    }

    handleUserChange(e) {
        console.log(e.target.value)
    }


    render() {
        return (
            <div className="container-fluid">
                <h2>User Detaileds</h2>
                <input type="text" onChange={this.handleUserChange}/>
                <br />
                <p>Hello ! {this.state.UserName}</p>
            </div>
        )
    }
}
















//  This is the One way Binding of react

// import React from "react";

// export default class TwoWayClassDemo extends React.Component
// {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: 'product Details',
//             Name: 'Samsung TV',
//             Price: 48649.9,
//             Stock: true,
//             Cities: ['Delhi', 'Hyderbad'],
//             Rating: {rate: 4.5, count: 6700}
//         }
//     }
//     render() {
//         return (
//             <div className="container-fluid">
//                 <h2>{this.state.title}</h2>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd>{this.state.Name}</dd>
//                     <dt>Price</dt>
//                     <dd>{this.state.Price}</dd>
//                     <dt>Stock</dt>
//                     <dd>{(this.state.Stock === true) ? "Available" : "Out of Stock"}</dd>
//                     <dt>City</dt>
//                     <dd>
//                         <ol>
//                             {
//                                     this.state.Cities.map(city => 
//                                         <li key={city}>{city}</li>
//                                     )
//                             }
//                         </ol>
//                     </dd>
//                     <dt>Rating</dt>
//                     <dd>
//                         <span className="bi bi-star-fill text-success"></span> {this.state.Rating.rate} [{this.state.Rating.count}]
//                     </dd>
//                 </dl>
//             </div>
//         )
//     }
// }