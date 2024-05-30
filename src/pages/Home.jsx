import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import CartSideBar from '../components/CartSideBar'

const Home = () => {
  return (
    <><Navbar/>
   <CategoryMenu/> 
   <FoodItems/>
   <CartSideBar/>
    </>

  )
}

export default Home