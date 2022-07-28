import { useState } from 'react'
import './App.css'

import MainCart from './components/MainCart'
import StoreHeader from './components/StoreHeader'

function App () {
  type Item = {
    id: number,
    name: string,
    price: number,
    inCart: number
  }
 
  const [storeItems, setstoreItems] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.40,
      inCart: 0,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.35,
      inCart: 2,
    },
    {
      id: 3,
      name: "apple",
      price: 0.35,
      inCart: 3,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.35,
      inCart: 4,
    },
    {
      id: 5,
      name: "avocado",
      price: 0.35,
      inCart: 5,
    },
    {
      id: 6,
      name: "bananas",
      price: 0.35,
      inCart: 6,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.35,
      inCart: 7,
    },
    {
      id: 8,
      name: "berry",
      price: 0.35,
      inCart: 8,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.35,
      inCart: 9,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.35,
      inCart: 10,
    },
])

function getItemImagePath(item : Item) {
  let id = String(item.id).padStart(3, "0");
  return `src/icons/${id}-${item.name}.svg`;
}
  return (
    <body>

      <StoreHeader
        getItemImagePath={getItemImagePath}
        storeItems={storeItems}
        />

      <MainCart 
      getItemImagePath={getItemImagePath}
      storeItems={storeItems}
      />
    </body>
  )
}




export default App
