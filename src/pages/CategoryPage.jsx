import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductIcon from "../components/ProductIcon"
import axios from "axios"


function CategoryPage() {

  const [products, setProducts] = useState([])

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
  }, []) 

  function sorted(array, value){
      if(value=="low-to-high"){
        const copiedArray = [...products]
        copiedArray.sort((a,b)=>{
          return a.price-b.price 
        })
        setProducts(copiedArray)
      }

      else if(value=="high-to-low"){
        const copiedArray = [...products]
        copiedArray.sort((a,b)=>{
          return b.price-a.price
        })
        setProducts(copiedArray)
      }
      else if(value=="a-to-z"){
        const copiedArray = [...products]
        copiedArray.sort((a,b)=>{
          return a?.title?.join('').localeCompare(b?.title?.join(''))
        })
        setProducts(copiedArray)
      }
      else if(value=="z-to-a"){
        const copiedArray = [...products]
        copiedArray.sort((a,b)=>{
          return b?.title?.join('').localeCompare(a?.title?.join(''))
        })
        setProducts(copiedArray)
      }
  }
  return (
    <div>
      <h6 className="index">Categories {'>'} {category}</h6>
      <select onChange={(e)=>{sorted(products, e.target.value)}} id="orderSelect">

        <option value="low-to-high">Price: Lowest to Highest</option>
        <option value="high-to-low">Price: Highest to Lowest</option>
        <option value="a-to-z">Name: A-Z</option>
        <option value="z-to-a">Name: Z-A</option>
        
      </select>

      <div id="allProducts">
        {products.map((oneProduct) => {
          return (
            <ProductIcon key={oneProduct.id} product={oneProduct} category={category}/>
          )
        })}
      </div>

    </div>
  )
}

export default CategoryPage