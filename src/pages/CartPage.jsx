import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CartPage() {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart`)
      .then((response) => {
        console.log(response.data)
        //Sets whatever is inside the shoppincart db json array into the state
        setCart(response.data)
      })
      .catch((err) => { console.log(err) })
  }, [])
  console.log(cart)

  return (

    <div id='cartBody'>
      <h5 id='cartTitle'>Items in your cart</h5>
      <p id='cartLength'>{cart.length} products</p>
      <div id='cartMaindiv'>
        <div>
          {cart.map(oneProduct => {

            //{setTotal(total=>total+oneProduct.price)}
            return (
              <div className='cart-productdiv'>
                <img className='cart-productpic' src={oneProduct.pictures[0]} alt="" />
                <div className='cart-proddetails'>
                  <p>{oneProduct.title.join('')}</p>
                  <div className='cart-prod-price'>
                    <p className='cart-price'>{oneProduct.price * oneProduct.quantity}.00€</p>
                    {oneProduct.originalPrice && <p className='cart-original-price'>{oneProduct.originalPrice * oneProduct.quantity}.00€</p>}
                  </div>
                  <p>Price per unit {oneProduct.price}.00€</p>
                  <div className='cart-prod-buttons'>
                    <button className='delete-button'>Delete</button>
                    <div className='cart-productquantity'>
                      <button>-</button>
                      <h5>{oneProduct.quantity}</h5>
                      <button>+</button>
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
            <h6>2000</h6>
          </div>
          <div id='shippingCost'>
            <h6>Shppping costs</h6>
            <h6>Calculated in the next step</h6>
          </div>
          <hr />
          <div id='cartTotal'>
            <h4>Total</h4>
            <h4>2000</h4>
          </div>
          <button>Process payment</button>
          <button>Continue buying</button>
        </div>
      </div>
    </div>

  )
}

export default CartPage