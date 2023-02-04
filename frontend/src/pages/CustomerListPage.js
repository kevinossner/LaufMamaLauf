import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const CustomerListPage = () => {
    let [customers, setCustomers] = useState([])
    let [time, setTime] = useState(Date.now());

    useEffect(() => {
        getCustomers()
    }, [time])


    useEffect(() => {
      let interval = setInterval(() => setTime(Date.now()), 5*1000);
      return () => {
        clearInterval(interval);
      };
    }, []);

    let getCustomers = async () => {
        let response = await fetch('/api/customer/')
        let data = await response.json()
        setCustomers(data)
    }

    return (
        <div className='customers'>
            <div className='customers-header'>
                <h2 className='customers-title'>&#9782; Mamas</h2>
                <p className='customers-count'>{customers.length}</p>
            </div>
            <div className='customer-list'>
                {customers.map((customer, index) => (
                    <ListItem key={index} customer={customer} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default CustomerListPage
