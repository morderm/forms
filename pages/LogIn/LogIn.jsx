import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import { useState } from 'react'
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',


        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    const [userPassword, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState();


    async function submitLogIn(e) {
        console.log(userPassword, email)
        e.preventDefault()
        try {
            await axios.put('http://localhost:3001/logged', {
                email: email, userPassword: userPassword
            })
                .then((res) => {
                    console.log('trying to log in')
                })
        } catch (error) {
            console.error(error);

        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>



                <TextField
                    id="standard-read-only-input"
                    label="Email"
                    placeholder="Email"
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}

                />
                <Button color="primary" onClick={(e) => submitLogIn(e)}
                >
                    Primary
                </Button>

            </div>

        </form >
    );
}
