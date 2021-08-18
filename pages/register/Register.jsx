import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import { useState } from 'react'
const axios = require('axios');

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//       display: 'flex',


//     },
//   },
// }));

// export default function FormPropsTextFields() {
//   const classes = useStyles();
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [body, setBody] = useState([]);


//   function submitLogIn() {
//     axios.post('localhost:3001/create', {
//     })
//       .then((response) => {
//         console.log('sdfsdf')
//       })
//   }

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           required id="standard-required"
//           label="User Name"
//           placeholder="User Name"
//           onChange={(e) => setUserName(e.target.value)}
//         />

//         <TextField
//           id="standard-password-input"
//           label="Password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}

//         />

//         <TextField
//           id="standard-read-only-input"
//           label="Email"
//           placeholder="Email"
//           type='email'
//           onChange={(e) => setEmail(e.target.value)}

//         />
//         <Button color="primary" onClick={submitLogIn}
//         >
//           Primary
//         </Button>

//       </div>

//     </form >
//   );
// }




function Login() {
  const [data, setData] = useState()
  const [email, setEmail] = useState()
  const [userPassword, setPassword] = useState()
  const [userName, setUserName] = useState()



  async function handlesubmit(e) {
    e.preventDefault()
    try {

      await axios.post('http://localhost:3001/create', { email: email, userPassword: userPassword, userName: userName })
        .then(res => {
          console.log('it works!')

        })
    } catch (error) {
      console.error(error);

    }

  }
  return <div className="form-container sign-in-container">
    <form>
      <h1>Sign in</h1>
      {/* <SocialButtons /> */}
      <span>or use your account</span>
      <input onChange={async e => setEmail(e.target.value)} name="email" type="email" placeholder="Email" />
      <input onChange={async e => await setUserName(e.target.value)} value={userName} name="userName" type="text" placeholder="userName" />
      <input onChange={e => setPassword(e.target.value)} value={userPassword} name="password" type="password" placeholder="Password" />
      <p>Forgot your password?</p>
      <button onClick={(e) => handlesubmit(e)}>Sign In</button>
    </form>
  </div>
}
export default Login