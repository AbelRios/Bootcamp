export default function Lista({ productos , categoria }) {
// Recibe dos objetos distintos, pero van dentro de la misma llave


    return (
        <>
            <h1>{categoria}:</h1>
            {
                productos.map((item) => {
                    return (
                        <ul key={item.id}>
                            <li>{item.id}</li>
                            <li>{item.producto}</li>
                            <li>{item.marca}</li>
                            <li>{item.modelo}</li>
                            <li>{item.precio}</li>
                        </ul>
                    )
                })
            }
        </>
    )
}