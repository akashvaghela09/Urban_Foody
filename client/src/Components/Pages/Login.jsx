import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import styles from "../../Style/Form.module.css";
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { saveData } from "../../Utils/localStorage";
import { setLogin } from '../../Redux/app/action';
import { GoogleLogin } from 'react-google-login';

const useStyles = makeStyles((theme) => ({
    secondBtn: {
      backgroundColor: "#43A047",
      color: "white",
      "&:hover": {
          backgroundColor: "#388E3C"
      },
      marginTop: "10px"
    }
}));

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.app.isAuth)
    const classes = useStyles();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        dispatch(setLogin(true))
        saveData("name", name)
        saveData("email", email)
        saveData("password", password)
        alert(" User Registered")

        redirectToHomePage()
    }

    const responseGoogle = (response) => {
        console.log(response);
     }
    
    if(isAuth === true){
        return <Redirect to="/"/>
    }

    const redirectToHomePage = () => {
        setTimeout(() => {
            history.push("/");
        }, 1000);
    }

    return (
        <Grid container md={12} justify="center" className={styles.regWrapper}>
        
            <Grid className={styles.loginCard} container align="center" direction="column" md={12} sm={5} xs={9}>
                <TextField 
                    id="outlined-primary" 
                    variant="outlined" 
                    required={true} 
                    label="Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Grid className={styles.space}/>
                <TextField 
                    id="outlined-primary" 
                    variant="outlined" 
                    required={true} 
                    label="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Grid className={styles.space}/>
                <TextField 
                    type="password"
                    id="outlined-primary" 
                    variant="outlined" 
                    required={true} 
                    label="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <Grid className={styles.space}/>

                <Button variant="contained" color="primary" onClick={handleClick}>Register</Button>

                <Box className={styles.divider}/>
                <GoogleLogin
                    clientId="464963228728-nhd80prb8hde1qg369mutsherv3rh250.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <Typography >
                Already have an account ?
                </Typography>
                <Button className={classes.secondBtn} variant="contained" color="primary" onClick={() => {history.push("/login")}}>Login</Button>
            </Grid>
        
        </Grid >
    )
}

export {Login}