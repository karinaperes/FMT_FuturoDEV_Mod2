import { useEffect, useState } from "react"
import '../css/Noticia.css'

function Noticia() {

    const [texto, setTexto] = useState(null)

    async function getData() {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        const data = await response.json()
        const titulo = data.items[0].titulo

        setTexto(titulo)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="container-noticia flex-column">
                <h4>Noticias: </h4>
                <p>{texto}</p>

            </div>
        </>
    )
}

export default Noticia
