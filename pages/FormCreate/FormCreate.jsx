import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import Questions from '../questions/Questions'

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    const [formTitle, setTitle] = useState('');
    const [formDescription, setDescription] = useState('');
    const [formDeadLine, setDeadLine] = useState('');
    const [formType, setFormType] = useState('');
    const [count, setCounter] = useState([]);
    const [questions, setQuestion] = useState([]);


    const Question = () => <div><Questions /> </div>
    // async function addQuestion() {
    //     e.preventDefault()
    //     <Questions />
    // }

    async function createForm(e) {
        e.preventDefault()
        console.log(formTitle, formDescription, formDeadLine)
        try {
            await axios.post(`http://localhost:3001/createForm`, {
                formTitle, formDescription, formDeadLine
            })
                .then((res) => {
                    console.log('trying to log in')
                })
        } catch (error) {
            console.error(error);

        }
    }


    return (
        <>
            <div className='fromCreateDiv'>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            placeholder='Title'
                            variant="filled"
                            onChange={(e) => setTitle(e.target.value)}

                        />
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            placeholder='Description'
                            onChange={(e) => setDescription(e.target.value)}

                            variant="filled"
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            placeholder='Dead Line'
                            onChange={(e) => setDeadLine(e.target.value)}
                            variant="filled"
                        />
                        {/* <select
                    onSelect={(e) => setFormType(e.target.value)}
                >
                    <option value="0">Select the form's type:</option>
                    <option value="exam">Exam</option>
                    <option value="suervey">Survey</option>
                </select> */}

                        <Button variant="contained" color="primary" onClick={(e) => {
                            return createForm(e)
                        }}>
                            Primary
                        </Button>



                    </div>


                </form >
            </div>
            <div className='addQuestionDiv'>
                {[...Array(count)].map((_, i) => <div> <Question key={i} />
                    <Button variant="contained" color="primary" onClick={(e) => setCounter(count - 1)} key={i} >
                        Remove Question
                    </Button>
                </div>
                )}

                <Button variant="contained" color="primary" onClick={(e) => setCounter(count + 1)
                }>
                    Add Question
                </Button>
            </div>
            <div className='questionsDiv'>

            </div>

        </>
    );
}
