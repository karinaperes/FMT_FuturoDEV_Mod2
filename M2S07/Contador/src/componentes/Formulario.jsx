import { useEffect, useState } from "react"
import '../css/Formulario.css'

function Formulario() {
    const [formdata, setFormdata] = useState({
        nome: '',
        email: '',
        idade: ''
    })
    
    const [message, setMessage] = useState(null)

    useEffect(() => {
        const isError = Object.values(formdata).reduce((totalizador, item) => {
            if(!item) totalizador += 1
            return totalizador
        }, 0)

        if(isError > 0) {
            setMessage('Todos os campos devem ser preenchidos.')
        } else {
            setMessage('Todos os campos foram preenchidos')            
        }
    }, [formdata])   

    return (
        <>
            <div className="card-container container-lateral">
                <h2 className="color-dgray">Formulario</h2>
                <form>
                    <input id="input-nome" type="text" placeholder="Digite seu nome" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, nome: event.target.value}))} />
                     <input id="input-email" type="text" placeholder="Digite seu email" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, email: event.target.value}))} />
                     <input id="input-idade" type="text" placeholder="Digite sua idade" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, idade: event.target.value}))} />

                    <button className="btn-input">Cadastrar</button>
                </form>

                <code className="color-dgray">{message}</code>

                <div className="display color-dgray flex-column items-start">
                    <h3>Nome: {formdata.nome}</h3>
                    <h3>Email: {formdata.email}</h3>
                    <h3>Idade: {formdata.idade}</h3>
                </div>
                

            </div>
        </>
    )
}

export default Formulario
