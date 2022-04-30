import { Fade, Snackbar } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { staffContext } from "react";
import { StaffContext } from "../../providers/staffContext";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddStaff = () => {

    const staffService = React.useContext(StaffContext);

    const [avatar, setAvatar] = React.useState("");
    const [imgpath, setImgPath] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const staffForm = {
        name: '',
        avatar: '',
        designation: '',
        rentPrice: ''
    };

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
        staffService.uploadImage(data)
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

    const onFormSubmit = (value, { setSubmitting }) => {
        value['avatar'] = avatar;
        console.log(value);
        setSubmitting = true;

        staffService.addStaff(value)
            .then(res => {
                console.log(res)
                setOpen(true);
            });
    }

    return (
        <div className="col-md-6 mx-auto">
            <Snackbar
                onClose={handleClose}
                autoHideDuration={1000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                TransitionComponent={Fade}
            >

                <Alert onClose={handleClose} severity="success">Staff Successfully Added</Alert>
            </Snackbar>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">Add staff Here</h3>
                    

                    <Formik
                        initialValues={staffForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} placeholder=" " />
                                    <label htmlFor="name">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="designation" onChange={handleChange} value={values.designation} placeholder=" " />
                                    <label htmlFor="name">Designation</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="rentPrice" onChange={handleChange} value={values.rentPrice} placeholder=" " />
                                    <label htmlFor="name">Rent Price</label>
                                </div>

                                <div className="row mt-5" style={{ height: '10rem' }}>
                        <div className="col-md-4 mx-auto">
                            {showAvatar()}
                        </div>
                        <div className="col-md-8">
                            <input className="form-control" type="file" onChange={uploadImage} />
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

export default AddStaff;