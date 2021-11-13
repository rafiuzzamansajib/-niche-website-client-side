import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const Myorders = () => {
    const { user } = useAuth();
    const [myorders, setMyorders] = useState([])
    useEffect(() => {
        const url = `https://mighty-refuge-44928.herokuapp.com/orderplace/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorders(data));
    }, [user.email]);
    
    const handelDeleteMyorder = id =>{
        const url = `https://mighty-refuge-44928.herokuapp.com/orderplace/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            alert("Are Sure To Delete Oders")
            const remaining = myorders.filter(myorder => myorder._id !== id);
            setMyorders(remaining);
        })
    }
    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Appointments table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Service</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myorders.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.city}</TableCell>
                            <TableCell align="right"><Button onClick={()=> handelDeleteMyorder(myorders._id)}><DeleteIcon/></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
};

export default Myorders;