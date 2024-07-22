import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();  

    function handleSubmit(e) {
        if (email === 'admin@admin.com' && senha === 'admin123') {
            // redireciona para algum lugar
            navigate('/home')
        }

        alert('Email e/ou senha incorretos')
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="password" />
                <button>Entrar</button>
            </form>
        </>
    )
}

export default Login
