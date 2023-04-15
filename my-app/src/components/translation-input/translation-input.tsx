import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const borderStyling = {
    borderBottom: '2px solid white',
    color: 'white',
}

const StyledTextFeild = styled(TextField)<TextFieldProps>(({ theme }) => ({
    margin: "0 auto",
    paddingBottom: theme.spacing(1), 
    marginTop: theme.spacing(1), 
    '& .MuiFormLabel-root': {
        color: 'white',
        '&.Mui-focused': {
            color: 'white',
            fontWeight: 'bold',
        },
    },
    '& .MuiInput-root:before': borderStyling,
    '& .MuiInput-root:after': borderStyling,
    '& .MuiInput-input': borderStyling,
    '& .MuiInput-underline:after': {
        color: 'white',
    },
    '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
        border: '0',
    },
}));

interface TextFieldProps {
    label: string
}


export function TranslationInput(props: TextFieldProps) {
    const { label } = props;
    return (
        <StyledTextFeild
            id="standard"
            label={label}
            variant="standard"
        />
    );
};
