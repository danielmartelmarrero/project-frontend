import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductDetailsPage() {

  const [product, setProduct] = useState({})
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(1)

  const { category } = useParams()
  const { id } = useParams()


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart`)
      .then((response) => {
        console.log(response.data)
        //Sets whatever is inside the shoppincart db json array into the state
        setCart(response.data)
      })
      .catch((err) => { console.log(err) })

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/categories?_embed=Products`)
      .then((response) => {
        //Founds the category of the product displayed by getting the value from useParams
        const foundCategory = response.data.find((oneCategory) => {
          return oneCategory.name == category
        })
        //Finds the product inside the category stored in line 27
        const foundProduct = foundCategory.Products.find((oneProduct) => {
          return oneProduct.id == id
        })
        //Saves the product in the state
        setProduct(foundProduct)
      })
      .catch((err) => { console.log(err) })
  }, [])



  function addToCart() {

    //Check if the product we want to add is already in the cart
    const existingProd = cart.find(cartItem => cartItem.id === product.id);


    //If db json includes our product then...
    if (existingProd) {
      const updatedCart = cart.map(cartItem => {
        //Find the product inside the array stored in line 20 and add value stored in line 9 to the quantity
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity }
        }
        //Ignore the other products of the array
        else {
          return cartItem
        }
      })
      //update the db json 
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart/${existingProd.id}`, { ...existingProd, quantity: existingProd.quantity + quantity })
        .then((response) => {
          //update the state
          setCart(updatedCart)
        })
        .catch((err) => { console.log(err) })
    }


    //If the db json shoppingcart doesnt iclude the product then...
    else {
      //Add a new key to the product to store the quantity
      const newProduct = { ...product, quantity }
      //Post our newProduct into the db json
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/shoppingcart`, newProduct)
        //Update the cart state
        .then((response) => {
          setCart([...cart, newProduct]);
        })
        .catch((err) => { console.log(err) });
    }

    console.log(quantity)
    console.log(cart)
  }
  return (

    <div id='productDetPageDiv'>

      <Link to={`/${category}`}><p className='index2'>{category} {'>'} {product?.title?.[0]}</p></Link>
      <h3>{product?.title?.join('')}</h3>

      <div id='productMainDiv'>

        <div id='allPicturesDiv'>
          <img src={product?.pictures?.[0]} alt="" id='mainImg' />
          <div id='productPictures'>
            {product?.pictures?.map((onePicture) => {
              return (
                <img key={onePicture} className='small-img' src={onePicture}></img>
              )
            })}
          </div>
        </div>

        <div id='buyDiv'>
          <div id='priceDiv'>
            {product.originalPrice && <h5 style={{ textDecoration: 'line-through', margin: '40px 0 0 0' }}>{product?.originalPrice}.-€ </h5>}
            {product.discPrice ? <h5 className='discPrice'>{product.discPrice}.-€ </h5> : <h5 className='price'>{product.price}.-€ </h5>}

            <div id="financeDiv">
              <p><u>Simula tu financiación</u></p>
              <div>
                <p>Financiación: 26.22 €/mes</p>
                <p>TIN 18.95% <strong>TAE 20.63%</strong> en 6 cuotas **</p>
              </div>
            </div>

            <span>Cantidad</span>
            <select onChange={(e) => { setQuantity(parseInt(e.target.value)) }} name="Cantidad" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button onClick={addToCart} style={{ display: 'block' }}>Buy</button>
        </div>

      </div>
      <hr style={{ margin: '150px 0' }} />
      <h4 className='subtitle-detailspg' >Description</h4>

      {product.description && <img id='descriptionPicture' src={product?.description} alt="" />}
      {product?.descriptionText?.map((oneText, index) => {
        return (
          index % 2 == 0 ?
            (<p style={{ fontSize: '18px' }}>
              {oneText}
            </p>) :
            (<h3>
              {oneText}
            </h3>)
        )

      })}
    </div>
  )
}

export default ProductDetailsPage