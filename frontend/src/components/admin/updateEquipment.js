import { Card, CardContent, Checkbox, Fade, FormControlLabel, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik } from "formik";

import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import app_config from "../../config";
import { EquipmentContext } from "../../providers/equipmentContext";
import cssClasses from "../cssClasses";

const UpdateEquipment = () => {

    const equipmentService = useContext(EquipmentContext);
    const baseStyles = cssClasses();
    const [open, setOpen] = useState(false);
    const categories = app_config.equipmentCategories;
    const [updateForm, setUpdateForm] = useState({});
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        equipmentService.getEquipmentById(id)
            .then(data => {
                console.log(data);
                setUpdateForm(data);
            })
    }, [])


    const onFormSubmit = (value, { setSubmitting }) => {
        setSubmitting = true;

        equipmentService.updateEquipment(updateForm._id, value)

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

    const renderForm = () => {
        if (UpdateEquipment) {
            return (
                <Formik
                    initialValues={updateForm}
                    onSubmit={onFormSubmit}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit}>

                            <h3 className="text-center">Update Equipment Here</h3>

                            <div className="row">
                                <div className="col-md mt-5">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} placeholder=" " />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>
                                <div className="col-md mt-5">
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="price" onChange={handleChange} value={values.price} placeholder=" " />
                                        <label htmlFor="name">Price</label>
                                    </div>
                                </div>
                            </div>

                            <FormControlLabel
                                control={<Checkbox checked={values.rentable} value={values.rentable} id="rentable" onChange={handleChange} />}
                                label="Rentable"
                            />

                            {
                                values.rentable ? (
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="rentPrice" onChange={handleChange} value={values.rentPrice} placeholder=" " />
                                        <label htmlFor="name">Rent Price</label>
                                    </div>
                                ) : ''
                            }


                            <div className="form-floating mb-3">
                                <input type="text" list="categories" className="form-control" id="category" onChange={handleChange} value={values.category} placeholder=" " />
                                <label htmlFor="name">Category</label>
                            </div>
                            <datalist id="categories">
                                {
                                    categories.map(category => {
                                        return <option value={category} key={category} />
                                    })
                                }

                                <option value="Health Monitoring" />
                                <option value="Life Support Equipment" />
                                <option value="Diagnostic Equipment" />

                                <option value="Durable Medical Equipment (DME)" />


                            </datalist>

                            <div className="row">
                                <div className="col-md">
                                    <div className="form-floating mb-3">
                                        <textarea style={{ height: "100px" }} type="text" className="form-control" id="description" onChange={handleChange} value={values.description} placeholder=" " ></textarea>
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating mb-3">
                                        <textarea style={{ height: "100px" }} type="text" className="form-control" id="features" onChange={handleChange} value={values.features} placeholder=" " ></textarea>
                                        <label htmlFor="name">Features</label>
                                    </div>
                                </div>
                            </div>


                            <div className="text-center">
                                <button className="btn btn-primary mt-5 w-100">Update</button>
                            </div>



                        </form>
                    )}
                </Formik>


            )
        }
    }


    return (
        <div className="col-md-10 mx-auto">
            <Snackbar
                onClose={handleClose}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                TransitionComponent={Fade}
            >

                <Alert onClose={handleClose} severity="success">Equipment Successfully Updated</Alert>
            </Snackbar>
            <Card className={baseStyles.card}>
                <CardContent>
                    {renderForm()}
                </CardContent>
            </Card>
        </div>
    )

}

export default UpdateEquipment;