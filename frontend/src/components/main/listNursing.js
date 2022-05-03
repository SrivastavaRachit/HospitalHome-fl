import { Button, Card, CardContent, CardMedia, FormControl, List, ListItem, makeStyles, MenuItem, Select, Slider, TextField, withStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { NursingContext } from "../../providers/nursingContext";
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { Link } from "react-router-dom";
import app_config from "../../config";
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

const ListNursings = () => {

    const nursingService = React.useContext(NursingContext);
    const [nursingList, setNursingList] = React.useState([])
    const [val, setVal] = React.useState('All');
    const [priceFilter, setPriceFilter] = React.useState({ min: 1200, max: 5000 })
    const categories = ['All', ...app_config.nursingCategories];

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();
    const minimalSelectClasses = useMinimalSelectStyles();

    const [keyword, setKeyword] = React.useState("");

    const url = app_config.api_url + '/';

    React.useEffect(() => {

        fetchNursings();

    }, [])

    const fetchNursings = () => {
        nursingService.getAll()
            .then(data => {
                setNursingList(data)
                console.log(data);
            });
    }

    // const searchProduct = e => {
    //     nursingService.getAll()
    //         .then(data => {
    //             setNursingList(data)
    //             let newList = data.filter(nursing => (nursing.name.toLowerCase().includes(keyword.toLowerCase())))
    //             console.log(newList);
    //             setNursingList(newList);
    //             console.log(data);
    //         });
    // }

    const PriceSlider = withStyles({
        root: {
            color: '#3a8589',
            height: 3,
            padding: '13px 0',
        },
        thumb: {
            height: 27,
            width: 27,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            marginTop: -12,
            marginLeft: -13,
            boxShadow: '#ebebeb 0 2px 2px',
            '&:focus, &:hover, &$active': {
                boxShadow: '#ccc 0 2px 3px 1px',
            },
            '& .bar': {
                // display: inline-block !important;
                height: 9,
                width: 1,
                backgroundColor: 'currentColor',
                marginLeft: 1,
                marginRight: 1,
            },
        },
        active: {},
        track: {
            height: 3,
        },
        rail: {
            color: '#d8d8d8',
            opacity: 1,
            height: 3,
        },
    })(Slider);

    function SliderThumb(props) {
        return (
            <span {...props}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </span>
        );
    }

    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon} />
        )
    };

    const menuProps = {
        classes: {
            paper: minimalSelectClasses.paper,
            list: minimalSelectClasses.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

    const filterProducts = (e) => {
        setVal(e.target.value);
        if (e.target.value == 'All') {
            fetchNursings();
            return;
        }
        nursingService.getAll()
            .then(data => {
                setNursingList(data)
                let newList = data.filter(nursing => (nursing.category.toLowerCase().includes(e.target.value.toLowerCase())))
                console.log(newList);
                setNursingList(newList);
                console.log(data);
            });
    }

    const setPrice = (e) => {
        console.log(priceFilter)
    }


    const renderOptions = () => {
        return (
            <Card>
                <CardContent>
                    <p>Category</p>
                    <hr />
                    <FormControl className="w-100">
                        <Select
                            disableUnderline
                            classes={{ root: minimalSelectClasses.select }}
                            MenuProps={menuProps}
                            IconComponent={iconComponent}
                            value={val}
                            onChange={filterProducts}
                        >
                            {
                                categories.map((cat, index) => {
                                    return (
                                        <MenuItem key={index} value={cat}>{cat}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>

                    <p className="mt-4">Price</p>
                    <hr />
                    <PriceSlider
                        ThumbComponent={SliderThumb}
                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                        defaultValue={[priceFilter.min, priceFilter.max]}
                        onChange={setPrice}
                    />
                </CardContent>
            </Card>
        )
    }

    return (
        <div>
            <h1 className="text-center">List Nursings</h1>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    {renderOptions()}
                </div>
                <div className="col-md-9">
                    <Card className="mb-5">
                        <CardContent>
                            <div className="input-group w-100">
                                <input className="form-control" value={keyword} onChange={e => { setKeyword(e.target.value) }} />
                                <div className="input-group-append">
                                    <Button onClick={searchProduct}>Search</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="row">
                                {
                                    nursingList.map(nursing => (

                                        <div className="col-md-3 mt-5" key={nursing._id}>
                                            <Card className={clsx(styles.root, shadowStyles.root)}>
                                                <CardMedia
                                                    classes={mediaStyles}
                                                    image={
                                                        url + nursing.avatar
                                                    }
                                                />
                                                <CardContent className={styles.content}>
                                                    <TextInfoContent
                                                        classes={textCardContentStyles}
                                                        overline={'May 15, 2022'}
                                                        heading={nursing.name}
                                                        body={
                                                            nursing.age,
                                                            nursing.gender,
                                                            nursing.types_of_illnees,
                                                            nursing.address,
                                                            nursing.mob_no,
                                                            nursing.email_address,
                                                            nursing.timing,
                                                            nursing.shift,
                                                            nursing.health_condition

                                                        }
                                                    />
                                                    <div className="row">
                                                        <div className="col">
                                                            <Button color={'primary'} fullWidth className={styles.cta}>
                                                                <Link to={`/app/nursingdetails/${nursing._id}`}>View More</Link> <ChevronRightRounded />
                                                            </Button>
                                                        </div>

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

export default ListNursings;