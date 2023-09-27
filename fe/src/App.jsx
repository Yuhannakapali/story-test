import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>main page</h1>
    </>
  )
}

export default App
