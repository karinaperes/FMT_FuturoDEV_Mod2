import { useState } from 'react'
import '../css/Contador.css'


function Contador() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Contador</h1>
        <div className='card-container m-t-2em flex-column'>
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
      </div>
      
    </>
  )
}

export default Contador
