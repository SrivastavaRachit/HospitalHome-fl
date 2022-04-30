import { Button, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { NursingContext } from "../../providers/nursingContext";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cssClasses from "../cssClasses";
import { Link } from "react-router-dom";

const ManageNursing = props => {

    const nursingService = useContext(NursingContext);
    const [nursingList, setNursingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseClasses = cssClasses();

    const fetchUsers = () => {
        nursingService.getAll()
            .then(data => {
                console.log(data);
                setNursingList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const deleteNursing = (id) => {
        nursingService.deleteNursing(id)
            .then(res => {
                console.log(res);
                fetchUsers();
            })
    }

    const displayNursing = () => {
        return nursingList.map((nursing, index) => {
            if (!loading) {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{nursing.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                             <div style={{display:'block'}}>
                                
                            <div className="row">
                                <div className="col-4">
                                    <p>Age</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.age}</p>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-4">
                                    <p>Gender</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.gender}</p>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-4">
                                    <p>Types of illness</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.type_of_illness}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <p>Address</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.address}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <p>Mobile mobile_no</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.mobile_no}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <p>Email Address</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.email_address}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <p>Timing</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.timing}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <p>Shift</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.shift}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <p>Health Condition</p>
                                </div>
                                <div className="col-8">
                                    <p>{nursing.health_condition}</p>
                                </div>
                            </div>
                      

                            <Button varaint="outline">Update</Button>
                            <Button
                                varaint="outline"
                                color="secondary"
                                onClick={(e) => deleteNursing(nursing._id)}
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

    return <div style={{ marginTop: "5rem" }}>{displayNursing()}</div>;
}

export default ManageNursing;