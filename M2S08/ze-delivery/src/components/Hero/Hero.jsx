import '../Hero/Hero.css'

function Hero() {
    return (
        <>
            <div className="hero-container flex-column">
                <h1 className="hero-text">Bebida rápida, gelada e no precinho? O Zé entrega tudo.</h1>
                <div>
                    <div className="input-container">
                        <svg viewBox="0 0 24 24" className="local-icon" width={24} height={24}>
                            <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" fill='rgb(102, 102, 102)'>
                            </path>
                        </svg>
                        <input id="fake-address-search-input" type="text" name="fake-address-search-input" placeholder="Inserir endereço para ver preço" className="input-area"/>
                    </div>
                </div>                            
            </div>                     
        </>
    )
}

export default Hero
