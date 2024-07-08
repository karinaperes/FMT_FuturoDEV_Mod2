import '../css/contato.css'
import '../css/cores.css'
import '../css/componentes.css'
import '../css/tipografia.css'
import Formulario from './Formulario'

function Contato() {
    return (
        <>
            <main>
                <div className="titulo-bg">
                    <div className="titulo container">
                        <p className="font-2-l-b cor-5">Respostas em até 24h</p>
                        <h1 className="font-1-xxl cor-0">
                            nosso contato
                            <span className="cor-p1">.</span>                        
                        </h1>
                    </div>                    
                </div>
                <div className="contato container">
                    <section className="contato-dados" aria-label="Endereço">
                        <h2 className="font-1-m cor-0">Loja Online</h2>
                        <div className="contato-endereco font-2-s cor-4">
                            <p>Rua Ali Perto, 35</p>
                            <p>Rio de Janeiro - RJ</p>
                            <p>Brasil - Terra - Vita Láctea</p>
                        </div>
                        <address className="contato-meios font-2-s cor-4">
                            <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                            <a href="mailto:assistencia@bikcraft.com">assistencia@bikcraft.com</a>
                            <a href="tel:+552199999999">+55 21 9999-9999</a>                            
                        </address>
                        <div className="contato-redes">
                            <a href="./">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram-p.svg" alt="Instagram" />
                            </a>
                            <a href="./">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook-p.svg" alt="Facebook" />
                            </a>
                            <a href="./">
                                <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube-p.svg" alt="Youtube" />
                            </a>
                        </div>
                    </section>
                    <section className="contato-formulario" aria-label="Formulário">
                        <Formulario></Formulario>

                    </section>

                </div>
            </main>
        </>

    )
}

export default Contato
