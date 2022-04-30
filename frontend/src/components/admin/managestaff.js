import { Avatar, Box, Card, CardContent, CardMedia, Fade, IconButton, makeStyles, Snackbar } from "@material-ui/core";
import TextInfoContent from "@mui-treasury/components/content/textInfo/TextInfoContent";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { StaffContext } from "../../providers/staffContext";
import cssClasses from "../cssClasses";
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import app_config from "../../config";
import Alert from "@material-ui/lab/Alert";

const styles = makeStyles(theme => ({
    card: {
        marginTop: '10%'
    },
    root: {
        maxWidth: 304,
        margin: 'auto',
    },
    content: {
        padding: 24,
    },
    avatar: {
        width: 50,
        height: 50,
        border: '2px solid lightblue',
        margin: '-48px 32px 0 auto',
        '& > img': {
            margin: 5,
        },
    },
}))

const ManageStaff = props => {

    const staffService = useContext(StaffContext);
    const baseClasses = cssClasses();
    const classes = styles();
    const mediaStyles = useSlopeCardMediaStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();

    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)

    const fetchStaff = () => {
        staffService.getAll()
            .then(data => {
                console.log(data);
                setStaffList(data);
                setLoading(false);
            })
    }

    const deleteStaff = (id) => {
        staffService.deleteStaff(id)
            .then(res => {
                console.log(res);
                setOpen(true);
                fetchStaff();
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        fetchStaff();
    }, [])

    const displayStaff = () => {
        if (loading) {
            return (<p>Loading...</p>)
        } else {
            return (
                staffList.map(staff => {
                    return (
                        <div key={staff._id} className="col-md-4">
                            <Card className={clsx(baseClasses.root, shadowStyles.root)}>
                                <CardMedia
                                    classes={mediaStyles}
                                    style={{ height: "15rem" }}
                                    image={
                                        app_config.api_url + '/' + staff.avatar
                                    }
                                />
                                <CardContent className={baseClasses.content}>
                                    <TextInfoContent
                                        classes={textCardContentStyles}
                                        heading={staff.name}
                                        body={
                                            staff.designation
                                        }
                                    />
                                </CardContent>
                                <Box px={2} pb={2} mt={-1}>
                                    {/* <IconButton>
                                        <EditIcon />
                                    </IconButton> */}
                                    <IconButton onClick={e => deleteStaff(staff._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Card>

                        </div>
                    )
                })
            )
        }
    }

    return (
        <div className="col-md mx-auto">
            <Snackbar
                onClose={handleClose}
                autoHideDuration={1000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                TransitionComponent={Fade}
            >

                <Alert onClose={handleClose} severity="success">Staff Successfully Added</Alert>
            </Snackbar>
            <Card className={clsx(baseClasses.card, classes.card)}>
                <CardContent className={baseClasses.cardContent}>
                    <div className="row">
                        {
                            displayStaff()
                        }
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}

export default ManageStaff;