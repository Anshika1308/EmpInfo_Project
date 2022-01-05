import {useContext, useState, useEffect} from 'react';
import {CustomerContext} from '../contexts/CustomerContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Customer = ({customer}) => {

    const {deleteCustomer} = useContext(CustomerContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [customer])

    return (
        <>
            <td>{customer.customerID}</td>
            <td>{customer.customerName}</td>
            <td>{customer.address}</td>
            <td>{customer.country}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                         Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteCustomer(customer.customerID)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons"><HighlightOffIcon/></i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit customer
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theCust={customer} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Customer;