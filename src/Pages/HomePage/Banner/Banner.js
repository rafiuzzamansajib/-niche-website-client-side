import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
import bg from '../../../images/banner.jpg'


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}
const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, mt:3,backgroundColor:"whitesmoke" }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{ color: 'black' }}>
                            SEE DAILY TIME <br />
                            WITH WATCH HOUSE
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'black' }}>
                        It is the time you have wasted for your rose that makes your rose so important
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '300px',height: "300px",marginTop:"20px" }} src={bg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;