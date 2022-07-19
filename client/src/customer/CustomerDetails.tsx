import React, { useState } from "react";
import './CustomerDetails.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import TextField from '@mui/material/TextField';

export interface IService {
    serviceType: string,
    price: number,
    time: number,
    id: string
}
export interface IBusiness {
    id: string,
    serviceTypeId: string,
    nameCustomer: string,
    phoneCustomer: string,
    emailCustomer: string,
    date: string,
    time: TimerHandler;

}
export default function CustomerDetails() {

    const [dataService, setDataService] = useState<IService[]>([]);
    const data = axios.get(`http://localhost:3000/service`)
        .then(res => {
            const allService = res.data;
            setDataService(allService)
        })


    const [chooseBusiness, setChooseBusiness] = useState<string>('');
    const [open, setOpen] = useState(true);
    const [displayCustomerdetails, setDisplayCustomerdetails] = useState(false);
    const [idCount, setidCount] = useState(1);
    const [dateMitting, setdateMitting] = useState<IBusiness[]>();
    const dataMeeting = axios.get(`http://localhost:3000/business`)
        .then(res => {
            const allMeeting = res.data;
            setdateMitting(allMeeting)
        })
    const addBusiness = (event: any) => {

        // let f;
        //     dateMitting?.forEach(x=>{debugger
        //         if(x.date==event.target.date.value){
        //            f=true
        //         }
        //         else f=false
        //     })

        // let s = typeof dateMitting.map((b) => b.dateBussins)
        // dateMitting?.find((b) => formatDate(b.date, 'yyyy-MM-dd', 'en_US') == event.target.date.value, 'yyyy-MM-dd', 'en_US'))
        // dateMitting?.find((b) => b.dateBussins == event.target.date.value)
        // if (f) {
        //     alert("the date not good" + chooseBusiness);
        // }
        // else {

        debugger
        event.preventDefault();
        const newbusiness: IBusiness = {
            id: idCount.toString(), serviceTypeId: chooseBusiness!, nameCustomer: event.target.name.value,
            phoneCustomer: event.target.phone.value, emailCustomer: event.target.email.value, date: event.target.date.value, time: event.target.time.value
        };
        axios
            .post('http://localhost:3000/business/', newbusiness)
            .then(() => {
                setDisplayCustomerdetails(false);
                setChooseBusiness('');
                setidCount((idCount + 1))
            })
            .catch(err => {
                console.error(err);
            });
        //    }
    }

    const chekService = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChooseBusiness((event.target as HTMLInputElement).value);
    };

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
                            <h1>שרותי העסק</h1>

                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <FormControl component="fieldset" >
                        {/* <FormLabel component="legend" className="title">שרותי העסק:</FormLabel> */}
                        <RadioGroup aria-label="gender" name="gender1" value={chooseBusiness} onChange={chekService}>
                            <ul>{dataService.map(s => <FormControlLabel key={s.id} value={s.id} control={<Radio />} label={s.serviceType} />)}</ul>
                        </RadioGroup>
                    </FormControl>
                    
                    {chooseBusiness != '' ?
                    
                        <form onSubmit={addBusiness} >
                            <p>מחיר  {dataService.filter((t) => t.id === chooseBusiness).map((t) => t.price) }   </p>
                            <TextField
                                id="date"
                                label="תאריך עסקה"
                                type="string"
                                name="date"
                                className="margin1"
                                defaultValue="2022-07-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="time"
                                label="זמן עסקה"
                                type="time"
                                name="time"
                                className="margin1"
                                defaultValue="14:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                sx={{ width: 150 }}
                            />
                            <Button variant="contained" className="button" onClick={(d) => setDisplayCustomerdetails(true)}>להזמנה</Button>
                            {displayCustomerdetails ?
                                <div className="update1">
                                    <Button variant="contained" className="button" type="submit">לסיום הזמנה</Button>
                                    <TextField id="outlined-basic" label="שם מלא" name="name" variant="outlined" className="margin" required />
                                    <TextField id="outlined-basic" label="פלאפון" name="phone" variant="outlined" className="margin" required />
                                    <TextField id="outlined-basic" label="מייל" name="email" variant="outlined" className="margin" required />

                                </div> : null}
                        </form> : null}
                </Dialog>
            </div>
        );
    }
// }