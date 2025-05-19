import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <h1 class=" font-bold underline">
        Hello world!
      </h1>
      <Navbar />
    </>
  )
}

export default App
