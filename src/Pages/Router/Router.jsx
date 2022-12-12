import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Bookmenu from '../../Components/Bookmenu'
import Cart from '../../Components/Cart'
import Getbook from '../../Components/Getbook'
import Order from '../../Components/Order'
import Profile from '../../Components/Profile'
import Wishlist from '../../Components/Wishlist'
import Dashboard from '../Dashboard/Dashboard'
import Loginpage from '../Login/Loginpage'
import Signup from '../Signup/Signup'

export default function Routerone() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Loginpage/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/book' element = {<Getbook/>}/>
                <Route path='/cart' element = {<Cart/>}/>
                <Route path='/order' element = {<Order/>}/>
                <Route path='/wishlist' element = {<Wishlist/>}/>
                <Route path='/profile' element = {<Profile/>}/>
            </Routes> 
        </Router>


    </div>
  )
}
