import { Backdrop, Button, Card, CardContent, CircularProgress, Fade, makeStyles, Snackbar, TextField, Typography } from "@material-ui/core";
import { createRef, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import app_config from "../../config";
import { EquipmentContext } from "../../providers/equipmentContext";
import cssClasses from "../cssClasses";
import clsx from 'clsx';
import Rating from '@material-ui/lab/Rating';
import { UserContext } from "../../providers/userContext";
import Alert from "@material-ui/lab/Alert";



const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    image: {
        margin: 'auto'
    }
}));

const EquipmentDetails = () => {

    const classes = useStyles();
    const [equipmentData, setEquipmentData] = useState({});
    const equipmentService = useContext(EquipmentContext);
    const userService = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(3)
    const [text, setText] = useState("");
    const { id } = useParams();
    const wrapper = createRef();
    const url = app_config.api_url + '/';
    const [open, setOpen] = useState(false);
    const history = useHistory();


    const fetchEquipment = () => {
        equipmentService.getEquipmentById(id)
            .then(data => {
                console.log(data);
                setEquipmentData(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchEquipment();
    }, [])


    const handleRate = (e) => {
        setRating(parseInt(e.target.value));
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    const addRating = (e) => {
        equipmentService.AddRating(equipmentData._id, { rating: rating, text: text, user: userService.currentUser._id })
            .then(res => {
                console.log(res);
                fetchEquipment();
                setOpen(true);
            })
    }

    const renderReviews = () => {
        if (equipmentData.reviews)
            return equipmentData.reviews.map((review, index) => {
                return (
                    <Card key={index}>
                        <CardContent>
                            <h3>{review.user.fullname}</h3>
                            <Rating value={review.rating} name="rating"></Rating>
                            <p>{review.text}</p>
                        </CardContent>
                    </Card>
                )
            })
    }

    const ratingForm = () => {
        if (userService.loggedin) {
            return (
                <Card>
                    <CardContent>
                    <h3>Reviews</h3>
                        <Rating onChange={handleRate} value={rating}></Rating>
                        <TextField
                            className="w-100"
                            label="Review Text"
                            multiline
                            rows={5}
                            value={text}
                            name="give-rating"
                            onChange={handleText}
                            variant="filled"
                        />

                        <Button onClick={addRating}>Add Review</Button>
                    </CardContent>
                </Card>
            )
        }
    }

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            setOpen(false);
        };

    const handleOrder = () => {
        sessionStorage.setItem('order-item', JSON.stringify(equipmentData));
        history.push('/app/checkout');
    }

    const handleRent = () => {
        sessionStorage.setItem('order-item', JSON.stringify(equipmentData));
        history.push('/app/rent');
    }

    if (equipmentData)
        return (
            <div className="col-md-10 mx-auto" >
                <Snackbar
                    onClose={handleClose}
                    autoHideDuration={2000}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    TransitionComponent={Fade}
                >

                    <Alert onClose={handleClose} severity="success">Reviews Successfully Added</Alert>
                </Snackbar>
                <h2 className="text-center">Options</h2>
                <hr />

                <div className="row">
                    <div className="col-md-6">
                        <img src={`${url}${equipmentData.avatar}`} className={clsx(cssClasses.image, "img-fluid")} />
                    </div>
                    <div className="col-md-6">
                        <h3>{equipmentData.name}</h3>
                        <Rating name={'rating'} value={2} />
                        <Typography variant={'body2'} >
                            4.0
                        </Typography>
                        <p>{equipmentData.description}</p>
                        <p>{equipmentData.features}</p>
                        <h1>₹{equipmentData.price}</h1>

                        <div className="row">
                            <Button className="col-md-5 mt-5" variant="contained" color="primary" onClick={handleOrder}>Order Now</Button>
                            {
                                equipmentData.rentable ? <Button className="col-md-5 mt-5" variant="contained" color="primary" onClick={handleRent}>Rent Now</Button> : ''
                            }
                        </div>

                    </div>

                </div>

               
                <hr />
                {
                    renderReviews()
                }
                {
                    ratingForm()
                }


                <Backdrop ref={wrapper} className={classes.backdrop} open={loading} onClick={() => { setLoading(false) }}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        )
    else
        return <h1>Nothing Here</h1>
}


export default EquipmentDetails;