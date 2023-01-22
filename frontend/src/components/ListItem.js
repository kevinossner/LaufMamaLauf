import React from 'react'

const ListItem = ({customer}) => {
  return (
    <div className='customers-list-item'>
        <p>{customer.first_name} {customer.last_name}</p>
    </div>
  )
}

export default ListItem
