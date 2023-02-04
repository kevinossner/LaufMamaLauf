import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const CustomerPage = () => {

  let id = useParams().id
  let [customer, setCustomer] = useState(null)

  useEffect(() => {
    let getCustomer = async () => {
      let response = await fetch(`/api/customer/${id}/`)
      let data = await response.json()
      setCustomer(data)
    }
    getCustomer();
  }, [id])

  return (
    <div>
      <Grid container spacing={1}>
          <Grid item xs={12} align='center'>
            <h1>{customer?.first_name} {customer?.last_name}</h1>
          </Grid>
          <Grid item xs={12} align='center'>
            <p>{customer?.created_at}</p>
          </Grid>
          <Grid item xs={12} align='center'>
              <Button variant='contained' to='/' component={Link}>
                  Back
              </Button>
          </Grid>
      </Grid>
    </div>
  )
}

export default CustomerPage
