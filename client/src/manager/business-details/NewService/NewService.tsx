import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'semantic-ui-react';
import React from 'react';
import { margin } from '@mui/system';
function NewService() {

    return (
        <div >
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
                    <h1 className="h1">הכנס פרטי שירות</h1>
                    <TextField
                        id="standard-textarea"
                        label="סוג השירות"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        id="standard-number"
                        label="מחיר"
                        type="number"
                        variant="standard"
                    />
                <Button variant="contained" className="button-add-service" >
                    שמור
                </Button>

                </Box>
            </List>
   
        </div>
         );
  }
  export default NewService;
