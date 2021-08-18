import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

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

export default function Questions() {
    const classes = useStyles();
    const [questionName, setQuestionName] = useState('');
    const [questionDescription, setQuestionDescription] = useState('');
    const [questionRequire, setChecked] = React.useState(false);
    const [questionScore, setQuestionScore] = useState('');
    const [questions, setQuestion] = useState([]);


    async function createForm(e) {
        // e.preventDefault()
        console.log(questionName, questionDescription, questionRequire, questionScore)
        try {
            await axios.post('http://localhost:3001/questionCreate', {
                questionName, questionDescription, questionRequire, questionScore
            })
                .then((res) => {
                    console.log('trying to log in')
                })
        } catch (error) {
            console.error(error);

        }
    }
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <div className='questionCreateDiv'>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            placeholder='Quetion Name'
                            variant="filled"
                            onChange={(e) => setQuestionName(e.target.value)}

                        />
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            placeholder='question Description'
                            onChange={(e) => setQuestionDescription(e.target.value)}

                            variant="filled"
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            placeholder='question score'
                            onChange={(e) => setQuestionScore(e.target.value)}
                            variant="filled"
                        />

                        <Checkbox
                            checked={questionRequire}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />

                        <Button variant="contained" color="primary" onClick={(e) => createForm(e)}>
                            Primary
                        </Button>

                    </div>


                </form >
            </div>

        </>
    );
}