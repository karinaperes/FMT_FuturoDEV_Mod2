import '../Footer/Footer.css'
// import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='voltar-topo'>
                <span>Voltar ao topo</span>
                </div>
                <div className='footer-info-site'>

                    <div className='footer-site-map flex-row'>
                        <div className='logo-ze'>
                            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo-white-text.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D176%26h%3D56%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo Zé Delivery" />
                        </div>
                        <div className='sobre-container'>
                            <div className="sobre  flex-column gap-10">
                                <h2>Sobre o Zé Delivery</h2>
                                <a href="https://faq-consumidor-zedelivery.sprinklr.com" target="_blank" rel="noreferrer noopener">Me ajuda, Zé!</a>
                                <a href="https://bit.ly/374UOmX" target="_blank" rel="noreferrer noopener">Trabalhe conosco</a>
                                <span>Cidades Atendidas</span>
                            </div>
                        </div>
                        <div>
                            <div className='parcerias'>
                                <h2>Parcerias</h2>
                                <span>Quero ser parceiro</span>
                            </div>
                            <div className='cartao-presente'>
                                <h2>Cartão Presente</h2>
                                <pspan>Comprar aqui</pspan>
                            </div>


                        </div>
                        

                        <div className='social'></div>
                    </div>

                </div>
                <div className='footer-info'>

                </div>

            </div>
        </>
    )
}

export default Footer
