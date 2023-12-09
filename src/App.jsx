import { useState } from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Watchlist from './components/Watchlist'
import Watched from './components/Watched'
import Add from './components/Add'
import { GlobalProvider } from './context/GlobalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Watchlist />}/>
            <Route path='/watched' element={<Watched />}/>
            <Route path='/add' element={<Add />}/>
          </Routes>
        </Router>
      </GlobalProvider>
      
    </>
  )
}

export default App
