import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './orderplace.css'
import { Typography } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';


const Orderplace = ({name}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        axios.post('http://localhost:5000/orderplace', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Place successfully');
                    reset();
                }
            })
    }
    return (
        <>
        <Navigation></Navigation>
           <Typography  sx={{ fontWeight: 600, m: 5, color: 'success.main' }} variant="h4" component="div">Order Place</Typography>
            <form className="orderplace-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />

            {errors.email && <span className="error">This field is required</span>}

            <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />

            <input placeholder="City" defaultValue="" {...register("city", { required: true })} />

            <input type='date' defaultValue="" {...register("date", { required: true })} />
            
            <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

            <input type="submit" />
            </form>
        </>
    );
};

export default Orderplace;