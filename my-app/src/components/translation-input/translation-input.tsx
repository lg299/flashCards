import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    textField: {
        margin: '0 auto',
        paddingBottom: 0,
        marginTop: 0,
        '& .Mui-disabled': {
            color:'white !important'
        },
        '& .MuiFormLabel-root': {
            color: 'white',
            fontWeight: 'bold',
            '&.Mui-focused': {
                color: 'white',
            },
        },
        '& .MuiInput-root:before': {
            borderBottom: '2px solid white',
            color: 'white',
        },
        '& .MuiInput-root:after': {
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
        '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
            border: '0',
        },
    },
});

interface InputProps {
    label: string
    disabled: boolean
}

function TranslationInput(props: InputProps) {
    const styles = useStyles();

    return (
        <div>
            <TextField
                id="standard"
                label={props.label}
                variant="standard"
                className={styles.textField}
                disabled={props.disabled}
            />
        </div>
    )
}

export default TranslationInput;
