import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";

const CreateCustomerPage = () => {

    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')

    let handleCreateButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
            }),
          };
          fetch('/api/customer/new/', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

  return (
    <div>
        <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                <FormControl>
                    <TextField
                    required={true}
                    label='Vorname'
                    onChange={(e) => setFirstName(e.target.value)}
                    inputProps={{
                        min: 1,
                        style: { textAlign: "center" },
                    }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} align='center'>
                <FormControl>
                    <TextField
                    required={true}
                    label='Nachname'
                    onChange={(e) => setLastName(e.target.value)}
                    inputProps={{
                        min: 1,
                        style: { textAlign: "center" },
                    }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} align='center'>
                <Button
                    variant='contained' onClick={handleCreateButtonPressed}
                    to='/' component={Link}
                >
                    Create
                </Button>
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

export default CreateCustomerPage
