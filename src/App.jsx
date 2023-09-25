import React, { Children } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './Pages/home/Home';
import Order from './Pages/order/Order';
import Cart from './Pages/cart/Cart';
import Dashboard from './Pages/admin/dashboard/Dashboard';
import NoPage from './Pages/nopage/NoPage';
import MyState from './Context/data/myState';
import Signup from './Pages/registration/Signup';
import Login from './Pages/registration/Login';
import ProductInfo from './Components/productInfo/ProductInfo';
import AddProduct from './Pages/page/AddProduct';
import UpdateProduct from './Pages/page/UpdateProduct';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './Pages/allProducts/AllProducts';

const App = () => {
  return (
    <MyState>
         <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path='/order' element={ <Order/> } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/productinfo/:id' element={<ProductInfo/>} />
        <Route path='/addproduct' element={<AddProduct/> } />
        <Route path='/updateproduct' element={ <UpdateProduct/>} />
        <Route path='/*' element={<NoPage/>} />
      </Routes>
    <ToastContainer/>
    </Router>
    </MyState>
   
  )
}

export default App;


// ProtectedRoute for User--

 export const ProtectedRoute = ({Children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return Children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// ProtectedRoute for Admin

export const ProtectedRouteForAdmin = ({Children}) =>{
  const admin = JSON.parse(localStorage.getItem('user'));
  if(admin.user.email === "meraj@gmail.com"){
    return Children
  }else{
    return <Navigate to={'/login'}/>
  }
}

