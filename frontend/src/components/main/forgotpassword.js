import { Button, Card, CardContent, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import app_config from "../../config";
import { UserContext } from "../../providers/userContext";
import cssClasses from "../cssClasses";

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: "5rem"
    }
}))

const ForgotPassword = () => {

    const styles = useStyles();
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const globalStyles = cssClasses();
    const [showReset, setShowReset] = useState(false);
    const [forgotuser, setForgotuser] = useState({});
    const url = app_config.api_url + '/util';
    const history = useHistory();

    const userService = useContext(UserContext);

    const sendmail = data => {
        return fetch(url + '/sendmail', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
            .then(res => res.json());
    }

    const sendOTP = () => {
        userService.getUserByEmail(email).then((forgotuser) => {
            if (forgotuser) {
                setForgotuser(forgotuser);
                console.log('user found');
                setShowReset(true);
                const genOTP = Math.floor(1000 + Math.random() * 9000);
                sendmail({
                    to: email,
                    subject: 'For Reseting Email',
                    message: `Your OTP for reseting password is ${genOTP}`,
                }).then((data) => {
                    console.log(data);
                });
            } else {
                Swal.fire({
                    title: 'OOps!!',
                    text: 'Enter your Registered Email',
                    icon: 'error',
                }).then(() => {
                    return;
                });
                return;
            }
        });

    }

    const updatePassword = () => {
        userService.updateUser(forgotuser._id, { password: password })
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Password Reset',
                    text: 'Password changed sucessfully'
                })
                    .then(d => {
                        history.push('/app/login');
                    })
            })
    }

    const showResetForm = () => {
        if (showReset) {
            return (
                <Card className={clsx(styles.card, globalStyles.card)}>
                    <CardContent>
                        <h1 className="text-center">Enter New Password</h1>
                        <hr />

                        <TextField
                            name="otp"
                            onChange={e => setOtp(e.target.value)}
                            value={otp}
                            required
                            fullWidth
                            id="otp"
                            label="Enter OTP"
                            autoFocus
                            className="mt-4"
                        />

                        <TextField
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            required
                            fullWidth
                            id="password"
                            label="Enter New Password"
                            autoFocus
                            className="mt-4"
                        />


                        <TextField
                            required
                            fullWidth
                            label="Repeat Password"
                            autoFocus
                            className="mt-4"
                        />

                        <Button className="mt-5" color="primary" variant="contained" onClick={updatePassword}>Reset Password</Button>

                    </CardContent>
                </Card>

            )
        }
    }

    return (
        <div className="col-md-10 mx-auto">

            <Card className={clsx(styles.card, globalStyles.card)}>
                <CardContent>
                    <h1 className="text-center">Generate OTP</h1>
                    <hr />

                    <TextField
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required
                        fullWidth
                        id="email"
                        label="Enter Registered Email"
                        autoFocus
                    />

                    <Button className="mt-5" color="primary" variant="contained" onClick={sendOTP}>Send OTP</Button>

                </CardContent>
            </Card>

            {showResetForm()}
        </div>
    );
};


export default ForgotPassword;