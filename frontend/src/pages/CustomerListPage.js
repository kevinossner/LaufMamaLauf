import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const CustomerListPage = () => {
    let [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers()
    }, [])

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
        </div>
    )
}

export default CustomerListPage
