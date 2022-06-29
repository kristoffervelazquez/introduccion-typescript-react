
import useUsuarios from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';


const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();



    const renderItem = ({ id, first_name, last_name, avatar, email }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <th> <img src={avatar} alt={first_name} style={{ width: 40, borderRadius: 100 }} /> </th>
                <th>{first_name} {last_name}</th>
                <th>{email}</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios: </h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>

            <button className='btn btn-primary' onClick={paginaAnterior}>Anterior</button>
            <button className='btn btn-primary' onClick={paginaSiguiente}>Siguiente</button>

        </>
    )
}

export default Usuarios