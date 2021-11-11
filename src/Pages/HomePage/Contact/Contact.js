import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Contact = () => {
    return (
        <Container>
            <Box sx={{backgroundColor:"lightgray",height:"250px",mt:5}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6} sm={12} md={6}>
            <Typography sx={{fontWeight:300,mx:5}} variant="h5">
               Lets Connent With us For Upcommig Stylish Watch
            </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={6}>
        <TextField sx={{backgroundColor:'white'}} id="filled-basic" label="Email" variant="filled" />
        <Button sx={{m:2,backgroundColor:'gray'}} variant="contained">Connect</Button>
        </Grid>
        </Grid>
    </Box>
        </Container>
    );
};

export default Contact;