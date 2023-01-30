import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CustomerPage = () => {

  let id = useParams().id
  let [customer, setCustomer] = useState(null)

  useEffect(() => {
    getCustomer()
  }, [id])

  let getCustomer = async () => {
    let response = await fetch(`/api/customer/${id}/`)
    let data = await response.json()
    setCustomer(data)
  }

  return (
    <div>
        <h1>{customer?.first_name} {customer?.last_name}</h1>
        <p>{customer?.created_at}</p>
    </div>
  )
}

export default CustomerPage
