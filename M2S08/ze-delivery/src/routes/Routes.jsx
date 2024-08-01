import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Produtos from '../pages/Produtos/Produtos'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function RoutesComponent() {

    return (
        <>
            <Router>
                <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/signin' element={<Login />}></Route>
                <Route path='/produtos' element={<Produtos/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default RoutesComponent
