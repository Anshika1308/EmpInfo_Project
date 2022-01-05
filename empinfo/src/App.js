//import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerContext from './contexts/CustomerContext';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <CustomerContext>
            <CustomerList />
          </CustomerContext>
        </div>
      </div>
    </div>

  );
}

export default App;