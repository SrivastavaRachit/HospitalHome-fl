import { Fade, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../../providers/contactContext";




const Contact = props => {
    const contact = React.useContext(ContactContext);
    const manageService = React.useContext(ContactContext);
    const [open, setOpen] = React.useState(false);

    const contactForm = {
        name: '',
        mobile_no: '',
        email_address: '',
        message:''
       
    };



    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;

        manageService.addContact(value)

            .then(res => {
                console.log(res)
                setOpen(true);
            });
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <div className="col-md-6 mx-auto">
           <Snackbar
                onClose={handleClose}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                TransitionComponent={Fade}
            >

                <Alert  onClose={handleClose} severity="success">Form  Successfully Submited</Alert>
            </Snackbar>
            <div className="card">
                <div className="card-body">
                    <Formik
                        initialValues={contactForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Contact Us</h3>

                                <div className="row">
                                    <div className="col-md mt-5">
                                        <label className="mt-5"> Name</label>
                                        <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} />
                                    </div>

                                </div>

                                
                                <label className="mt-4">Mobile No</label>
                                <input type="text" className="form-control" id="mobile_no" onChange={handleChange} value={values.mobile_no} />

                                <label className="mt-4">Email Address</label>
                                <input type="email" className="form-control" id="email_address" onChange={handleChange} value={values.email_address} />

                                                
                                <div className="col-md">
                                        <div className="form-floating mb-3">
                                            <textarea style={{ height: "100px" }} type="text" className="form-control" id="message" onChange={handleChange} value={values.description} placeholder=" " ></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>


                                <div className="text-center">
                                    <button className="btn btn-primary mt-5 w-100">Submit</button>
                                </div>



                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Contact;