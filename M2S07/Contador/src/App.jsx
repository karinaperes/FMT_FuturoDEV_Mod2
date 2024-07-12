import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Contador</h1>
      </div>
      <div className='card-container'>
        <div>
          <span>{count}</span>
        </div>
        <div className="card flex-row">
          <button className='menos' onClick={() => setCount((count) => count - 1)}>
            -
          </button>
          <button className='mais' onClick={() => setCount((count) => count + 1)}>
            +
          </button>
        </div>
      </div>        
      

    </>
  )
}

export default App
