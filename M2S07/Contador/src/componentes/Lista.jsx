 import '../css/Lista.css'
 import { useState } from 'react'

 function Lista() {
    const [texto, setTexto] = useState('')
    const [lista, setLista] = useState([])

    function handleSubmit(event) {
        event.preventDefault()

        if(texto) {
            setLista((listaAnterior) => {
                return [...listaAnterior, texto]
            }) 
            setTexto('')                  
        } 
    }

    function handleClear() {
        setLista([])
    }

    return (
        <>
            <div className="card-container container-lateral">
                <h2 className='color-dgray'>Lista</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={texto} onChange={event => setTexto(event.target.value)} />
                    
                </form>

                <button className='btn-input' onClick={handleClear}>Limpar</button>
                <button className='btn-input' onClick={handleSubmit}>Adicionar</button>

                <ul className='flex-column'>
                    {
                        lista.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
 }

 export default Lista
