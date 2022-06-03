import Card from "../Card"

export default function List({ list, setList }) {

    if (!list || list.length === 0) {
        return ( 
            <>
            <br></br>
            <span>Cargando datos...</span>
            <br></br>
            <img alt="Loading" src="https://media.giphy.com/media/1USKMDPjuH4ovL7J5h/giphy.gif"></img>
            </>
        )
    }

    return (
        <>
            <div className="container">
                <div className="row row-cols-2 row-cols-md-4">
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