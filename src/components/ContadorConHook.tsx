import useCounter from '../hooks/useCounter';

const ContadorConHook = () => {

    const { contador, acumular } = useCounter(100);

    return (
        <>
            <h3>Contador <small>{contador}</small></h3>



            <button disabled={contador <= 0 ? true : false} onClick={() => { acumular(-1) }} className='btn btn-primary'>-1</button>
            &nbsp;

            <button onClick={() => { acumular(1) }} className='btn btn-primary'>+1</button>



        </>
    )
}

export default ContadorConHook