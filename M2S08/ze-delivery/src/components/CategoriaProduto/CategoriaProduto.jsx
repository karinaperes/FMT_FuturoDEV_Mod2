import './CategoriaProduto.css'

function CategoriaProduto({texto, imagem}) {

    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <img className='imagem-produto' src={imagem} />
                </div>
                <span>{texto}</span>
            </div>                
        </>
    )
}

export default CategoriaProduto
