import { useState } from "react";
import Header from "../header";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useRouteMatch, Switch, Route, Redirect } from "react-router";
import Login from "./login";
import Register from "./register";
import ListEquipments from "./listEquipments";
import ListStaff from "./liststaff";
import EquipmentDetails from "./equipmentDetails";
import StaffDetails from "./staffDetails";
import NursingForm from "./nursingform";
import Contact from "./contact";
import Checkout from "./checkout";
import ForgotPassword from "./forgotpassword";
import Rent from "../user/rent";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import Listedstaff from "./listedstaff";
import ListContact from "./listContact";
import StaffCheckout from "./staffCheckout";

const drawerWidth = 0;
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const MainComponent = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  const handleDrawerOpen = () => {
    console.log("drawer opened");
    setOpen(true);
  };

  const drawerOptions = [
    {
      name: "Profile",
      icon: <AccountBoxIcon />,
      link: `${url}/profile`,
    },
  ];

  return (
    <div>
      <Header
        open={open}
        setOpen={setOpen}
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
      />
      <div
        className={clsx(
          classes.content,
          {
            [classes.contentShift]: open,
          },
          "user-layout1"
        )}
      >
        <Switch>
          <Route exact path="/app">
            <Redirect to="/app/login" />
          </Route>
          <Route path={`${path}/login`} component={Login} />
          <Route path={`${path}/register`} component={Register} />
          <Route path={`${path}/listequipments`} component={ListEquipments} />
          <Route
            path={`${path}/equipmentdetails/:id`}
            component={EquipmentDetails}
          />
          <Route path={`${path}/staffdetails/:id`} component={StaffDetails} />
          <Route path={`${path}/checkout`} component={Checkout} />
          <Route path={`${path}/staffcheckout`} component={StaffCheckout} />
          <Route path={`${path}/rent`} component={Rent} />
          <Route path={`${path}/liststaff`} component={ListStaff} />
          <Route path={`${path}/listcontact`} component={ListContact} />
          <Route path={`${path}/listedstaff`} component={Listedstaff} />
          <Route path={`${path}/reset`} component={ForgotPassword} />
          <Route path={`${path}/nursingform`} component={NursingForm} />
          <Route path={`${path}/contact`} component={Contact} />
        </Switch>
      </div>
    </div>
  );
};

export default MainComponent;
