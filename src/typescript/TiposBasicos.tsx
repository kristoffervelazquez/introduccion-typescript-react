

const TiposBasicos = () => {

    let nombre: string = 'Kristoffer';
    const edad: number = 20;
    const activo: boolean = true;
    const poderes: string[] = []; //'Velocidad', 'Volar', 'Invisibilidad'



    return (
        <>
            <h3>Tipos básicos </h3>
            {nombre}, {edad}, {activo ? 'activo' : 'no activo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}

export default TiposBasicos