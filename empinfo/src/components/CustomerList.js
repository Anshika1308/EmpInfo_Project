import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {CustomerContext} from '../contexts/CustomerContext';
import Customer from './Customer';
import AddForm from './AddForm';

//import Pagination from './Pagination';

const CustomerList = () => {

   const {customer} = useContext(CustomerContext);

   const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
   // const handleShowAlert = () =>setShowAlert(true);

    //  const [currentPage, setCurrentPage] = useState(1);
    //  const [customerPerPage] = useState(2)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [customer])
  

    //   const indexOfLastCustomer = currentPage * customerPerPage;
    //   const indexOfFirstCustomer = indexOfLastCustomer - customerPerPage;
    //   const currentCustomer = sortedCustomer.slice(indexOfFirstCustomer, indexOfLastCustomer);
    //   const totalPagesNum = Math.ceil(sortedCustomer.length / customerPerPage);

    

    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Customer</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Customer</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Customer List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>CustomerID</th>
                <th>CustomerName</th>
                <th>Address</th>
                <th>Country</th>
              
            </tr>
        </thead>
        <tbody>

                {
                 customer.map(customer => (
                      <tr key={customer.customerID}>
                        <Customer customer={customer} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

      {/* <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees ={currentCustomer}
                sortedEmployees = {sortedCustomer} />   */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Customer
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
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

export default CustomerList;