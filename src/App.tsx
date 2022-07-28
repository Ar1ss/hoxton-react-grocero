import { useState } from 'react'
import './App.css'
import Main from '../components/MainCart'
import Header from '../components/StoreHeader'

function App () {
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
  return (
    <body>
      <Header />

      <Main />
    </body>
  )
}

export default App
