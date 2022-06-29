import useForm from "../hooks/useForm"


const Formularios = () => {

    const { formulario, onChange  } = useForm({ email: 'correo@correo.com', password: '12345678' });


    return (
        <>
            <h3>Formularios</h3>
            <input type="text" className="form-control" placeholder="email" value={formulario.email} onChange={({ target }) => onChange(target.value, 'email')} />
            <input type="password" className="form-control mt-2 mb-2" placeholder="password" value={formulario.password} onChange={({ target }) => onChange(target.value, 'password')} />


            <code>
                <pre>
                    {JSON.stringify(formulario, null, 3)}
                </pre>
            </code>
        </>
    )
}

export default Formularios