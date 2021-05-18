import React from 'react';
import { Box, Drawer, Grid, List, makeStyles, Typography } from '@material-ui/core';
import styles from "../Style/Header.module.css";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Cart } from './Cart';

const useStyles = makeStyles(() => ({
    drawerWrapper: {
        width: "380px",
        zIndex: "200",
        margin: "0px",
        padding: "0px",
        background: "#ced6e0"
    }
  }));

const Header = () => {
    const classes = useStyles();
    const history = useHistory()
    const isAuth = useSelector(state => state.app.isAuth)
    const count = useSelector(state => state.app.count)
    const [drawerState, setDrawerState] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerState(!drawerState);
      };

    const goToCart = () => {
        setDrawerState(!drawerState);

        if(isAuth === true){
            history.push("/checkout")
        } else {
            history.push("/login")
        }
    }
    return (
        <Grid container alignItems="center" className={styles.wrapper}>
            {
          <Drawer justify="space-between" anchor="right" open={drawerState} onClose={toggleDrawer}  >
            <List className={classes.drawerWrapper}>
            <Grid container >
                <p className={styles.cartStrip} variant="p">Your Cart</p>
                <Cart />
            </Grid>
            </List>
                <p className={styles.cartStrip} style={{cursor: "pointer"}} onClick={goToCart}>Checkout</p>
          </Drawer>
        }
            <Grid md={6} sm={6} xs={12} container jutify="flex-start" >
                <img onClick={() => history.push("/")} className={styles.banner} src="./images/ufbanner.png" alt="Urban Foody" />
            </Grid>
            <Grid md={6} sm={6} xs={12}  container justify="flex-end" className={styles.secondGrid}>
                <Typography variant="p" className={styles.menuItems} onClick={() => history.push("/chinese")}>Chinese</Typography>
                <Typography variant="p" className={styles.menuItems} onClick={() => history.push("/pizza")}>Pizza</Typography>
                <Typography variant="p" className={styles.menuItems} onClick={() => history.push("/explore")}>Explore</Typography>
                <Grid className={styles.menuIconDiv}>
                    <ShoppingCartIcon onClick={toggleDrawer} className={styles.menuIcon}/>
                    <Box className={styles.countDiv}>
                        <Typography variant="p" className={styles.count}>{count}</Typography>
                    </Box>
                </Grid>
                {
                    !isAuth && 
                    <Typography variant="p" className={styles.menuItems} onClick={() => history.push("/login")}>
                        Login
                    </Typography>
                }
                {
                    isAuth && 
                    <Grid className={styles.menuIconDiv}>
                        <AccountBoxIcon onClick={() => history.push("/user")} className={styles.menuIcon}/>
                    </Grid>
                }
            </Grid>
        </Grid>
    )
}

export { Header }