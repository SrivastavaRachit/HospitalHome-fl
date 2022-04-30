import { Button, Card, CardContent, CircularProgress, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../config";
import { UserContext } from "../providers/userContext";
import cssClasses from "./cssClasses";

const customStyles = makeStyles(theme => ({
    card: {
        marginTop: '5rem'
    }
}))

const Profile = props => {

    const baseClasses = cssClasses();
    const customClasses = customStyles();
    const { id } = useParams();
    const userService = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [updateForm, setUpdateForm] = useState({});
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const url = app_config.api_url + '/';

    useEffect(() => {
        userService.getUserById(id)
        .then(data => {
            console.log(data);
            setUpdateForm(data);
        })

    }, [])

    const onFormSubmit = (value, { setSubmitting }) => {

        userService.updateUser(userService.currentUser._id, value)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Welldone!',
                    text: 'You have successfully Updated'
                })
            })
    }

    return (
        <div className="col-md-10 mx-auto">
            <Card className={clsx(baseClasses.card, customClasses.card)}>
                <CardContent>
                    <div className="row">
                        <h3 className="text-center">Manage Profile</h3>
                        <div className="col-md-4">
                            <img src={url + currentUser.avatar} className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <Formik
                                enableReinitialize={true}
                                initialValues={currentUser}
                                onSubmit={onFormSubmit}
                            >
                                {({
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting
                                }) => (
                                    <form onSubmit={handleSubmit}>

                                        <TextField label="Full Name" variant="filled" name="fullname" className={baseClasses.input} onChange={handleChange} value={values.fullname} />
                                        <TextField label="Email" variant="filled" name="email" className={baseClasses.input} onChange={handleChange} value={values.email} />
                                        <TextField label="Age" variant="filled" name="age" className={baseClasses.input} onChange={handleChange} value={values.age} />
                                        <TextField type="password" label="Password" name="password" variant="filled" className={baseClasses.input} onChange={handleChange} value={values.password} />

                                        <div className="text-center">
                                        <button className="btn btn-primary mt-5 w-100">Submit</button>
                                        </div>

                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </CardContent>
            </Card>


        </div>
    )
}

export default Profile;