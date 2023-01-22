import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const CustomerListPage = () => {

    let [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers()
    }, [])

    let getCustomers = async () => {
        let response = await fetch('/api/customer')
        let data = await response.json()
        console.log(data)
        setCustomers(data)
    }

    return (
        <div>
            <div>
                {customers.map((customer, index) => (
                    <ListItem key={index} customer={customer} />
                ))}
            </div>
        </div>
    )
}

export default CustomerListPage
