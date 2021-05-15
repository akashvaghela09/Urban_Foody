import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import styles from "../Style/Header.module.css";
import { Link, Redirect, useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    typoForLink: {
      cursor: "pointer",
      fontWeight: 600
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
  }));

const Header = () => {
    const classes = useStyles();
    const history = useHistory()

    return (
        <Grid container alignItems="center" className={styles.wrapper}>
            <Grid md={6} sm={6} xs={6} container jutify="flex-start" >
                <img onClick={() => history.push("/")} className={styles.banner} src="./images/ufbanner.png" alt="Urban Foody" />
            </Grid>
            <Grid md={6} sm={6} xs={6}  container justify="flex-end" >
                <Typography className={classes.typoForLink} variant="h5">
                    <Link 
                        underline="none" 
                        className={classes.link}
                        to="/admin"
                    >
                        Login
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export { Header }