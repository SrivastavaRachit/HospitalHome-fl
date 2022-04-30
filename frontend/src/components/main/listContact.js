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
import { ContactContext } from "../../providers/contactContext";


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

const ListContact = () => {

    const contactService = React.useContext(ContactContext);
    const [contactList, setContactList] = React.useState([])
    

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();
    const [keyword, setKeyword] = React.useState("");
    const history = useHistory();

    const url = app_config.api_url + '/';

    React.useEffect(() => {

    contactService.getAll()
            .then(data => {
                setContactList(data)
                console.log(data);
            });

    }, [])

   
   

    return (
        <div>
            <h1 className="text-center">List contact</h1>
            <div className="row justify-content-center">
            
            <div className="col-md-10 mx-auto">
               
                <Card>
                    
                    <CardContent>
                        <div className="col">
                            {
                               contactList.map(contact => (

                                    <div className="col-md-15 mt-5" key={contact._id}>
                                        <Card className={clsx(styles.root, shadowStyles.root)}>
                                          
                                            <CardContent className={styles.content}>
                                                <TextInfoContent
                                                    classes={textCardContentStyles}
                                                    heading={contact.name}
                                                />
                                                <p>{contact.mobile_no}</p>
                                                <p>{contact.email_address}</p>
                                                <p>{contact.message}</p>
                                               
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

export default ListContact;