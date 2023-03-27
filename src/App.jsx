import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {
  const [products , setProducts]= useState([]);
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
// console.log(products)
  return (
    <div className="App">
      <Header></Header>
    <div className='container mx-auto mt-8 rgrid'>
      <div className='grid grid-cols-3 gap-3 gap-y-6'>
      {
        products.map(data => <Card data={data}></Card> )
      }
      </div>
      <div>
        <h2 className='text-center'>Order Summary</h2>
      </div>
    </div>


    </div>
  )
}

export default App
