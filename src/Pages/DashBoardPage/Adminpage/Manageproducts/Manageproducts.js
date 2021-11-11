import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Manageproducts = () => {
    const[manageproducts,setManageproducts] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-refuge-44928.herokuapp.com/watchs')
        .then(res=>res.json())
        .then(data=>setManageproducts(data))
    },[])

    const handelDelete = id =>{
        const url = `https://mighty-refuge-44928.herokuapp.com/watchs/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            alert("Are Sure To Delete Product")
            const remaining = manageproducts.filter(manageproduct => manageproduct._id !== id);
            setManageproducts(remaining);
        })
    }
    

    return (
        <Box sx={{ flexGrow: 1 ,mb:5,mt:1}}>
        <Container>
            <Typography sx={{ fontWeight: 400, mb: 5, color: 'success.main' }} variant="h4" component="div">
                Manage Products
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    manageproducts.map(manageproduct =><Grid
                    key={manageproduct._id}
                    item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                                image={manageproduct?.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {manageproduct?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {manageproduct?.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   Price: {manageproduct?.price}
                                </Typography>
                                <Button onClick={()=> handelDelete(manageproduct._id)} variant="outlined">Delete</Button> 
                            </CardContent>
                        </Card>
                    </Grid>
                
                    )
                }
            
            </Grid>
        </Container>
    </Box>
    );
};

export default Manageproducts;