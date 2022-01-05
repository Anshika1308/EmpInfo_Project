import {createContext, useEffect, useState} from 'react';

export const CustomerContext = createContext()

const CustomerContextProvider  = (props) => {

    const [customer, setCustomer] = useState([
        {"customerID": 1, "customerName": "Roland Mendel",  "address": "C/ Moralzarzal, 86", "country": "England" },
        {"customerID": 2, "customerName": "Peter Franken",  "address": "Berliner Platz 43", "country": "France"},
        {"customerID": 3, "customerName": "Lino Rodriguez", "address": "Maubelstr. 90",  "country": "Germany" },
        {"customerID": 4, "customerName": "John Steel",   "address": "Ave. 5 de Mayo Porlamar", "country": "Poland"},
        {"customerID": 5, "customerName": "Fran Wilson",   "address": "Rue Joseph-Bens 532", "country": "Wales" },
        { "customerID": 6, "customerName": "Rene Phillips", "address": "265, boulevard Charonne", "country": "France"},
        { "customerID": 7, "customerName": "Juan",      "address": "Calle Dr. Jorge Cash 321",  "country": "USA" },
        { "customerID": 8, "customerName": "Georg Pipps", "address": "Estrada da saúde n. 58", "country": "Portugal"},
        {"customerID": 9,  "customerName": "Lúcia Carvalho", "address": "Alameda dos Canàrios, 891",  "country": "Brazil" },
        {"customerID": 10, "customerName": "Horst Kloss",  "address": "2817 Milton Dr", "country": "Austria"}
])

 useEffect(()=> {
     setCustomer(JSON.parse(localStorage.getItem('customer')))
 },[])

 useEffect(() => {
     localStorage.setItem('customer', JSON.stringify(customer));
 })



//const sortedCustomer = customer.sort((a,b)=>(a.customerName < b.customerName ? -1 : 1));



const addCustomer = (customerID, customerName, address, country) => {
    setCustomer([...customer , {customerID, customerName, address, country}])
}

const deleteCustomer = (customerID) => {
    setCustomer(customer.filter(customer => customer.customerID !== customerID))
}

const updateCustomer = (customerID, updatedCustomer) => {
    setCustomer(customer.map((customer) => customer.customerID === customerID ? updatedCustomer : customer))
}

    return (
        <CustomerContext.Provider value={{customer, addCustomer, deleteCustomer, updateCustomer}}>
            {props.children}
        </CustomerContext.Provider>
    )
}

export default CustomerContextProvider;