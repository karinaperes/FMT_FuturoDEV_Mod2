import '../css/header.css'
import '../css/cores.css'
import '../css/componentes.css'
import '../css/tipografia.css'

function Header() {
    return (
        <>
            <div className='header-bg'>
                <div className="header container">
                    <a href="./">
                    <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="Logo Bikcraft" />
                    </a>
                    <nav aria-label='primaria'>
                        <ul className='header-menu font-1-m cor-0'>
                            <li>
                                <a href="./bicicletas.html">Bicicletas</a>
                            </li>
                            <li>
                                <a href="./seguros.html">Seguros</a>
                            </li>
                            <li>
                                <a href="./contato.html">Contato</a>
                            </li>
                        </ul>
                    </nav>                   
                </div>
            </div>            
        </>
    )
}

export default Header
