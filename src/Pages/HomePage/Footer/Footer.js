import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
    return (
            <Box sx={{backgroundColor:"#1565c0",mt:5}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Typography>
                        Home
                    </Typography>
                    <Typography>
                        Explore
                    </Typography>
                    <Typography>
                        Login
                    </Typography>

                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Typography>
                        Welcome To Watch House Website.This Website about watches For men And Women.
                    </Typography>
                    <Typography variant="p" sx={{fontWeight:100}}>
                        all copy rights reserve || rafiuzzaman sajib
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <YouTubeIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                <InstagramIcon/>
                </Grid>
                </Grid>
            </Box>
    );
};

export default Footer;