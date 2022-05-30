import Card from "../Card"

export default function List({ list, setList }) {

    if (!list) {
        return ("Cargando Lista de Personajes...")
    }

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-20">
                    {
                        list.map((character, index) => {
                            return (
                                <div key={index}>
                                    <Card list={list} character={character} setList={setList} />
                                </div>
                            )
                        }
                        )}
                </div>
            </div>
        </>
    )

}