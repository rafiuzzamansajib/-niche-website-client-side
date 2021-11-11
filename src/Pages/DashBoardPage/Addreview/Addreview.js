import { Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Addreview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmitReviwe = data => {
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
        <Typography  sx={{ fontWeight: 300, m: 5, color: 'success.main' }} variant="h4" component="div">Your Review</Typography>
         <form className="orderplace-form" onSubmit={handleSubmit(onSubmitReviwe)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })}/>
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("star", { min: 1, max: 5 })} placeholder="rating" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addreview;