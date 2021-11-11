import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Explore from '../Explore/Explore';
import Navigation from '../../Shared/Navigation/Navigation';


const Explores = () => {
    const[explores,setExplores] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-refuge-44928.herokuapp.com/watchs')
        .then(res=>res.json())
        .then(data=>setExplores(data))
    },[])
    return (
        <>
        <Navigation></Navigation>
        <Box sx={{ flexGrow: 1 ,mb:5,mt:5}}>
        <Container>
            <Typography sx={{ fontWeight: 600, m: 5, color: 'success.main' }} variant="h4" component="div">
                All Watches
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explores.map(explore => <Explore
                    key={explore.key}
                    explore={explore}
                    ></Explore>)
                }
            
            </Grid>
        </Container>
    </Box>
        </>
    );
};

export default Explores;