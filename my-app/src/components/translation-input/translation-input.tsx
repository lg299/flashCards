import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import { alpha, styled } from '@mui/material/styles';


const useStyles = makeStyles({
    textField: {
        margin: '0 auto',
        paddingBottom: 0,
        marginTop: 0,
    },
    paper: {
        margin: "2rem 45rem",
        padding: "1rem 0",
        // backgroundColor: "rgb(188, 112, 163)",
    }
});

const borderStyling = {
    borderBottom: '2px solid white',
    color: 'white',
}

const StyledTextFeild = styled(TextField)<TextFieldProps>(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
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

// function TranslationInput(props: TextFieldProps) {
//     const styles = useStyles();

//     return (
//         <div>
//             <Paper elevation={3} className={styles.paper} sx={{ backgroundColor: 'rgb(188, 112, 163)' }}>
//                 <TextField
//                     id="standard"
//                     label={props.label}
//                     variant="standard"
//                     className={styles.textField}
//                 />
//             </Paper>
//         </div>
//     )
// }

const TranslationInput: React.FC<TextFieldProps> = (props) => {
    const { label } = props;
    return (
        <StyledTextFeild
            id="standard"
            label={props.label}
            variant="standard"
        />
    );
};


export default TranslationInput;
