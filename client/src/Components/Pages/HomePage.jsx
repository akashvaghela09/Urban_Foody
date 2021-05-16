import React from 'react';
import { Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import styles from "../../Style/HomePage.module.css";
import { SearchBar } from '../SearchBar';
import { useHistory } from 'react-router';
const useStyles = makeStyles(() => ({
    searchGrid: {
    }
  }));


const HomePage = () => {
    const classes = useStyles();
    const history = useHistory()
    return (
        <Grid container>
            <SearchBar />
            <Grid className={styles.catDiv} container justify="center" alignContent="center">
                <Grid onClick={() => history.push("/pizza")} className={styles.catCard}>
                    <img className={styles.catCardImg} src="./images/pizza.jpg" alt="Pizza" />
                    <Typography className={styles.cardName} variant="h5">Order Pizza</Typography>
                </Grid>
                <Grid onClick={() => history.push("/chinese")} className={styles.catCard}>
                    <img className={styles.catCardImg} src="./images/chinese.jpg" alt="Chineze" />
                    <Typography className={styles.cardName} variant="h5">Order Chinese</Typography>
                </Grid>
                <Grid onClick={() => history.push("/explore")} className={styles.catCard}>
                    <img className={styles.catCardImg} src="./images/explore.png" alt="Explore" />
                    <Typography className={styles.cardName} variant="h5">Explore</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export { HomePage }