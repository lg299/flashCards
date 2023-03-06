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

const muiStyles = {
    textField: {
        color: 'white',
        fontWeight: 'bold',
    }
}

function TranslationInput() {
    const styles = useStyles();

    return (
        <div>
            <TextField
                id="standard-basic"
                label="Input translation"
                variant="standard"
                className={styles.textField}
                InputProps={{
                    style: muiStyles.textField,
                }}
            // needs to be
            // InputProps= {{ style : {color: 'white'}}}
            />
            <p id="hello">
                hello
            </p>
        </div>
    )
}

export default TranslationInput;
