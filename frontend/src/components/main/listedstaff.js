import { Button, Card, CardContent, CardMedia, List, ListItem, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { Link, useHistory } from "react-router-dom";
import app_config from "../../config";
import { StaffContext } from "../../providers/staffContext";


const useStyles = makeStyles(() => ({
    root: {
        margin: 'auto',
        boxShadow: 'none',
        borderRadius: 0,
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
    cardImg: {
        height: '10rem'
    }
}));

const ListedStaff = () => {

    const staffService = React.useContext(StaffContext);
    const [staffList, setStaffList] = React.useState([])
    

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();
    const [keyword, setKeyword] = React.useState("");
    const history = useHistory();

    const url = app_config.api_url + '/';

    React.useEffect(() => {

        staffService.getAll()
            .then(data => {
                setStaffList(data)
                console.log(data);
            });

    }, [])

    const handleHire = (staff) => {
        sessionStorage.setItem('staff', JSON.stringify(staff));
        history.push('/main/');
    }
    const searchStaff = e => {
        staffService.getAll()
            .then(data => {
                setStaffList(data)
                let newList = data.filter(staff => (staff.name.toLowerCase().includes(keyword.toLowerCase())))
                console.log(newList);
                setStaffList(newList);
                console.log(data);
            });
    }

    return (
        <div>
            <h1 className="text-center">List Staff</h1>
            <div className="row justify-content-center">
            
            <div className="col-md-10 mx-auto">
                <Card className="mb-5">
                        <CardContent>
                            <div className="input-group w-100">
                                <input className="form-control" value={keyword} onChange={e => { setKeyword(e.target.value) }} />
                                <div className="input-group-append">
                                    <Button onClick={searchStaff}>Search</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                <Card>
                    
                    <CardContent>
                        <div className="row">
                            {
                                staffList.map(staff => (

                                    <div className="col-md-3 mt-5" key={staff._id}>
                                        <Card className={clsx(styles.root, shadowStyles.root)}>
                                            <CardMedia
                                                classes={mediaStyles}
                                                image={
                                                    url + staff.avatar
                                                }
                                            />
                                            <CardContent className={styles.content}>
                                                <TextInfoContent
                                                    classes={textCardContentStyles}
                                                   
                                                    heading={staff.name}
                                                    body={
                                                        staff.description,
                                                        staff.rentPrice
                                                    }
                                                />
                                                <div className="col">
                                                    {/* <Button color={'primary'} fullWidth className={styles.cta} onClick={e => handleHire(staff)}>
                                                    </Button> */}
                                                    <Link to={`/app/staffdetails/${staff._id}`}>View More</Link> <ChevronRightRounded />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
        </div>
    )
}

export default ListedStaff;