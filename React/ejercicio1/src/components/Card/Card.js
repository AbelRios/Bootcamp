export default function Card({tarjeta}) {

    return(
        <div className="card" style={{ width: '18rem' }}>
        <img src={tarjeta.img} className="card-img-top" alt="imagen"></img>
          <div className="card-body">
            <h5 className="card-title">{tarjeta.titulo}</h5>
            <p className="card-text">{tarjeta.texto}</p>
            <a href={tarjeta.enlace} className="btn btn-primary">{tarjeta.textoBoton}</a>
          </div>
      </div>
    )

}