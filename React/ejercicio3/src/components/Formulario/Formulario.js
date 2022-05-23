import { useState } from "react";

export default function Formulario({handleAgenda}) {

    const baseContact = {
        name:"",
        surname:"",
        address:"",
        city:"",
        postCode:"",
        phoneNumber:""
    }

    const [contact, setContact] = useState(baseContact);   
    
    contact.id=Date.now();

    function handleInputs(event) {

        setContact((contact) => ({
            ...contact,
            [event.target.name]:event.target.value,
        }))

    }

    // function handleInputName(event){
    //     setContact({...contact, name:event.target.value})
    // }
    // function handleInputSurname(event){
    //     setContact({...contact, surname:event.target.value})
    // }
    // function handleInputAddress(event){
    //     setContact({...contact, address:event.target.value})
    // }
    // function handleInputCity(event){
    //     setContact({...contact, city:event.target.value})
    // }
    // function handleInputPostCode(event){
    //     setContact({...contact, postCode:event.target.value})
    // }
    // function handleInputPhoneNumber(event){
    //     setContact({...contact, phoneNumber:event.target.value})
    // }

    function handleSubmit(event){
        event.preventDefault();
        handleAgenda((agenda) =>[...agenda,contact])
        setContact(baseContact);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input name = "name" type="text"  value={contact.name} onChange={handleInputs} className="form-control" placeholder="Introduce Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputSurname">Surname</label>
                <input name="surname" type="text" value={contact.surname} onChange={handleInputs} className="form-control" placeholder="Introduce Surname"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input name="address" type="text" value={contact.address} onChange={handleInputs} className="form-control" placeholder="Introduce Address"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputCity">City</label>
                <input name="city" type="text" value={contact.city} onChange={handleInputs} className="form-control" placeholder="Introduce City"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPostCode">PostCode</label>
                <input name="postCode" type="text" value={contact.postCode} onChange={handleInputs} className="form-control" placeholder="Introduce PostCode"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input name="phoneNumber" type="text" value={contact.phoneNumber} onChange={handleInputs} className="form-control" placeholder="Introduce Phone Number"/>
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    )
}