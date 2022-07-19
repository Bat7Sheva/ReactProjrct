import { AppBar, Button, Dialog, FormControlLabel, IconButton, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { IBusiness, IService } from "../../customer/CustomerDetails";
import CloseIcon from '@mui/icons-material/Close';

export default function ViewBusiness() {
    const [open, setOpen] = useState(true);
    const [dateMitting, setdateMitting] = useState<IBusiness[]>([]);
    const dataMeeting = axios.get(`http://localhost:3000/business`)
        .then(res => {
            const allMeeting = res.data;
            setdateMitting(allMeeting)
        })


    const [dataService, setDataService] = useState<IService[]>([]);
    const data = axios.get(`http://localhost:3000/service`)
        .then(res => {
            const allService = res.data;
            setDataService(allService)
        })

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={(o) => setOpen(false)}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={(o) => setOpen(false)}
                            aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <h1>כל ההזמנות שנקבעו</h1>

                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ul>
                    {dataService.map((e) => <li key={e.id} value={e.id}>{e.serviceType}
                        <br />
                        <ul>
                            {dateMitting.filter(x=>x.serviceTypeId==e.id).map((e) => <li key={e.id} value={e.id}>שם {e.nameCustomer}  | תאריך  {e.date} | שעה {e.time.toString()} </li>)}
                        </ul>
                    </li>)}


                </ul>
            </Dialog>

        </div>)
}
