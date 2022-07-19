import React, { useEffect, useState, useContext } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './business-detalise.css';
import { Outlet, Link } from "react-router-dom";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
interface servicesDetails {
    "id": string,
    "serviceType": string,
    "price": number,
    "time": number
}

function BusinessDetails() {
    const [open, setOpen] = React.useState(true);
    const [openNewService, setopenNewService] = React.useState(false);
    const [services, setServices] = React.useState<servicesDetails[]>([]);
    const [service, setservice] = React.useState<servicesDetails>();
    const [newServiceName, setNewServiceName] = React.useState<string>("");
    const [newServicePrice, setNewServicePrice] = React.useState<any>(0);
    const [NewServiceTime, setNewServiceTime] = React.useState<any>(0);
    const [selected, setSelected] = React.useState<servicesDetails>();
    const [id, setID] = React.useState<string>("");
    const [close, setclose] = useState(true);


    const data = axios.get(`http://localhost:3000/service`)
        .then(res => {
            const allService = res.data;
            setServices(allService)
        })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const OpenNewService = () => {
        setopenNewService(true);
    };

    const setDitails = (e: servicesDetails) => {
        setID(e.id)
        setNewServiceName(e.serviceType)
        setNewServicePrice(e.price)
        setNewServiceTime(e.time)
    }
    const CreateNewService = () => {
        setNewServiceName("")
        const newService = ({ serviceType: newServiceName, price: newServicePrice, time: NewServiceTime })
        setopenNewService(false)
        const response = axios.post(`http://localhost:3000/service/`, newService)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    const updateService = () => {
        debugger
        setNewServiceName("")        const newService = ({ serviceType: newServiceName, price: newServicePrice, time: NewServiceTime, id: id })
        const response = axios.put(`http://localhost:3000/service/id=${id}`, newService)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    const deleteServise = (e: servicesDetails) => {
        debugger
        // setID("") 
        setID(e.id)

        // const newService = ({ serviceType: newServiceName, price: newServicePrice, time: NewServiceTime,id:id})
        const response = axios.delete(`http://localhost:3000/service/id=${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    if (!open) {
        return (<Button variant="outlined"
            onClick={(o) => setclose(true)}>
            {/* ניהול פרטי עסק */}
        </Button>)
    }
    else {
        return (
            <div>
                <Dialog
                    fullScreen
                    open={close}
                    onClose={handleClose}
                >

                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={(o) => setclose(false)}
                                aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <h1>צילום</h1>
                        </Toolbar>
                    </AppBar>

                    <FormControl variant="outlined" className="serviceListClass">
                        <ul>
                            {services.map((elem) => <li value={elem.serviceType}>{elem.serviceType}
                                <Button onClick={() => setDitails(elem)}>לעריכת פרטים</Button>
                                <Button onClick={() => deleteServise(elem)}>מחיקת שירות</Button>
                            </li>)}

                        </ul>
                    </FormControl>
                    {newServiceName != "" ?
                        <form className="update">
                            <h1 className="h1">עדכן פרטי שירות</h1>
                            <TextField
                                value={newServiceName}
                                id="standard-textarea"
                                label="סוג השירות"
                                multiline
                                variant="standard"
                                className="margin"
                                onChange={(event) => setNewServiceName(event.target.value)}
                            />

                            <TextField
                                value={newServicePrice}

                                id="standard-number"
                                label="מחיר"
                                type="number"
                                variant="standard"
                                className="margin"

                                onChange={(event) => setNewServicePrice(event.target.value)}
                            />
                            <TextField
                                value={NewServiceTime}
                                id="standard-number"
                                label="משך השירות"
                                type="number"
                                variant="standard"
                                className="margin"

                                onChange={(event) => setNewServiceTime(event.target.value)}
                            />
                            <Button variant="contained" className="button-add-service" onClick={updateService}>
                                שמור
                            </Button>
                        </form>
                        : null}
                    <Button variant="contained" color="primary" className="button-add-service" onClick={OpenNewService}>
                        הוספת שירות
                    </Button>

                    <Dialog
                        open={openNewService}
                        onClose={handleClose}
                        aria-labelledby="draggable-dialog-title"
                    >
                        <AppBar sx={{ position: 'relative' }}>
                        </AppBar>
                        <List>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <form>
                                    <h1 className="h1">הכנס פרטי שירות</h1>
                                    <TextField
                                        id="standard-textarea"
                                        label="סוג השירות"
                                        multiline
                                        variant="standard"
                                        onChange={(event) => setNewServiceName(event.target.value)}
                                    />

                                    <br />
                                    <TextField
                                        id="standard-number"
                                        label="מחיר"
                                        type="number"
                                        variant="standard"
                                        onChange={(event) => setNewServicePrice(event.target.value)}
                                    />
                                    <br />
                                    <TextField
                                        id="standard-number"
                                        label="משך השירות"
                                        type="number"
                                        variant="standard"
                                        onChange={(event) => setNewServiceTime(event.target.value)}
                                    />
                                    <Button variant="contained" className="button-add-service" onClick={CreateNewService}>
                                        שמור
                                    </Button>
                                </form>

                            </Box>
                        </List>

                    </Dialog>
                    <Link to="/view">תצוגת ההזמנות</Link>
                </Dialog>
            </div>
        );

    }
}
export default BusinessDetails;
