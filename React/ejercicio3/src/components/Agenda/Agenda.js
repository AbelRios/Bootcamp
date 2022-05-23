export default function Agenda({ contacts, handleDelete }) {

    function handleBoton(id){
        handleDelete(contacts.filter((item) => item.id !== id));
    }

    return (
        <>
            { 
                contacts.map(({id, name, surname, address, city, postCode, phoneNumber },index) => {
                    // el map acepta un parámetro index (o i o como lo quieras llamar) que guarda el valor de
                    // la iteración en la que se encuentra
                    return (
                        <div className="card" key={index+1} style={{ width: '18rem' }}>
                            <div className="card-header" style={{background: '#00AA9E'}}>Contacto {index+1}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{name}</li>
                                <li className="list-group-item">{surname}</li>
                                <li className="list-group-item">{address}</li>
                                <li className="list-group-item">{city}</li>
                                <li className="list-group-item">{postCode}</li>
                                <li className="list-group-item">{phoneNumber}</li>
                                <button type="button" onClick={()=>handleBoton(id)} className="btn btn-danger">Eliminar</button>
                            </ul>
                        </div>
                    )
                })  
            }
        </>
    )
}