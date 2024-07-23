import '../Header/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="header-container">                
                    <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=128&q=75" alt="Logo Zé Delivery" />                
                    <Link to='/signin'>
                    <button className='btn-entrar-inicio'>Entrar</button>
                    </Link>
                                      
            </div>
        </>
    )
}

export default Header
