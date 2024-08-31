import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductIcon from '../components/ProductIcon'

function SearchPage() {

  let categories = [
    {
      "id": 1,
      "name": "AppleZone"
    },
    {
      "id": 2,
      "name": "Smartphones"
    },
    {
      "id": 3,
      "name": "Televisions"
    },
    {
      "id": 4,
      "name": "Offers"
    },
    {
      "id": 5,
      "name": "HouseholdAppliances"
    },
    {
      "id": 6,
      "name": "Laptops"
    },
    {
      "id": 7,
      "name": "Summer"
    },
    {
      "id": 8,
      "name": "Gaming"
    }
  ]
  const [matchingProds, setMatchingProds] = useState([])
  const [inventory, setInventory] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/Products?_embed=categories`)
      .then(response => {
        setInventory(response.data)
      })
      .catch((err) => { console.log(err) })
  }, [])

  console.log(inventory)
  const matchs = inventory.filter((oneProd) => {
    return oneProd.title[0].includes(searchTerm)
  })
  console.log(matchs)

  return (
    <div>
      <h6 className="index">Categories {'>'} Search results</h6>

      <select onChange={(e) => { sorted(products, e.target.value) }} id="orderSelect">
        <option value="low-to-high">Price: Lowest to Highest</option>
        <option value="high-to-low">Price: Highest to Lowest</option>
        <option value="a-to-z">Name: A-Z</option>
        <option value="z-to-a">Name: Z-A</option>
      </select>

      <div id="allProducts">
        {matchs.map((oneProd) => {
          let foundCategory  = categories.find((cat)=>{
            return cat.id === oneProd.categoryId
          })
          console.log(oneProd)
          return (
            <ProductIcon key={oneProd.id} product={oneProd} category={foundCategory.name} />
          )
        })}
      </div>

    </div>
  )
}

export default SearchPage