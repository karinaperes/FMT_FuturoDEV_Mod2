import '../css/introducao.css'
import '../css/cores.css'
import '../css/componentes.css'
import '../css/tipografia.css'


function Introducao() {
    return (
        <>
            <div className="introducao-bg">
                <div className="introducao container">
                    <div className="introducao-conteudo">
                        <h1 className="font-1-xxl cor-0">
                            Bicicletas feitas sob medida
                            <span className="cor-p1">.</span>            
                        </h1>
                        <p className="font-2-l cor-5">
                            Bicicletas elétricas de alta precisão e qualidade, feitas sob
                            medida para você. Explore o mundo na sua velocidade com a Bikcraft.
                        </p>
                        <a className="botao" href="./bicicletas.html">Escolha a sua</a>
                    </div>
                    <picture>
                        <source media="(max-width: 800px)" srcSet="https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus.jpg"/>
                        <img src="https://www.origamid.com/projetos/bikcraft/img/fotos/introducao.jpg" width={1280} height={1600} alt="Bicicleta elétrica preta." />
                    </picture>

                </div>

            </div>
        </>
    )
}

export default Introducao
