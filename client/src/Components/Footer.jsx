import React from 'react';
import styles from '../Style/Footer.module.css'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(() => ({
    box: {
      padding: "25px"
    }
  }));
  
const Footer = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center" className={styles.wrapper}>
            <img className={styles.blackLogo} src="./images/blacklogo.png" alt="Urban Foody"/>
            <Grid container justify="center" >
                <Grid className={classes.box} alignContent="center" container direction="column" md={2} sm={6} xs={12} alignItems="flex-start">
                    <Typography variant="h5">COMPANY</Typography>
                    <Typography className={styles.footerText}>Who we are</Typography>
                    <Typography className={styles.footerText}>Blog</Typography>
                    <Typography className={styles.footerText}>Careers</Typography>
                    <Typography className={styles.footerText}>Report Fraud</Typography>
                    <Typography className={styles.footerText}>Contact</Typography>
                </Grid>
                <Grid className={classes.box} alignContent="center" container direction="column" md={2} sm={6} xs={12} alignItems="flex-start">
                    <Typography variant="h5">FOR FOODIES</Typography>
                    <Typography className={styles.footerText}>Code of Conduct</Typography>
                    <Typography className={styles.footerText}>Community</Typography>
                    <Typography className={styles.footerText}>Blogger Help</Typography>
                    <Typography className={styles.footerText}>Report Fraud</Typography>
                    <Typography className={styles.footerText}>Mobile Apps</Typography>
                </Grid>
                <Grid className={classes.box} alignContent="center" container direction="column" md={3} sm={6} xs={12} alignItems="flex-start">
                    <Typography variant="h5">FOR RESTAURANTS</Typography>
                    <Typography className={styles.footerText}>Add Restaurant</Typography>
                    <Typography className={styles.footerText}>Claim your Listing</Typography>
                    <Typography className={styles.footerText}>Bussiness App</Typography>
                    <Typography className={styles.footerText}>Restaurant Widgets</Typography>
                    <Typography className={styles.footerText}>Products for Business</Typography>
                </Grid>
                <Grid className={classes.box} alignContent="center" container direction="column" md={2} sm={6} xs={12} alignItems="flex-start">
                    <Typography variant="h5">For You</Typography>
                    <Typography className={styles.footerText}>Privacy</Typography>
                    <Typography className={styles.footerText}>Terms</Typography>
                    <Typography className={styles.footerText}>Security</Typography>
                    <Typography className={styles.footerText}>Sitemap</Typography>
                </Grid>
                <Grid className={classes.box} alignContent="center" container direction="column" md={2} sm={6} xs={12} alignItems="flex-start">
                    <Typography variant="h5">Social Links</Typography>
                    <Grid>
                        <FacebookIcon fontSize="large" className={styles.socialLink}/>
                        <TwitterIcon fontSize="large" className={styles.socialLink}/>
                        <InstagramIcon fontSize="large" className={styles.socialLink}/>
                    </Grid>
                    <img className={styles.appLink} src="./images/play.png" alt="play"/>
                    <img className={styles.appLink} src="./images/app.png" alt="App"/>
                </Grid>
            </Grid>
            <Typography className={styles.declaration}>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2021 © Urban Foody™ Ltd. All rights reserved.
            </Typography>
        </Grid>
    )
}

export { Footer }