import { Form, Button } from "react-bootstrap"

import {CustomerContext} from "../contexts/CustomerContext";


import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addCustomer} = useContext(CustomerContext);

    const [newCustomer, setNewCustomer] = useState({
        customerID:"",customerName:"", address:"", country:""
    });

    const onInputChange = (e) => {
        setNewCustomer({...newCustomer,[e.target.customerID]: e.target.value})
    }

    const {customerID, customerName, address, country} = newCustomer;

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustomer(customerID, customerName, address, country);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ID"
                    name="customerID"
                    value={customerID}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name *"
                    name="name"
                    value={customerName}
                    onChange = { (e) => onInputChange(e)}
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
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="country"
                    name="country"
                    value={country}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Customer
            </Button>
        </Form>

     )
}

export default AddForm;