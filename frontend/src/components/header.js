import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import app_config from '../config';
import clsx from "clsx";
import { UserContext } from "../providers/userContext";

const Header = props => {

    const open = props.open;
    const drawerWidth = props.drawerWidth;
    const handleDrawerOpen = props.handleDrawerOpen;
    const userService = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const history = useHistory();
    const url = app_config.api_url + '/';


    const useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest,
            }),
        },
        root: {
            flexGrow: 1,
            display: 'flex',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            "&:hover, &:focus": {
                color: theme.palette.primary,
                backgroundColor: 'white'
            }
        },
        siteTitle: {
            fontSize: '1.5em',
            textDecoration: 'none',
            flexGrow: 1,
        }

    }));


    const handleLogout = (e) => {
        sessionStorage.removeItem("user");
        userService.setLoggedin(false);
        userService.setCurrentUser(null);
        history.push("/app/login");
    };

    const classes = useStyles();

    const showMenuButton = () => {
        if (props.drawer & !open) {
            return (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
            )
        }
    }


    const renderLoggedIn = () => {
        // let user = userService.currentUser;
        if (currentUser) {
            const dashLink = currentUser.isadmin ? 'admin' : 'user';
            return (
                <div>
                    <IconButton
                        component={Link} to={`/${dashLink}/dashboard`}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>

                   

                </div>
            )
        } else {
            return (
                <div>
                    <Button component={Link} to={'/app/login'} color="inherit">Login</Button>
                    <Button component={Link} to={'/app/register'} color="inherit">Register</Button>
                </div>
            )
        }

    }

    return (
        <AppBar
            position="sticky"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
            <Toolbar>
                {showMenuButton()}
                <Typography variant="h6" className={classes.siteTitle} color="inherit" component={Link} to="/home">
                    {app_config.projectTitle}
                </Typography>
                <Link to="/app/listequipments" className={classes.link}>
                </Link>
                <Button component={Link} to={'/app/listequipments'} color="inherit">Equipments</Button>
                <Button component={Link} to={'/app/listedstaff'} color="inherit">Staff</Button>
                <Button component={Link} to={'/app/liststaff'} color="inherit">Services</Button>
                {renderLoggedIn()}

            </Toolbar>
        </AppBar>
    )
}


export default Header;