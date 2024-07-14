import './App.css'
import Contador from './componentes/Contador'
import Lista from './componentes/Lista'
import Formulario from './componentes/Formulario'
import Noticia from './componentes/Noticia'


function App() {
  return (
    <>
      <div className='flex-row items-center'>

        <Lista></Lista>
        <Contador></Contador>
        <Formulario></Formulario>

      </div>
      

      <Noticia></Noticia>
    </>
  )
}

export default App
