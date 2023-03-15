import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'


export default function App({ Component, pageProps }) {

  
useEffect(()=>{
console.log("I am useEffect from app.js")
}
,[])
  
const [cart,setCart] = useState([]);

const [reloadKey, setReloadKey] = useState(1)
const addToCart = (item, qty,price)=>{
  let newCart = cart
  for (let index = 0; index < qty; index++) { 
    newCart.push([item, price])
  }
setCart(newCart)
setReloadKey(Math.random())
}

const removeFromCart = (item,qty)=>{
  let newCart = cart
  let index = newCart.indexOf(item)
  newCart.splice(index)
setCart(newCart)
}
const clearCart = (item)=>{
setCart([]);
}
  return <><Navbar key={reloadKey} cart={cart} /><Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart}   {...pageProps} /><Footer/></>
}
