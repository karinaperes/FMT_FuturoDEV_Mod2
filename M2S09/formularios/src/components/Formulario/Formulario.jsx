import { useForm } from 'react-hook-form'
import '../Formulario/Formulario.css'

function Formulario() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-div flex-column'>
                        <label htmlFor="name">Nome</label>
                        <input
                            className='input-area'
                            id="name"
                            type="text"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p>O nome é obrigatório.</p>}
                    </div>

                    <div className='form-div flex-column'>
                        <label htmlFor="email">E-mail</label>
                        <input
                            className='input-area'
                            id="email"
                            type="text"
                            {...register('email', {
                                required: 'O e-mail é obrigatório.',
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: 'E-mail inválido.'
                                }
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className='form-div flex-column'>
                        <label htmlFor="password">Senha</label>
                        <input
                            className='input-area'
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'A senha é obrigatória',
                                minLength: {
                                    value: 6,
                                    message: 'A senha deve ter pelo menos 6 caracteres.'
                                }
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <button className='btn' type="submit">Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default Formulario
