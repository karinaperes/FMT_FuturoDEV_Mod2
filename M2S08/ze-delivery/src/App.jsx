import './App.css'
import { Routes, Route, BrowserRouter as Router } from  'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

function App() {    

  return (
    <>

    
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Login />}></Route>
        </Routes>
      </Router>       

      
      
    </>
  )
}

export default App
