import React, { useContext } from 'react'
import Layout from '../../Components/layout/Layout'
import MyContext from '../../Context/data/myContext'
import HeroSection from '../../Components/heroSection/HeroSection'
import Filter from '../../Components/filter/Filter'
import ProductCard from '../../Components/productCard/ProductCard'
import Track from '../../Components/track/Track'
import Testimonial from '../../Components/testimonial/Testimonial'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart, deleteFromCart } from '../../Redux/cartSlice'



const Home = () => {
 
  // Checking Function-------

  // const dispatch = useDispatch();
  // const cartItem = useSelector((state)=> state.cart)

  // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // }
    

  return (
    <Layout>

      {/* Checking Redux   */}
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div> */}
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <div className='flex justify-center -mt-10 mb-4'>
        <Link to={"/allproducts"}>
          <button className='bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
    
    </Layout>
  )
}

export default Home