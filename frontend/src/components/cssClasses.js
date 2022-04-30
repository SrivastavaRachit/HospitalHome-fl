import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export default makeStyles((theme) => ({

    card: {
        boxShadow: theme.shadows[3],
        marginTop: '2rem',
        padding: '2rem'
    },
    input: {
        width: '100%',
        marginTop: '2rem'
    }

}));

