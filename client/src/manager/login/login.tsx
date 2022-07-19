import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
// import Home from '../../home'

import './login.css';
import BusinessDetails from "../business-details/business-details";

function Login() {

    const [open, setOpen] = React.useState(false);
    const [signin, setSignin] = React.useState({ username: '', password: '' });


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const [status, setStatus] = useState('');
    const submit = () => {

        axios.post(`http://localhost:3000/user/signin`, signin)
            .then(res => {
                setStatus(res.data);
                console.log(status, "🤑");
                if (status == 'manager') {
                    setOpen(false);
                }

            })
    };
    if (status == '') {
        return (
            <div>

                <Tooltip title="לחץ כדי להיכנס" placement="bottom">
                    <Button variant="outlined" onClick={handleClickOpen}>
                        כניסה
                    </Button>
                </Tooltip>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className="title" id="alert-dialog-title">
                        {"כניסה"}
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <PersonIcon />
                        </Avatar>
                    </DialogTitle>
                    <DialogContent >
                        <TextField
                            dir="rtl"
                            id="standard-search"
                            label="שם משתמש"
                            type="search"
                            variant="standard"
                            value={signin.username}
                            onChange={e => { setSignin({ username: e.target.value, password: signin.password });}}
                        /><br />
                        <TextField
                            id="standard-password-input"
                            label="סיסמא"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            value={signin.password}
                            onChange={e => { setSignin({ username: signin.username, password: e.target.value }) }}
                        />

                    </DialogContent>
                    <DialogActions className="submit">
                        <Button onClick={handleClose}>בטל</Button>
                        <Button onClick={submit} autoFocus>
                            הירשם
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
    else if (status == 'manager') {
        return <BusinessDetails />
    }
    else {
        return <h1>אופס... 😦 אין לך הרשאת גישה</h1>
    }
}
export default Login