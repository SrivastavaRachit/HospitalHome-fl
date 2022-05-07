import { useEffect, useState } from "react";
import DrawerComponent from "../drawer";
import Header from "../header";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import {
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router";
import Profile from "../profile";
import ManageUserOrders from "./manageUserOrders";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import BubbleChartRoundedIcon from "@material-ui/icons/BubbleChartRounded";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import Zoom from "react-reveal/Zoom";
import Swal from "sweetalert2";
import ManageServices from "./manageServices";
import ManageRents from "./manageRents";
import ManageHires from "./manageHires";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 60,
    height: "100vh",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 230,
  },
}));

const UserDashboard = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const history = useHistory();

  const handleDrawerOpen = () => {
    console.log("drawer opened");
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let { path, url } = useRouteMatch();

  const drawerOptions = [
    {
      name: "Profile",
      icon: <PersonSharpIcon />,
      link: `${url}/profile`,
    },
    {
      name: "Manage Orders",
      icon: <AddShoppingCartRoundedIcon />,
      link: `${url}/manageorder`,
    },
    {
      name: "Manage Services",
      icon: <BubbleChartRoundedIcon />,
      link: `${url}/services`,
    },
    {
      name: "Current Rents",
      icon: <AttachMoneySharpIcon />,
      link: `${url}/rents`,
    },
    {
      name: "Current Hires",
      icon: <AttachMoneySharpIcon />,
      link: `${url}/hires`,
    },
  ];

  useEffect(() => {
    if (currentUser) {
      return;
    }

    Swal.fire({
      icon: "error",
      title: "Not Permitted",
      text: "You do not have admin permission",
    });
    history.push("/app/login");
  }, []);

  return (
    <div>
      <Header
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        drawer={true}
      />
      <DrawerComponent
        open={open}
        setOpen={setOpen}
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        drawerOptions={drawerOptions}
      />

      <div
        className={clsx(
          classes.content,
          {
            [classes.contentShift]: open,
          },
          "user-layout"
        )}
      >
        <Switch>
          <Redirect exact path={`${path}/dashboard`} to={`${path}/profile`} />
          <Redirect exact path={`${path}`} to={`${path}/profile`} />
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/manageorder`} component={ManageUserOrders} />
          <Route path={`${path}/rents`} component={ManageRents} />
          <Route path={`${path}/hires`} component={ManageHires} />
          <Route path={`${path}/services`} component={ManageServices} />
        </Switch>
      </div>
    </div>
  );
};

export default UserDashboard;
