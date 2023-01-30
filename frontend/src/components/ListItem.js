import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({customer}) => {
  return (
    <Link to={`/customer/${customer.id}/`}>
      <div className='customers-list-item'>
          <p>{customer.first_name} {customer.last_name}</p>
      </div>
    </Link>
  )
}

export default ListItem
