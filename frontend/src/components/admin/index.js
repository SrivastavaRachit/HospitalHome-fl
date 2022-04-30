import { useEffect, useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Route, BrowserRouter as Router, useRouteMatch, Switch, Link, Redirect, useHistory } from 'react-router-dom';
import ManageUser from './manageuser';
import AdminDashboard from './dashboard';
import Profile from '../profile';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import AddEquipment from './addequipment';
import AddStaff from './addstaff';
import ManageEquipment from './manageequipment';
import ManageStaff from './managestaff';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Swal from 'sweetalert2';
import ManageNursing from './managenursing';
import ManageContact from './managecontact';
import ManageUserOrders from '../user/manageUserOrders';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import UpdateEquipment from './updateEquipment';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 60,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 230,
    },
}));

const Admin = () => {

    const [open, setOpen] = useState(true);

    const classes = useStyles();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    let { path, url } = useRouteMatch();
    const history = useHistory();
    console.log(path)

    const drawerOptions = [
        {
            name: "Profile",
            icon: <AccountBoxIcon />,
            link: `${url}/profile`
        },
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            link: `${url}/dashboard`
        },
        {
            name: "ManageUsers",
            icon: <PeopleIcon />,
            link: "/admin/manageuser"
        },
        {
            name: "AddEquipment",
            icon: <AddBoxIcon />,
            link: "/admin/addequipment"
        },
        {
            name: "AddStaff",
            icon: <AddBoxIcon />,
            link: "/admin/addstaff"
        },
        {
            name: "ManageEquipment",
            icon: <PeopleIcon />,
            link: "/admin/manageequipment"
        },
        {
            name: "ManageStaff",
            icon: <PeopleIcon />,
            link: "/admin/managestaff"
        },
        {
            name: "ManageBooking",
            icon: <PeopleIcon />,
            link: "/admin/managenursing"
        },
        {
            name: "ManageOrder",
            icon: <LocalGroceryStoreIcon />,
            link: "/admin/manageUserOrders"
        },
        {
            name: "Contact Us",
            icon: <PeopleIcon />,
            link: "/app/listcontact"
        },
    ]

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isadmin) {
                return;
            }
        }
        Swal.fire({
            icon: 'error',
            title: 'Not Permitted',
            text: 'You do not have admin permission'
        })
        history.push('/app/login');
    }, [])


    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Header open={open} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} drawer={true} />
            <DrawerComponent
                open={open}
                setOpen={setOpen}
                drawerWidth={drawerWidth}
                handleDrawerClose={handleDrawerClose}
                drawerOptions={drawerOptions} />

            <div className={clsx(classes.content, {
                [classes.contentShift]: open,
            }, 'user-layout')}>
                <Switch>
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/dashboard`} component={AdminDashboard} />
                    <Route path={`${path}/manageuser`} component={ManageUser} />
                    <Route path={`${path}/addequipment`} component={AddEquipment} />
                    <Route path={`${path}/manageequipment`} component={ManageEquipment} />
                    <Route path={`${path}/addstaff`} component={AddStaff} />
                    <Route path={`${path}/managestaff`} component={ManageStaff} />
                    <Route path={`${path}/managenursing`} component={ManageNursing} />
                    <Route path={`${path}/managecontact`} component={ManageContact} />
                    <Route path={`${path}/manageUserorders`} component={ManageUserOrders} />
                    <Route path={`${path}/updatequipment/:id`} component={UpdateEquipment} />
                    

                </Switch>

            </div>
        </div>
    )
}


export default Admin;