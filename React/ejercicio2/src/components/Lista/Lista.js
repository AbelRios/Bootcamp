export default function Lista({ productos, categoria }) {
    // Recibe dos objetos distintos, pero van dentro de la misma llave


    // return (
    //     <>
    //         <h1>{categoria}:</h1>
    //         {
    //             productos.map((item) => {
    //                 return (
    //                     <ul key={id}>
    //                         <li>{producto}</li>
    //                         <li>{marca}</li>
    //                         <li>{modelo}</li>
    //                         <li>{precio}</li>
    //                     </ul>
    //                 )
    //             })
    //         }
    //     </>
    // )


    // Opción desestructurada
    // return (
    //     <>
    //         <h1>{categoria}:</h1>
    //         {
    //             productos.map(({ id, producto, marca, modelo, precio }) => {
    //                 return (
    //                     <ul key={id}>
    //                         <li>{producto}</li>
    //                         <li>{marca}</li>
    //                         <li>{modelo}</li>
    //                         <li>{precio}</li>
    //                     </ul>
    //                 )
    //             })
    //         }
    //     </>
    // )

    //Opción con lógica en el map
    // return (
    //     <>
    //         <h1>{categoria}:</h1>
    //         {
    //             productos.map(({ id, producto, marca, modelo, precio }) => {
    //                 if (!modelo) {
    //                     return (
    //                         <ul key={id}>
    //                             <li>{producto}</li>
    //                             <li>{marca}</li>
    //                             <li>{precio}</li>
    //                         </ul>
    //                     )
    //                 } else {
    //                     return (
    //                         <ul key={id}>
    //                             <li>{producto}</li>
    //                             <li>{marca}</li>
    //                             <li>{modelo}</li>
    //                             <li>{precio}</li>
    //                         </ul>
    //                     )
    //                 }
    //             })
    //         }
    //     </>
    // )

    // Opción con lógica en el map y refactorizada
        return (
        <>
            <h1>{categoria}:</h1>
            {
                productos.map(({ id, producto, marca, modelo, precio }) => {
                    return (
                        <ul key={id}>
                            <li>{producto}</li>
                            <li>{marca}</li>
                            <li>{precio}</li>
                            {modelo && <li>{modelo}</li>}  
                        </ul>
                    ) // En línea 83 hacemos una especie de "if" modelo existe, lo muestro, si no existe no lo muestro
                      // {modelo ? <li>{modelo}</li> : <></> de forma "ternaria"
                })
            }
        </>
    )
}