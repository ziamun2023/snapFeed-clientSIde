import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Layout></Layout>
     
    </>
  )
}

export default App
