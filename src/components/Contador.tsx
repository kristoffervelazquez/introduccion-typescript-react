import { useState } from "react"


const Contador = () => {

    const [contador, setContador] = useState<number>(0);

    const acumular = (numero: number) => {
        setContador(contador + numero);
    }


    return (
        <>
            <h3>Contador <small>{contador}</small></h3>



            <button disabled={contador <= 0 ? true : false} onClick={() => { acumular(-1) }} className='btn btn-primary'>-1</button>
            &nbsp;

            <button onClick={() => { acumular(1) }} className='btn btn-primary'>+1</button>



        </>
    )
}

export default Contador