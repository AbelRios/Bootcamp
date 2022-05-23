export default function Formulario() {

    return (
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="email" className="form-control" placeholder="Introduce Name"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Surname</label>
                <input type="surname" className="form-control" placeholder="Introduce Surname"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Address</label>
                <input type="address" className="form-control" placeholder="Introduce Address"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">City</label>
                <input type="city" className="form-control" placeholder="Introduce City"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">PostCode</label>
                <input type="postcode" className="form-control" placeholder="Introduce PostCode"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input type="phonenumber" className="form-control" placeholder="Introduce Phone Number"/>
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    )
}