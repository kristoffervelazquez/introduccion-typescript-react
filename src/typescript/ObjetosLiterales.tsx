

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Kristoffer',
        edad: 20,
        direccion: {
            pais: 'Canada', 
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 4)}
                </pre>
            </code>
        </>
    )
}

export default ObjetosLiterales