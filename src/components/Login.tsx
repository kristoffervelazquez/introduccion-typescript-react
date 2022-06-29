import { useEffect, useReducer } from "react"


interface AuthState {
    validando: boolean;
    token: null | string;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username: string;
    nombre: string;
}


type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {

        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        case "login":
            const { nombre, username } = action.payload;
            return {
                validando: false,
                username: username,
                nombre: nombre,
                token: '1231233',
            }
        default:
            return state;
    }

}


const Login = () => {

    const [{ validando, token, username }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "logout" })
        }, 1500);

    }, []);


    const login = () => {
        dispatch({ type: "login", payload: { username: 'krissking', nombre: 'Kristoffer' } })
    }

    const logout = () => {
        dispatch({ type: "logout" })
    }


    if (validando) {
        return (
            <>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                token ?
                    <div className="alert alert-success">Autenitcado como: {username} </div>
                    :
                    <div className="alert alert-danger">No autenitcado</div>
            }



            {
                token ?
                    <button onClick={logout} className="btn btn-danger">Logout</button>
                    :
                    <button onClick={login} className="btn btn-primary">Login</button>
            }



        </>
    )
}

export default Login