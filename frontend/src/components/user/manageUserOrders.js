import { Button, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, makeStyles } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "../../providers/equipmentContext";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cssClasses from "../cssClasses";
import { Link } from "react-router-dom";
import { OrderContext } from "../../providers/orderContext";
// import WithScrollReveal from '../withScrollReveal';


const useStyles = makeStyles(theme => ({
    card: {
        marginTop: 'mt-5',
    }
}))

const ManageUserOrders = props => {

    const orderService = useContext(OrderContext);
    const ScrollReveal = window.ScrollReveal;

    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    // const RevealedList = WithScrollReveal(<div></div>)

    const baseClasses = cssClasses();
    const styles = useStyles();

    const fetchOrders = () => {
        orderService.getOrderByUser(currentUser._id)
            .then(data => {
                console.log(data);
                setOrderList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchOrders();
    }, [])




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
                    <Accordion key={index} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="row w-100">
                                <div className="col">
                                    <p>Ordered on : {order.created}</p>
                                </div>
                                <div className="col">
                                    <p>{order.equipment.name}</p>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>

                            <div className="w-100">
                                <div className="col-4">
                                    <p>Description</p>
                                </div>

                                <div className="col-8">
                                    <hr />
                                    <p>{order.equipment.description}</p>
                                </div>
                            </div>

                            <div className="w-100">
                                <div className="col-4">
                                    <p>Features</p>
                                </div>
                                <div className="col-8">
                                    <hr />
                                    <p>{order.equipment.features}</p>
                                </div>
                            </div>
                            <br />

                            <div className="w-100">
                                <div className="col-4">
                                    <p>Price</p>
                                </div>
                                <div className="col-8">
                                    <hr />
                                    <p className="h3">Rs. {order.equipment.price}</p>
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
}

export default ManageUserOrders;