import React from 'react';
import './App.css';
import { Header } from './components/header/header'
import { TranslationInput } from './components/translation-input/translation-input';
import Grid from '@mui/material/Grid';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  arrow: {
    color: 'white',
    paddingTop: "1rem"
  }
})

function App() {
  const styles = useStyles()

  return (
    <div className="App">
      <div>
        < Header />
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={2}>
            <TranslationInput
              label='Quiero una pizza'
              disabled={true}
            />
          </Grid>
          <Grid item xs={2}>
            <ArrowRightAltOutlinedIcon className={styles.arrow} />
          </Grid>
          <Grid item xs={2}>
            <TranslationInput
              label='Input Translation'
              disabled={false}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
