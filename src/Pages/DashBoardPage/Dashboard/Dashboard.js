import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';

import { useState } from 'react';
import AdminRoute from '../../LoginPage/AdminRoute/AdminRoute';
import Addreview from '../Addreview/Addreview';
import Myorders from '../Myorders/Myorders';
import Payment from '../Payment/Payment';
import Addproduct from '../Adminpage/Addproduct/Addproduct';
import ManageAllorders from '../Adminpage/ManageAllorders/ManageAllorders';
import Manageproducts from '../Adminpage/Manageproducts/Manageproducts';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user , logout} = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <IconButton
            color="inherit"
            size="small">
                <AccountCircleTwoToneIcon />
                        {user?.displayName}
            </IconButton>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/home">
                          <Button color="inherit"><HomeIcon/>Home</Button>
                      </NavLink> <br/>
                <NavLink style={{ textDecoration: 'none', color: 'Black' }} to={`${url}`}><Button color="inherit">My Orders</Button></NavLink> <br/>
                <NavLink style={{ textDecoration: 'none', color: 'Black' }} to={`${url}/addreview`}><Button color="inherit">Review</Button></NavLink> <br/>
                <NavLink style={{ textDecoration: 'none', color: 'Black' }} to={`${url}/payment`}><Button color="inherit">Payment</Button></NavLink>
                <Divider />
                {admin && <Box>
                    <Typography variant='h5'>Admin</Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'Black' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'Black' }} to={`${url}/addproduct`}><Button color="inherit">Add Product</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'Black' }} to={`${url}/manageorders`}><Button color="inherit">Manage All Orders</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'Black' }} to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></NavLink>
                </Box> }
                <NavLink  style={{ textDecoration: 'none', color: 'Black' }} to='/home'><Button onClick={logout} color="inherit"> <LogoutIcon/>Logout</Button></NavLink>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <Addproduct></Addproduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorders`}>
                        <ManageAllorders></ManageAllorders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <Manageproducts></Manageproducts>
                    </AdminRoute>
                    <Route path={`${path}/addreview`}>
                        <Addreview></Addreview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}`}>
                        <Myorders></Myorders>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

export default Dashboard;