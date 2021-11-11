import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Typography } from '@mui/material';

const Addproduct = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/watchs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
             <Typography  sx={{ fontWeight: 600, m: 5, color: 'success.main' }} variant="h4" component="div">Add A Product</Typography>
         <form className="orderplace-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("key", { required: true, maxLength: 20 })} placeholder="Key" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product name" />
                <input {...register("img")} placeholder="Image url" />
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addproduct;