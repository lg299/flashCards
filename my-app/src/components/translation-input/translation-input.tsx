import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import './translation-input.css'


const useStyles = makeStyles({
    textField: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
    }
});

function TranslationInput() {
    const styles = useStyles();

    return (
        <div>
            <TextField
                id="standard"
                label="Input translation"
                variant="standard"
                className={styles.textField}

            // needs to be
            // InputProps= {{ style : {color: 'white'}}}
            />
        </div>
    )
}

export default TranslationInput;
