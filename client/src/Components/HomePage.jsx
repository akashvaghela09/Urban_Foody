import React from 'react';
import { Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import styles from "../Style/HomePage.module.css";
import { SearchBar } from './SearchBar';
const useStyles = makeStyles(() => ({
    searchGrid: {
        // backgroundImage: 'url(' + bgImage + ')'
    }
  }));


const HomePage = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <SearchBar />
            <Grid className={styles.catDiv} container justify="center" alignContent="center">
                <Grid className={styles.catCard}>
                    <img className={styles.catCardImg} src="./images/pizza.jpg" alt="Pizza" />
                    <Typography className={styles.cardName} variant="h5">Order Pizza</Typography>
                </Grid>
                <Grid className={styles.catCard}>
                    <img className={styles.catCardImg} src="./images/chinese.jpg" alt="Chineze" />
                    <Typography className={styles.cardName} variant="h5">Order Chinese</Typography>
                </Grid>
                <Grid className={styles.catCard}>
                    <img className={styles.catCardImg} src="./images/explore.png" alt="Explore" />
                    <Typography className={styles.cardName} variant="h5">Explore</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export { HomePage }