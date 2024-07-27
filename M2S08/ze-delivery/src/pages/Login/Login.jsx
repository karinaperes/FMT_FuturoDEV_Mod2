import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import '../Login/Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (email === 'admin@admin.com' && senha === 'admin123') {
            navigate('/home')
        } else {
        alert('Email e/ou senha incorretos')
        }
    }
    
    return (
        <>
            <div className='login-pg'>
                <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo Zé delivery" />
                <div className='flex-row w-100'>
                    <svg viewBox="0 0 24 24" role="button" width="32" aria-label="Voltar" className="svg-button" onClick={() => navigate('/')}><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path></svg>
                    <p>Entrar na conta com outros serviços:</p>
                </div>
                
                <div className="contas">
                    <button type="button" id="login-facebook" className="btn-login">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30">
                        <path fill='#ffffff' d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path>
                        </svg>                       
                        <div>
                        Continuar com Facebook
                        </div>
                    </button>
                    <button type="button" id="login-apple" className="btn-login">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30">
                        <path fill='#ffffff' d="M25.565,9.785c-0.123,0.077 -3.051,1.702 -3.051,5.305c0.138,4.109 3.695,5.55 3.756,5.55c-0.061,0.077 -0.537,1.963 -1.947,3.94c-1.119,1.703 -2.361,3.42 -4.247,3.42c-1.794,0 -2.438,-1.135 -4.508,-1.135c-2.223,0 -2.852,1.135 -4.554,1.135c-1.886,0 -3.22,-1.809 -4.4,-3.496c-1.533,-2.208 -2.836,-5.673 -2.882,-9c-0.031,-1.763 0.307,-3.496 1.165,-4.968c1.211,-2.055 3.373,-3.45 5.734,-3.496c1.809,-0.061 3.419,1.242 4.523,1.242c1.058,0 3.036,-1.242 5.274,-1.242c0.966,0.001 3.542,0.292 5.137,2.745zM15.001,6.688c-0.322,-1.61 0.567,-3.22 1.395,-4.247c1.058,-1.242 2.729,-2.085 4.17,-2.085c0.092,1.61 -0.491,3.189 -1.533,4.339c-0.935,1.242 -2.545,2.177 -4.032,1.993z"></path>
                        </svg>
                        <div>
                            Continuar com a Apple
                        </div>
                    </button>
                </div>
                <div className="ou">
                    <hr className="divisao"></hr>
                    <p>OU</p> 
                    <hr className="divisao"></hr>
                </div>
                <p>Insira seu e-mail para entrar ou se cadastrar:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button id='btn-entrar' className='btn-login' type='submit'>Entrar</button>
                </form>
            </div>            
        </>
    )
}

export default Login
