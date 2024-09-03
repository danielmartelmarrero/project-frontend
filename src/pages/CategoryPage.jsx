import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductIcon from "../components/ProductIcon"
import axios from "axios"


function CategoryPage() {

  const [products, setProducts] = useState([])
  const [selectedPrice, setSelectedPrice] = useState('all')

  let { category } = useParams()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/categories?_embed=Products`)
      .then((response) => {
        const foundCategory = response.data.find((oneCategory) => {
          return oneCategory.name == category
        })
        setProducts(foundCategory.Products)
      })
      .catch((err) => { console.log(err) })
  }, [category])

  function sorted(array, value) {
    if (value == "low-to-high") {
      const copiedArray = [...products]
      copiedArray.sort((a, b) => {
        return a.price - b.price
      })
      setProducts(copiedArray)
    }

    else if (value == "high-to-low") {
      const copiedArray = [...products]
      copiedArray.sort((a, b) => {
        return b.price - a.price
      })
      setProducts(copiedArray)
    }
    else if (value == "a-to-z") {
      const copiedArray = [...products]
      copiedArray.sort((a, b) => {
        return a?.title?.join('').localeCompare(b?.title?.join(''))
      })
      setProducts(copiedArray)
    }
    else if (value == "z-to-a") {
      const copiedArray = [...products]
      copiedArray.sort((a, b) => {
        return b?.title?.join('').localeCompare(a?.title?.join(''))
      })
      setProducts(copiedArray)
    }
  }
  let filteredPrice = 0
  return (
    <div>
      <h6 className="index">Categories {'>'} {category}</h6>

      <select style={{ border: 'none', fontSize: '13px' }} onChange={(e) => { sorted(products, e.target.value) }} id="orderSelect">
        <option style={{ fontSize: '13px' }} value="low-to-high">Price: Lowest to Highest</option>
        <option style={{ fontSize: '13px' }} value="high-to-low">Price: Highest to Lowest</option>
        <option style={{ fontSize: '13px' }} value="a-to-z">Name: A-Z</option>
        <option style={{ fontSize: '13px' }} value="z-to-a">Name: Z-A</option>
      </select>

      <section id="filterDiv">
        <p>{'>'}Category</p>
        <hr />
        <div>
          <input type="radio" name='price' value='all' onChange={(e) => {
            setSelectedPrice(e.target.value)
            console.log(selectedPrice)
          }} />
          <label >All</label>
        </div>
        <div>
          <input type="radio" name='price' value='less than 500' onChange={(e) => {
            setSelectedPrice(e.target.value)
            console.log(selectedPrice)
          }} />
          <label >0-499</label>
        </div>
        <div>
          <input type="radio" name="price" value='bigger than 500' onChange={(e) => {
            setSelectedPrice(e.target.value)
            console.log(selectedPrice)
          }} />
          <label >500{'<'}</label>
        </div>
        <hr />
      </section>

      <div id="allProducts" style={{ position: "relative", top: '-120px' }}>
        {selectedPrice=='all' && products.map((oneProduct) => {
          return (
            <ProductIcon key={oneProduct.id} product={oneProduct} category={category} />
          )
        })}
        {selectedPrice=='less than 500' &&  products.filter((oneProduct) => {
          return oneProduct.price<500
        }).map(oneProduct=>{
          return(<ProductIcon key={oneProduct.id} product={oneProduct} category={category} />)
        })}
        {selectedPrice=='bigger than 500' &&  products.filter((oneProduct) => {
          return oneProduct.price>499
        }).map(oneProduct=>{
          return(<ProductIcon key={oneProduct.id} product={oneProduct} category={category} />)
        })}
      </div>

    </div>
  )
}

export default CategoryPage