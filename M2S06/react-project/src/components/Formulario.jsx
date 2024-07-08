import { useEffect, useState } from "react"
import '../css/contato.css'
import '../css/cores.css'
import '../css/componentes.css'
import '../css/tipografia.css'


function Formulario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviarForm() {
        const form = {
            nome,
            email,
            mensagem
        }
        console.log('Formulário a ser enviado: ', form)
    }

    return (
        <>
            <div aria-label="Formulario">
                <fieldset>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>                    
                </fieldset>

                <fieldset>
                    <label>E-mail</label>
                    <input type="text" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>                    
                </fieldset>

                <fieldset>
                    <label>Mensagem</label>
                    <textarea type="text" placeholder="Digite sua mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>                    
                </fieldset>

                <button className="botao col-2" onClick={() => enviarForm()}>Enviar</button>
            </div>
        </>
    )
}

export default Formulario
