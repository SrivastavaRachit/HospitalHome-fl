import { Fade, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { NursingContext } from "../../providers/nursingContext";




const NursingForm = props => {
    const nursing = React.useContext(NursingContext);
    const manageService = React.useContext(NursingContext);
    const [avatar, setAvatar] = React.useState("");
    const [imgpath, setImgPath] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const nursingForm = {
        name: '',
        age: '',
        gender: '',
        types_of_illness: '',
        address: '',
        mobile_no: '',
        email_address: '',
        timing: '',
        shift: '',
        health_condtion: '',
        avatar:''
    };



    const onFormSubmit = (value, { setSubmitting }) => {
        value['avatar'] = avatar;
        console.log(value);
        setSubmitting = true;

        manageService.addNursing(value)

            .then(res => {
                console.log(res)
                setOpen(true);
            });
    }

    
    const showAvatar = () => {
        if (imgpath) {
            return (
                <img src={imgpath} className="img-fluid" />
            )
        }
    }

    const uploadImage = (event) => {
        const data = new FormData();
        data.append('image', event.target.files[0]);
        setAvatar(event.target.files[0].name);
        manageService.uploadImage(data)
            .then(res => console.log(res));

        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            // erroMsg = 'Only images are supported.';
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setImgPath(reader.result);
        };
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
                        initialValues={nursingForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Patient Form</h3>

                                <div className="row">
                                    <div className="col-md mt-5">
                                        <label className="mt-5"> Name</label>
                                        <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} />
                                    </div>

                                </div>

                                <label className="mt-4">Age</label>
                                <input type="number" className="form-control" id="age" onChange={handleChange} value={values.age} />

                                <label className="mt-4">Gender</label>
                                <input type="text" className="form-control" id="gender" onChange={handleChange} value={values.gender} />

                                

                                <label className="mt-4">Types of illness</label>
                                <input type="text" className="form-control" id="types_of_illnees" onChange={handleChange} value={values.types_of_illnees} />

                                <label className="mt-4">Address</label>
                                <input type="text" className="form-control" id="address" onChange={handleChange} value={values.address} />

                                <label className="mt-4">Mobile No</label>
                                <input type="text" className="form-control" id="mobile_no" onChange={handleChange} value={values.mobile_no} />

                                <label className="mt-4">Email Address</label>
                                <input type="email" className="form-control" id="email_address" onChange={handleChange} value={values.email_address} />

                                <label className="mt-4">Timing</label>
                                <input type="text" className="form-control" id="timing" onChange={handleChange} value={values.timing} />


                                <label className="mt-4">Shift</label>
                                <input type="text" className="form-control" id="shift" onChange={handleChange} value={values.shift} />



                                <label className="mt-4">Health Condition</label>
                                <input type="text" className="form-control" id="health_condtion" onChange={handleChange} value={values.health_condtion} />



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

export default NursingForm;