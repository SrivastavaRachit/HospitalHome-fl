import { Button, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../providers/contactContext";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cssClasses from "../cssClasses";
import { Link } from "react-router-dom";

const ManageContact = props => {

    const contactService = useContext(ContactContext);
    const [contactList, setContactList] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseClasses = cssClasses();

    const fetchUsers = () => {
        contactService.getAll()
            .then(data => {
                console.log(data);
                setContactList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const deleteContact = (id) => {
        contactService.deleteContact(id)
            .then(res => {
                console.log(res);
                fetchUsers();
            })
    }

    const displayContact = () => {
        return contactList.map((contact, index) => {
            if (!loading) {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{contact.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                             <div style={{display:'block'}}>
                                
                            <div className="row">
                                
                            <div className="row">
                                <div className="col-4">
                                    <p>Mobile no</p>
                                </div>
                                <div className="col-8">
                                    <p>{contact.mobile_no}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-4">
                                    <p>Email Address</p>
                                </div>
                                <div className="col-8">
                                    <p>{contact.email_address}</p>
                                </div>
                           
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <p>Message</p>
                                </div>
                                <div className="col-8">
                                    <p>{contact.message}</p>
                                </div>
                           
                            </div>
                            </div>
                      

                            
                            <Button
                                varaint="outline"
                                color="secondary"
                                onClick={(e) => deleteContact(contact._id)}
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

    return <div style={{ marginTop: "5rem" }}>{displayContact()}</div>;
}

export default ManageContact;