import React from 'react'

const ListItem = ({customer}) => {
  return (
    <div>
        <h3>{customer.first_name} {customer.last_name}</h3>
        <p>{customer.created_at}</p>
    </div>
  )
}

export default ListItem
