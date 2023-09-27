import { useState } from 'react'
import Checkout from './components/checkout'
import Transaction from './components/modal'
import ViewData from './components/viewData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <Transaction/>
      <ViewData/>

      </div>
    </>
  )
}

export default App
