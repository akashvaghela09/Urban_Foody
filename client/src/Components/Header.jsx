import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import styles from "../Style/Header.module.css";
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
    const isAuth = useSelector(state => state.app.isAuth)
    const count = useSelector(state => state.app.count)

    return (
        <Grid container alignItems="center" className={styles.wrapper}>
            <Grid md={6} sm={6} xs={12} container jutify="flex-start" >
                <img onClick={() => history.push("/")} className={styles.banner} src="./images/ufbanner.png" alt="Urban Foody" />
            </Grid>
            <Grid md={6} sm={6} xs={12}  container justify="flex-end" >
                {
                    !isAuth && 
                    <Typography className={classes.typoForLink} variant="h5">
                        <Link 
                            underline="none" 
                            className={classes.link}
                            to="/admin"
                        >
                            Login
                        </Link>
                    </Typography>
                }
                {
                    isAuth && 
                    <Grid container justify="flex-end" md={12} xs={12}>
                        <Typography variant="p" className={styles.menuItems} onClick={() => history.push("/chinese")}>Chinese</Typography>
                        <Typography variant="p" className={styles.menuItems} onClick={() => history.push("/pizza")}>Pizza</Typography>
                        <Typography variant="p" className={styles.menuItems} onClick={() => history.push("/explore")}>Explore</Typography>
                        <Grid className={styles.menuIconDiv}>
                            <ShoppingCartIcon className={styles.menuIcon}/>
                            <Box className={styles.countDiv}>
                                <Typography variant="p" className={styles.count}>{count}</Typography>
                            </Box>
                        </Grid>
                        <Grid className={styles.menuIconDiv}>
                            <AccountBoxIcon className={styles.menuIcon}/>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Grid>
    )
}

export { Header }