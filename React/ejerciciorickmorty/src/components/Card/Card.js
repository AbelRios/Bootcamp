export default function Card({ character, list, setList }) {

    function handleDelete(id) {
        setList(list.filter((item) => item.id !== id));
    }

    return (
        <div className="col mb-5">
            <div className="card" style={{ width: '18rem' }}>
                <img src={character.image} className="card-img-top" alt="imagen"></img>
                <div className="card-body">
                    <h5 className="card-title text-dark">{character.name}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: {character.id}</li>
                        <li class="list-group-item">Especie: {character.species}</li>
                        <li class="list-group-item">Estado: {character.status}</li>
                    </ul>
                    <div className="row">
                    <button className="btn btn-primary">Detalles</button>
                    <button className="btn btn-danger mt-2" onClick={() => handleDelete(character.id)}>Eliminar Personaje</button>
                    </div>
                </div>
            </div>
        </div>
    )
}