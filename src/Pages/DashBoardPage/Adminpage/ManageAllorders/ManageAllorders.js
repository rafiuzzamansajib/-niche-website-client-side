import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ManageAllorders = () => {
    const [allorders,setAllorders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orderplace')
        .then(res=>res.json())
        .then(data=>setAllorders(data))
    },[])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allorders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.address},{row.city}</TableCell>
                                <TableCell align="right"><LocalShippingIcon/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
    </TableContainer>
        </div>
    );
};

export default ManageAllorders;