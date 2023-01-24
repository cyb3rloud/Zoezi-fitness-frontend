import "./index.css"
import "./App.css"
import products from "./assets/products.json"
import Product from "./components/Product";
import './App.css';
import Home from './components/Home';
import ScrollButton from './components/ScrollButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserProvider from './Dashboards/auth';
import Products from './components/Products';
import Trainerinfo from './components/Trainerinfo';
import Trainers from './components/Trainer';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Testimonialss from './components/Testimonialss';
import AdminDashboard from './Dashboards/AdminDashboard';
import UserDashboard from './Dashboards/UserDashboard';
import AddProduct from './Dashboards/AddProduct';
import AddUser from './Dashboards/AddUser';
import AddTrainer from './Dashboards/AddTrainer';
import AddOrder from './Dashboards/AddOrder';
import AllUsers from './Dashboards/AllUsers';
import AllTrainers from './Dashboards/AllTrainers';
import AllProducts from './Dashboards/AllProducts';
import AllOrders from './Dashboards/AllOrders';
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <div className={"container"}>
      <main className={"main"}>
        <h1>
          Our Products
        </h1>

        <div className="grid">
          {
            products.map((product, i) => <Product {...product} key={i} />)
          }
        </div>
      </main>
      <div
        id="snipcart"
        data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3" hidden
      >
      </div>
    </div>
  );
}
