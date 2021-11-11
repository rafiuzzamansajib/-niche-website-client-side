import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = (props) => {
    const { name, description, star } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4}> 
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Rating name="half-rating" defaultValue={star} precision={0.5} readOnly  />
                </Typography>
            </CardContent>
            
        </Card>           
        </Grid>
    );
};

export default Review;