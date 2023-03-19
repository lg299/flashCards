import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles({
    textField: {
        margin: '0 auto',
        paddingBottom: 0,
        marginTop: 0,
        '& .MuiFormLabel-root' : {
            color: 'white',
            '&.Mui-focused' : {
                color: 'white',
                fontWeight: 'bold',
            },
        },
        '& .MuiInput-root:before':{
            borderBottom: '2px solid white',
            color: 'white',
        },
        '& .MuiInput-root:after':{
            borderBottom: '2px solid white',
            color: 'white',
        },
        '& .MuiInput-input': {
            borderBottom: '2px solid white',
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            color: 'white',
        },
        '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before' :{
            border: '0',
        },
    },
    paper: {
        margin: "2rem 45rem", 
        padding: "1rem 0", 
        // backgroundColor: "rgb(188, 112, 163)",
    }
});

function TranslationInput() {
    const styles = useStyles();

    return (
        <div>
            <Paper elevation={3} className={styles.paper} sx={{backgroundColor: 'rgb(188, 112, 163)'}}>
                <TextField
                    id="standard"
                    label="Input translation"
                    variant="standard"
                    className={styles.textField}
                />
            </Paper>
        </div>
    )
}

export default TranslationInput;
