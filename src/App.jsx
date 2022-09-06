import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Router'
import Header from './components/features/Header/Header'
import Footer from './components/features/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routing/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
