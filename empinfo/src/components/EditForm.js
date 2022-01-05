import { Form, Button } from "react-bootstrap"

import {CustomerContext} from "../contexts/CustomerContext";
import {useContext, useState} from 'react';

const EditForm = ({theCust}) =>{

   // const id = theCust.id;

    const [customerID, setcustomerID] = useState(theCust.customerID);
    const [customerName, setcustomerName] = useState(theCust.customerName);
    const [address, setaddress] = useState(theCust.address);
    const [country, setcountry] = useState(theCust.country);


    const {updateCustomer} = useContext(CustomerContext);

    const updatedCustomer = {customerID, customerName, address, country}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCustomer(customerID, updatedCustomer)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ID"
                    name="customerID"
                    value={customerID}
                     onChange = { (e) => setcustomerID(e.target.value)}
                     required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="customerName"
                    placeholder="name*"
                    name="name"
                    value={customerName}
                     onChange = { (e) => setcustomerName(e.target.value)}
                     required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => setaddress(e.target.value)}
                />
            </Form.Group>
            
              <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="country"
                    name="country"
                    value={country}
                     onChange = { (e) => setcountry(e.target.value)}
                />
                
                
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Customer
            </Button>
        </Form>

     )
}


export default EditForm;