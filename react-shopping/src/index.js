import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import DataBindingComponents from './components/DataBindingComponents';
// import ShoppingComponents from './components/ShopingComponents';
import TwoWayClassDemo from './components/TwoWayClassDemo';
// import TwoWayBinding from './components/TwoWayBinding';
// import EventBindingComponents from './components/EventBindingComponents';
// import { NetflixRegisterComponents } from './components/NetflixRegister';
// import NetflixIndexComponents from './components/NetflixIndexComponents';
//import RegisterComponent from './components/registerComponents';
// import { NetflixRankComponent } from './components/NetflixRank';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NetflixIndexComponents /> */}
      {/* <RegisterComponent/> */}
    {/* <DataBindingComponents/> */}
    {/* <ShoppingComponents/> */}
    {/* <DataBindingComponents /> */}
    {/* < TwoWayBinding /> */}
    < TwoWayClassDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
