import { Button, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "../../providers/equipmentContext";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cssClasses from "../cssClasses";
import { Link } from "react-router-dom";

const ManageEquipment = props => {

    const equipmentService = useContext(EquipmentContext);
    const [equipmentList, setEquipmentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseClasses = cssClasses();

    const fetchUsers = () => {
        equipmentService.getAll()
            .then(data => {
                console.log(data);
                setEquipmentList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const deleteEquipment = (id) => {
        equipmentService.deleteEquipment(id)
            .then(res => {
                console.log(res);
                fetchUsers();
            })
    }

    const displayEquipments = () => {
        return equipmentList.map((equipment, index) => {
            if (!loading) {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{equipment.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <div style={{ display: 'block' }}>
                                <div className="row">
                                    <div className="col-4">
                                        <p>Description</p>
                                    </div>
                                    <div className="col-8">
                                        <p>{equipment.description}</p>
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-4">
                                        <p>Features</p>
                                    </div>
                                    <div className="col-8">
                                        <p>{equipment.features}</p>
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-4">
                                        <p>Price</p>
                                    </div>
                                    <div className="col-8">
                                        <p>{equipment.price}</p>
                                    </div>
                                </div>

                                <Button varaint="outline" component={Link} to={`/admin/updatequipment/${equipment._id}`}>Update</Button>
                                <Button
                                    varaint="outline"
                                    color="secondary"
                                    onClick={(e) => deleteEquipment(equipment._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                );
            } else {
                return;
            }
        });
    };

    return <div style={{ marginTop: "5rem" }}>{displayEquipments()}</div>;
}

export default ManageEquipment;