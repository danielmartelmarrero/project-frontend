import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CartPage() {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
 

  function getShopping() {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart`)
      .then((response) => {
        //Sets whatever is inside the shoppincart db json array into the state
        const filteredCart = response.data.filter((oneProduct) => {
          return oneProduct.quantity > 0
        })
        setCart(filteredCart)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(()=>{
   
      let totalPrice = cart.reduce((previous, next) => {
        return previous + (next.price *next.quantity)
      }, 0)
      setTotal(totalPrice)
  },[cart])

  useEffect(() => {
    getShopping()
  }, [])

  console.log(cart)
  console.log(total)

  function deleteProd(prod) {

    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart/${prod}`)
      .then(response => {
        getShopping()
      })
      .catch(err => console.log(err))
  }
  function addProd(prod) {

    axios.put(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart/${prod.id}`, { ...prod, quantity: prod.quantity + 1 })
      .then(response => {
        getShopping()
      })
      .catch(err => console.log(err))
  }
  function takeProd(prod) {

    axios.put(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart/${prod.id}`, { ...prod, quantity: prod.quantity - 1 })
      .then(response => {
        getShopping()
      })
      .catch(err => console.log(err))
  }

  return (

    <div id='cartBody'>
      <h5 id='cartTitle'>Items in your cart</h5>
      <p id='cartLength'>{cart.length} products</p>
      <div id='cartMaindiv'>
        <div>
          {cart.map(oneProduct => {

            //{setTotal(total=>total+oneProduct.price)}
            return (
              <div key={oneProduct.title} className='cart-productdiv'>
                <img className='cart-productpic' src={oneProduct.pictures[0]} alt="" />
                <div className='cart-proddetails'>
                  <p>{oneProduct.title.join('')}</p>
                  <div className='cart-prod-price'>
                    {oneProduct.price%1 ==0 ?  <p className='cart-price'>{oneProduct.price * oneProduct.quantity}.00€</p>:<p className='cart-price'>{oneProduct.price * oneProduct.quantity}€</p>}
                    {oneProduct.originalPrice && oneProduct.originalPrice%1==0 && <p className='cart-original-price'>{oneProduct.originalPrice * oneProduct.quantity}.00€</p>}
                    {oneProduct.originalPrice && oneProduct.originalPrice%1!=0 && <p className='cart-original-price'>{oneProduct.originalPrice * oneProduct.quantity}€</p>}
                  </div>
                    {oneProduct.price%1 ==0 ?  <p>Price per unit {oneProduct.price}.00€</p>:<p>Price per unit {oneProduct.price}€</p>}
                  
                  <div className='cart-prod-buttons'>
                    <button onClick={() => deleteProd(oneProduct.id)} className='delete-button'>Delete</button>
                    <div className='cart-productquantity'>
                      <button onClick={() => takeProd(oneProduct)}>-</button>
                      <h5>{oneProduct.quantity}</h5>
                      <button onClick={() => addProd(oneProduct)}>+</button>
                    </div>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
        <div id='cartResume'>
          <h5>Resume</h5>
          <p>You can add your discount voucher during the payment process</p>
          <hr />
          <div id='cartSubtotal'>
            <h6>Subtotal</h6>
            <h6>{total}€</h6>
          </div>
          <div id='shippingCost'>
            <h6>Shppping costs</h6>
            <h6>Calculated in the next step</h6>
          </div>
          <hr />
          <div id='cartTotal'>
            <h4>Total</h4>
            <h4>{total}€</h4>
          </div>
          <button id='payButton' style={{ display: 'block' }}>Process payment</button>
          <button id='keepBuying' style={{ display: 'block' }}>Continue buying</button>
        </div>
      </div>
    </div>

  )
}

export default CartPage