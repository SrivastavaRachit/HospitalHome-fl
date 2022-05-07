import {
  Button,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "../../providers/equipmentContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cssClasses from "../cssClasses";
import { Link } from "react-router-dom";
import { OrderContext } from "../../providers/orderContext";
import app_config from "../../config";
// import WithScrollReveal from '../withScrollReveal';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "mt-5",
  },
}));

const ManageHires = (props) => {
  const orderService = useContext(OrderContext);
  const url = app_config.api_url;
  const ScrollReveal = window.ScrollReveal;

  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  // const RevealedList = WithScrollReveal(<div></div>)

  const baseClasses = cssClasses();
  const styles = useStyles();

  const fetchOrders = () => {
    orderService.getHireByUser(currentUser._id).then((data) => {
      console.log(data);
      setOrderList(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // const deleteEquipment = (id) => {
  //     equipmentService.deleteEquipment(id)
  //         .then(res => {
  //             console.log(res);
  //             fetchUsers();
  //         })
  // }

  const displayOrders = () => {
    return orderList.map((order, index) => {
      if (!loading) {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="row w-100">
                <div className="col">
                  <p>Rented on : {order.created}</p>
                </div>
                <div className="col">
                  <p>{order.staff.name}</p>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <img
                src={url + "/" + order.staff.avatar}
                style={{ height: "15rem" }}
              />
              <div className="w-100">
                <div className="col-4">
                  <p>Designation</p>
                </div>

                <div className="col-8">
                  <hr />
                  <p>{order.staff.designation}</p>
                </div>
              </div>
              <br />

              <div className="w-100">
                <div className="col-4">
                  <p>Rent</p>
                </div>
                <div className="col-8">
                  <hr />
                  <p className="h3">Rs. {order.staff.rentPrice}</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      } else {
        return;
      }
    });
  };

  return <div style={{ marginTop: "5rem" }}>{displayOrders()}</div>;
};

export default ManageHires;
